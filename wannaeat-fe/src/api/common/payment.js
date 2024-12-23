import { authClientInstance, clientInstance } from 'utils/http-client';

/*카카오페이*/

// 보증금 결제 카페
export const payDepositPaymentByKakaoPay = async (requestDto) => {
  return await authClientInstance
    .post('/api/payments/deposit/kakao', requestDto)
    .then((result) => result)
    .catch((error) => error);
};

// 보증금 결제완료 카페
export const payDepositPaymentSuccessByKakaoPay = async (
  paymentId,
  pgToken,
  type
) => {
  return await clientInstance
    .get(
      `/api/public/payments/completed/kakao?payment_id=${paymentId}&pg_token=${pgToken}&type=${type}`
    )
    .then((result) => result)
    .catch((error) => error);
};

// 음식비 결제준비완료 카페
export const readyMenuPaymentByKakaoPay = async () => {
  return (await clientInstance.post('/api/payments/menus/ready/kakao'))
    .then((result) => result)
    .catch((error) => error);
};

// 음식비 결제 카페
export const payMenuByKakaoPay = async (requestDto) => {
  return await clientInstance
    .post('/api/public/payments/menus/kakao', requestDto)
    .then((result) => result)
    .catch((error) => error);
};

export const payMenuSuccessByKakaoPay = async (paymentId, pg_token, type) => {};
/*싸피페이*/

// 보증금 결제 싸페
export const payDepositPaymentBySsafyPay = async (requestDto) => {
  return await authClientInstance
    .post('/api/payments/deposit/ssafy', requestDto)
    .then((result) => result)
    .catch((error) => error);
};

// 음식비 결제 싸페
export const payMenuBySsafyPay = async (requestDto) => {
  return await authClientInstance
    .post('/api/payments/menus/ssafy', requestDto)
    .then((result) => result)
    .catch((error) => error);
};
