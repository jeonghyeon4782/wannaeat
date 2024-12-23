import { useState, useEffect } from 'react';
import WETab from 'component/common/tab/WETab/WETab.jsx';
import WEButton from 'component/common/button/WEButton/WEButton.jsx';
import {
  TopBox,
  OrderContainer,
  WETabContainer,
  ButtonWrapper,
  MenuContainer,
  TotalMenuP,
  DeleteDiv,
  LineDiv,
  PeopleP,
  MenuDiv,
  MenuImg,
  FoodDiv,
  FoodInfoDiv,
  FoodInfoTopDiv,
  FoodInfoBottomDiv,
  FoodInfoCountLeftBtn,
  FoodInfoCountRightBtn,
  FoodInfoCountDiv,
  FoodInfoCountP,
  MenuNameP,
  DeleteImg,
  FoodPriceP,
  TotalPriceDiv,
  TotalPriceP,
} from '../../../../pages/customer/order/OrderCartPage/OrderCartPage.js';
import theme from '../../../../style/common/theme.js';
import { useNavigate } from 'react-router-dom';
import useOrderStore from '../../../../stores/customer/useOrderStore.js';
import useChatStore from '../../../../stores/customer/useChatStore.js';
import DeleteIcon from 'assets/icons/order/delete.svg';
import useAlert from 'utils/alert.js';
import useModalStore from 'stores/common/useModalStore.js';
import useCartStore from 'stores/customer/useCartStore.js';
const OrderCartBox = ({ reservationUrl }) => {
  const [menus, setMenus] = useState([]);

  const [myCart, setMyCart] = useState([]);
  const [totalCart, setTotalCart] = useState([]);

  const [myCartCnt, setMyCartCnt] = useState(0);
  const [totalCartCnt, setTotalCartCnt] = useState(0);

  const [myCartPrice, setMyCartPrice] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const nav = useNavigate();
  const {
    setModalType,
    setAlertText,
    setIsOneButton,
    setHandleButtonClick,
    close,
    open,
  } = useModalStore();

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['나의 메뉴', '전체 메뉴'];
  const showAlert = useAlert();

  // Zustand에서 필요한 상태와 함수를 가져옴
  const {
    allMenusInfo,
    setAllMenusInfo,
    allSortedMenusInfo,
    setAllMenusSortInfo,
  } = useOrderStore();

  const { cartElements } = useCartStore();

  const [reservationParticipantId, setreservationParticipantId] = useState(0);
  const [menuCounts, setMenuCounts] = useState([]);

  const { stompClient, isConnected } = useChatStore();

  // allMenus를 reservationParticipantId 기준으로 정렬하는 함수
  const sortMenusByParticipantId = (menus, targetId) => {
    return [...menus].sort((a, b) => {
      // targetId(예: reservationParticipantId)와 동일한 것이 먼저 오게 정렬
      if (a.reservationParticipantId === targetId) return -1;
      if (b.reservationParticipantId === targetId) return 1;
      // 그 외에는 기존대로 정렬
      return a.reservationParticipantId - b.reservationParticipantId;
    });
  };

  // 메뉴 정렬 후 Zustand에 저장
  useEffect(() => {
    if (menus.length > 0) {
      const sorted = sortMenusByParticipantId(menus, reservationParticipantId);

      // 정렬된 메뉴를 Zustand에 저장
      setAllMenusSortInfo({
        cartDetailResponseDto: {
          menus: sorted,
        },
      });

      // menuCounts 업데이트
      const updatedMenuCounts = sorted.map((menu) => {
        const menuInfo = Object.values(menu.menuInfo);
        return menuInfo.map((item) => ({
          menuCnt: item.menuCnt,
          menuTotalPrice: item.menuCnt * item.menuPrice,
          menuPrice: item.menuPrice,
        }));
      });
      setMenuCounts(updatedMenuCounts);
    }
    console.log('cartElements', cartElements);
    setMenus(cartElements);
  }, [menus]);

  useEffect(() => {
    setMenus(cartElements);
    setreservationParticipantId(reservationParticipantId);
  }, []);

  useEffect(() => {
    setMenus(cartElements);
    setMyCartCnt(
      menus
        .filter(
          (menu) => menu.reservationParticipantId === reservationParticipantId
        )
        .reduce((total, menu) => {
          return (
            total +
            Object.values(menu.menuInfo).reduce(
              (count, menuItem) => count + menuItem.menuCnt,
              0
            )
          );
        }, 0)
    );
    setTotalCartCnt(
      menus.reduce((total, menu) => {
        return (
          total +
          Object.values(menu.menuInfo).reduce(
            (count, menuItem) => count + menuItem.menuCnt,
            0
          )
        );
      }, 0)
    );
  }, [menus]);

  const handleDecrease = (
    menuIndex,
    itemIndex,
    menuId,
    reservationParticipantId
  ) => {
    setMenuCounts((prevCounts) =>
      prevCounts.map((menu, index) =>
        index === menuIndex
          ? menu.map((item, idx) => {
              if (idx === itemIndex) {
                if (item.menuCnt > 1) {
                  return {
                    ...item,
                    menuCnt: item.menuCnt - 1,
                    menuTotalPrice: item.menuTotalPrice - item.menuPrice,
                  };
                } else {
                  showAlert('메뉴 수량은 0 이하로 줄일 수 없습니다.');
                  return item;
                }
              }
              return item;
            })
          : menu
      )
    );

    const cartRegisterRequestDto = {
      reservationUrl: reservationUrl,
      reservationParticipantId: reservationParticipantId,
      menuId: menuId,
      menuPlusMinus: -1,
    };

    if (stompClient && isConnected) {
      try {
        stompClient.send(
          `/api/public/sockets/carts/register`,
          {},
          JSON.stringify(cartRegisterRequestDto)
        );
      } catch (error) {
        showAlert('장바구니 업데이트를 실패했습니다.');
      }
    } else {
      showAlert('웹소켓 연결에 실패했습니다.');
    }
  };

  const handleIncrease = (
    menuIndex,
    itemIndex,
    menuId,
    reservationParticipantId
  ) => {
    setMenuCounts((prevCounts) =>
      prevCounts.map((menu, index) =>
        index === menuIndex
          ? menu.map((item, idx) =>
              idx === itemIndex
                ? {
                    ...item,
                    menuCnt: item.menuCnt + 1,
                    menuTotalPrice: (item.menuCnt + 1) * item.menuPrice,
                  }
                : item
            )
          : menu
      )
    );

    const cartRegisterRequestDto = {
      reservationUrl: reservationUrl,
      reservationParticipantId: reservationParticipantId,
      menuId: menuId,
      menuPlusMinus: 1,
    };

    if (stompClient && isConnected) {
      try {
        stompClient.send(
          `/api/public/sockets/carts/register`,
          {},
          JSON.stringify(cartRegisterRequestDto)
        );
      } catch (error) {
        showAlert('장바구니 업데이트를 실패했습니다');
      }
    } else {
      showAlert('웹소켓 연결에 실패했습니다.');
    }
  };

  // 주문서 페이지로 이동
  const handleOrderMainClick = () => {
    nav(`/customer/order/${reservationUrl}`);
  };

  // 비우기 버튼 클릭시 실행되는 함수
  const handleMenuDeleteButtonClick = () => {
    const cartClearRequestDto = {
      reservationUrl: reservationUrl,
      reservationParticipantId: reservationParticipantId,
    };

    if (stompClient && isConnected) {
      try {
        stompClient.send(
          `/api/public/sockets/carts/clear`,
          {},
          JSON.stringify(cartClearRequestDto)
        );
      } catch (error) {
        showAlert('비우기버튼 실행실패');
      }
    } else {
      showAlert('웹소켓 연결에 실패했습니다.');
    }

    // 다른 사람들의 메뉴만 필터링해서 저장
    const filteredMenus = menus.filter(
      (menu) => menu.reservationParticipantId !== reservationParticipantId
    );

    setAllMenusSortInfo({
      cartDetailResponseDto: {
        menus: filteredMenus,
      },
    });
  };

  // 주문하기 버튼 클릭시 실행되는 함수
  const handleOrderButtonClick = () => {
    setModalType('alert');
    setAlertText('전체 주문하시겠습니까?');
    setIsOneButton(false);
    setHandleButtonClick(() => {
      const orderRegisterRequestDto = {
        reservationUrl: reservationUrl,
        prepareRequest: true,
      };

      if (stompClient && isConnected) {
        try {
          stompClient.send(
            `/api/public/sockets/orders/register`,
            {},
            JSON.stringify(orderRegisterRequestDto)
          );
          console.log('주문에 보내는 내용2:', orderRegisterRequestDto);

          setAllMenusInfo({ cartDetailResponseDto: { menus: [] } });
          setAllMenusSortInfo({ cartDetailResponseDto: { menus: [] } });
          setMenuCounts([]);
        } catch (error) {
          console.log('주문 실패:', error);
          showAlert('주문에 실패했습니다.');
        }
      } else {
        console.log('stompClient is not initialized or not connected');
        showAlert('웹소켓이 연결되지 않습니다.');
      }
      close();
    });
    open();
  };

  const handleDeleteMenuButton = (menuId) => {
    const cartDeleteRequestDto = {
      reservationUrl: reservationUrl,
      reservationParticipantId: reservationParticipantId,
      menuId: menuId,
    };
    if (stompClient && isConnected) {
      try {
        stompClient.send(
          `/api/public/sockets/carts/delete`,
          {},
          JSON.stringify(cartDeleteRequestDto)
        );
        console.log('메뉴삭제에 보내는 내용:', cartDeleteRequestDto);

        // Zustand에서 현재 메뉴 리스트를 가져와서 나의 메뉴에서 해당 menuId를 삭제
        const updatedMenus = menus
          .map((menuGroup) => {
            if (
              menuGroup.reservationParticipantId === reservationParticipantId
            ) {
              const updatedMenuInfo = Object.values(menuGroup.menuInfo).filter(
                (menu) => menu.menuId !== menuId
              );

              return {
                ...menuGroup,
                menuInfo: updatedMenuInfo.length > 0 ? updatedMenuInfo : [],
              };
            }
            return menuGroup;
          })
          .filter((menuGroup) => menuGroup.menuInfo.length > 0); // 빈 메뉴 그룹은 제거

        // 메뉴를 삭제한 결과를 상태에 저장
        setAllMenusSortInfo({
          cartDetailResponseDto: {
            menus: updatedMenus,
          },
        });

        // menuCounts도 업데이트
        const updatedMenuCounts = updatedMenus.map((menuGroup) => {
          return Object.values(menuGroup.menuInfo).map((menu) => ({
            menuCnt: menu.menuCnt,
            menuTotalPrice: menu.menuCnt * menu.menuPrice,
            menuPrice: menu.menuPrice,
          }));
        });

        setMenuCounts(updatedMenuCounts);
      } catch (error) {
        console.log('메뉴삭제 실패:', error);
        showAlert('메뉴삭제에 실패했습니다.');
      }
    } else {
      console.log('stompClient is not initialized or not connected');
      showAlert('웹소켓 연결이 끊겼습니다.');
    }
  };

  const calculateTotalPrice = (menuIndex) => {
    if (!menuCounts[menuIndex]) return 0;
    return menuCounts[menuIndex].reduce(
      (total, item) => total + item.menuTotalPrice,
      0
    );
  };

  const calculateTotalMenuPrice = () => {
    return menuCounts.reduce((totalMenuPrice, menu) => {
      const menuTotal = menu.reduce(
        (total, item) => total + item.menuTotalPrice,
        0
      );
      return totalMenuPrice + menuTotal;
    }, 0);
  };

  return (
    <OrderContainer>
      <WETabContainer>
        <WETab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </WETabContainer>
      <div>
        <TopBox>
          <MenuContainer>
            <TotalMenuP>
              {activeTab === 0
                ? `총 메뉴 ${myCartCnt}개`
                : `총 메뉴 ${totalCartCnt}개`}
            </TotalMenuP>
            <DeleteDiv>
              {activeTab === 0 ? (
                <WEButton
                  width="100%"
                  height="90%"
                  outlined="true"
                  color={theme.color.disabled}
                  borderColor={theme.color.disabled}
                  fontSize={theme.fontSize.px11}
                  onClick={() => handleMenuDeleteButtonClick(reservationUrl)}
                >
                  비우기
                </WEButton>
              ) : null}
            </DeleteDiv>
          </MenuContainer>
        </TopBox>
        <MenuDiv>
          {activeTab === 0 ? (
            <>
              {menus &&
                menus
                  .filter(
                    (menus) =>
                      menus.reservationParticipantId ===
                      reservationParticipantId
                  )
                  .map((menus, menuIndex) => (
                    <div key={menuIndex}>
                      <PeopleP>{menus.reservationParticipantNickname}</PeopleP>
                      <LineDiv></LineDiv>
                      <div>
                        {menus.menuInfo ? (
                          Object.values(menus.menuInfo).map(
                            (menu, itemIndex) => (
                              <div key={itemIndex}>
                                <FoodDiv>
                                  <MenuImg src={menu.menuImage}></MenuImg>
                                  <FoodInfoDiv>
                                    <FoodInfoTopDiv>
                                      <MenuNameP>{menu.menuName}</MenuNameP>
                                      <DeleteImg
                                        src={DeleteIcon}
                                        alt="삭제버튼"
                                        onClick={() =>
                                          handleDeleteMenuButton(menu.menuId)
                                        }
                                      />
                                    </FoodInfoTopDiv>
                                    <FoodInfoBottomDiv>
                                      <FoodInfoCountDiv>
                                        <FoodInfoCountLeftBtn
                                          onClick={() =>
                                            handleDecrease(
                                              menuIndex,
                                              itemIndex,
                                              menu.menuId,
                                              reservationParticipantId
                                            )
                                          }
                                          disabled={menu.menuCnt <= 0}
                                        >
                                          -
                                        </FoodInfoCountLeftBtn>
                                        <FoodInfoCountP>
                                          {
                                            menuCounts[menuIndex]?.[itemIndex]
                                              ?.menuCnt
                                          }
                                        </FoodInfoCountP>
                                        <FoodInfoCountRightBtn
                                          onClick={() =>
                                            handleIncrease(
                                              menuIndex,
                                              itemIndex,
                                              menu.menuId,
                                              reservationParticipantId
                                            )
                                          }
                                        >
                                          +
                                        </FoodInfoCountRightBtn>
                                      </FoodInfoCountDiv>
                                      <FoodPriceP>
                                        {menuCounts[menuIndex]?.[
                                          itemIndex
                                        ]?.menuTotalPrice.toLocaleString(
                                          'ko-KR'
                                        )}{' '}
                                        원
                                      </FoodPriceP>
                                    </FoodInfoBottomDiv>
                                  </FoodInfoDiv>
                                </FoodDiv>
                                <LineDiv />
                              </div>
                            )
                          )
                        ) : (
                          <p>메뉴 정보가 없습니다.</p>
                        )}
                      </div>
                      <TotalPriceDiv>
                        <TotalPriceP>
                          총:{' '}
                          {calculateTotalPrice(menuIndex).toLocaleString(
                            'ko-KR'
                          ) || ''}{' '}
                          원
                        </TotalPriceP>
                      </TotalPriceDiv>
                      <br />
                    </div>
                  ))}
            </>
          ) : (
            <>
              {menus &&
                menus.map((menus, menuIndex) => (
                  <div key={menuIndex}>
                    <PeopleP>
                      {menus.reservationParticipantNickname || ''}
                    </PeopleP>
                    <LineDiv />
                    <div>
                      {menus.menuInfo ? (
                        Object.values(menus.menuInfo).map((menu, itemIndex) => (
                          <div key={itemIndex}>
                            <FoodDiv>
                              <MenuImg src={menu.menuImage}></MenuImg>
                              <FoodInfoDiv>
                                <FoodInfoTopDiv>
                                  <MenuNameP>{menu.menuName}</MenuNameP>
                                </FoodInfoTopDiv>
                                <FoodInfoBottomDiv>
                                  <FoodInfoCountDiv>
                                    <FoodInfoCountP>
                                      {menu.menuCnt}
                                    </FoodInfoCountP>
                                  </FoodInfoCountDiv>
                                  <FoodPriceP>
                                    {menu.menuTotalPrice}원
                                  </FoodPriceP>
                                </FoodInfoBottomDiv>
                              </FoodInfoDiv>
                            </FoodDiv>
                            <LineDiv />
                          </div>
                        ))
                      ) : (
                        <p>메뉴 정보가 없습니다.</p>
                      )}
                    </div>
                    <TotalPriceDiv>
                      <TotalPriceP>
                        총:{' '}
                        {calculateTotalPrice(menuIndex).toLocaleString(
                          'ko-KR'
                        ) || ''}
                        원
                      </TotalPriceP>
                    </TotalPriceDiv>
                    <br />
                  </div>
                ))}
              <LineDiv />
              <TotalPriceDiv>
                {menuCounts.length > 0 ? (
                  <TotalPriceP>
                    총: {calculateTotalMenuPrice().toLocaleString('ko-KR')}원
                  </TotalPriceP>
                ) : null}
              </TotalPriceDiv>
            </>
          )}
        </MenuDiv>
      </div>
      <ButtonWrapper>
        <WEButton size="medium" outlined="true" onClick={handleOrderMainClick}>
          주문서
        </WEButton>
        <WEButton
          size="medium"
          outlined="true"
          onClick={handleOrderButtonClick}
        >
          주문하기
        </WEButton>
      </ButtonWrapper>
    </OrderContainer>
  );
};

export default OrderCartBox;
