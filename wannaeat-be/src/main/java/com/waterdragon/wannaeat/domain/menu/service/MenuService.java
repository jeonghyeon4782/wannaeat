package com.waterdragon.wannaeat.domain.menu.service;

import org.springframework.web.multipart.MultipartFile;

import com.waterdragon.wannaeat.domain.menu.dto.request.MenuEditRequestDto;
import com.waterdragon.wannaeat.domain.menu.dto.request.MenuRegisterRequestDto;

public interface MenuService {

	void registerMenu(MenuRegisterRequestDto menuRegisterRequestDto, MultipartFile multipartFile);

	void editMenu(Long menuId, MenuEditRequestDto menuEditRequestDto, MultipartFile multipartFile);
}
