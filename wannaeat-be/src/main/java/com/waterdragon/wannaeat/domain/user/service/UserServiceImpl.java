package com.waterdragon.wannaeat.domain.user.service;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;

import com.waterdragon.wannaeat.domain.user.domain.enums.SocialType;
import com.waterdragon.wannaeat.domain.user.dto.request.PhoneCodeSendRequestDto;
import com.waterdragon.wannaeat.domain.user.dto.request.PhoneCodeVerifyRequestDto;
import com.waterdragon.wannaeat.domain.user.exception.error.DuplicatePhoneException;
import com.waterdragon.wannaeat.domain.user.exception.error.InvalidCodeException;
import com.waterdragon.wannaeat.domain.user.exception.error.InvalidPhoneException;
import com.waterdragon.wannaeat.domain.user.repository.UserRepository;
import com.waterdragon.wannaeat.global.auth.oauth2.service.EncryptService;
import com.waterdragon.wannaeat.global.redis.service.RedisService;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final EncryptService encryptService;
	private final RedisService redisService;
	private DefaultMessageService messageService; // 생성자 주입

	@Value("${spring.phone-authcode-expiration-millis}")
	private int authCodeExpirationMillis;

	@Value("${coolsms.senderNumber}")
	private String senderNumber;

	@Value("${coolsms.apiKey}")
	private String apiKey;

	@Value("${coolsms.apiSecret}")
	private String apiSecret;

	@PostConstruct
	public void init() {
		this.messageService = NurigoApp.INSTANCE.initialize(apiKey, apiSecret, "https://api.coolsms.co.kr");
	}

	/**
	 * SMS 인증코드 전송을 요청하는 메소드
	 *
	 * @param phoneCodeSendRequestDto 인증코드 요청 정보
	 * @return void 인증코드 전송 결과
	 */
	@Override
	public void sendPhoneAuthenticationCode(PhoneCodeSendRequestDto phoneCodeSendRequestDto) {
		String to = phoneCodeSendRequestDto.getPhone();
		int code = (int)(Math.random() * (90000)) + 100000;
		String certificationNumber = String.valueOf(code);
		String phone = encryptService.encryptData(to);
		SocialType socialType = phoneCodeSendRequestDto.getSocialType();

		// 해당 번호로 가입된 계정 조회
		userRepository.findByPhoneAndSocialTypeAndDeletedFalse(phone, socialType)
			.ifPresent((existingRestaurant) -> {
				throw new DuplicatePhoneException("해당 번호로 가입된 " + socialType.toString() + " 계정이 존재합니다.");
			});

		Message message = new Message();
		message.setFrom(senderNumber);
		message.setTo(to);
		message.setText("[머물래] 본인 확인 인증번호는 [" + certificationNumber + "]입니다.\n5분 이내에 인증을 완료해주세요.");

		// messageService.sendOne(new SingleMessageSendingRequest(message));
		SingleMessageSentResponse m = messageService.sendOne(new SingleMessageSendingRequest(message));
		if (!m.getStatusCode().substring(0, 1).equals("2")) {
			throw new InvalidPhoneException("유효하지 않은 번호입니다.");
		}
		// SMS 인증 요청 시 인증 번호 Redis에 저장 ( key = phone + socialType / value = AuthCode )
		redisService.setValues(phone + phoneCodeSendRequestDto.getSocialType().toString(), certificationNumber,
			Duration.ofMillis(authCodeExpirationMillis));
	}

	/**
	 * SMS 인증코드 검증 메소드
	 *
	 * @param phoneCodeVerifyRequestDto 입력받은 인증코드 정보
	 * @return boolean 인증 성공시 true 반환
	 */
	@Override
	public boolean verifyPhoneAuthenticationCode(PhoneCodeVerifyRequestDto phoneCodeVerifyRequestDto) {
		String phone = encryptService.encryptData(phoneCodeVerifyRequestDto.getPhone());
		String key = phone + phoneCodeVerifyRequestDto.getSocialType().toString();
		String redisAuthCode = (String) redisService.getValues(key);

		if (!redisService.checkExistsValue(redisAuthCode)) {
			throw new InvalidCodeException("인증코드가 만료되었습니다.");
		}
		if (!redisAuthCode.equals(
			String.valueOf(phoneCodeVerifyRequestDto.getCode()))) {
			throw new InvalidCodeException("인증코드가 일치하지 않습니다.");
		}
		redisService.deleteValues(key);
		return true;
	}
}
