import styled from '@emotion/styled';
import theme from 'style/common/theme.js';

import { ReactComponent as SquareTableDisabledIcon } from 'assets/icons/manager/restaurant/table-square-disabled.svg';
import { ReactComponent as RoundTableDisabledIcon } from 'assets/icons/manager/restaurant/table-rounded-disabled.svg';

import { ReactComponent as RestroomIcon } from 'assets/icons/manager/restaurant/restroom.svg';
import { ReactComponent as CounterIcon } from 'assets/icons/manager/restaurant/cashier.svg';
import { ReactComponent as EntranceIcon } from 'assets/icons/manager/restaurant/door.svg';
import { ReactComponent as KitchenIcon } from 'assets/icons/manager/restaurant/kitchen.svg';

const Items = [
  {
    itemType: 'square',
    label: '사각 테이블',
    icon: SquareTableDisabledIcon,
  },
  {
    itemType: 'rounded',
    label: '원형 테이블',
    icon: RoundTableDisabledIcon,
  },
  {
    itemType: 'restroom',
    label: '화장실',
    icon: RestroomIcon,
  },
  {
    itemType: 'counter',
    label: '계산대',
    icon: CounterIcon,
  },
  {
    itemType: 'entrance',
    label: '출입구',
    icon: EntranceIcon,
  },
  {
    itemType: 'kitchen',
    label: '주방',
    icon: KitchenIcon,
  },
];

const SeatSelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 48vh;
  height: 48vh;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 60vh;
    height: 60vh;
  }
`;

const MapStyled = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  max-width: 480px;
  border: 1px solid ${theme.color.primary};

  @media (min-width: 480px) {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 480px;
    border: 1px solid ${theme.color.primary};
  }
`;

const ItemWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ x }) => (x / 480) * 100}%;
  top: ${({ y }) => (y / 480) * 100}%;
  width: ${({ svgWidth }) => svgWidth}%;
  height: ${({ svgHeight }) => svgHeight}%;
  /* width: 23%;
    height: 23%; */

  /* background-color: blue; */

  svg {
    width: 100%;
    height: 100%;

    &:active {
      transform: scale(0.98);
    }

    /* cursor: pointer; */
  }
`;

const LabelStyled = styled.div`
  font-size: ${theme.fontSize.px13};
  font-weight: ${theme.fontWeight.default};
`;

const ModalContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 180px;
  height: fit-content;

  margin-top: -20%;

  @media (min-width: 480px) {
    width: 200px;
    height: fit-content;

    margin-top: -20%;
  }
`;

const TableInfoWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 12%;
`;

const SeatLabelStyled = styled.div`
  width: 100%;
  font-size: ${theme.fontSize.px15};
  font-weight: ${theme.fontWeight.bold};

  @media (min-width: 480px) {
    font-size: ${theme.fontSize.px17};
    font-weight: ${theme.fontWeight.bold};
  }
`;

const SeatValueStyled = styled.div`
  width: 100%;
  font-size: ${theme.fontSize.px15};
  text-align: start;

  @media (min-width: 480px) {
    font-size: ${theme.fontSize.px17};
    text-align: start;
  }
`;

export {
  Items,
  SeatSelectStyled,
  MapStyled,
  ItemWrapperStyled,
  LabelStyled,
  TableInfoWrapperStyled,
  SeatLabelStyled,
  SeatValueStyled,
  ModalContainerStyled,
};
