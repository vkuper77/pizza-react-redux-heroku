import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCanBePurchased } from '../../redux/selectors/purchaseSelectors'

const PurchaseOrder = () => {
  const canBePurchased = useSelector(getCanBePurchased)

  return (
    <S.Wrapper>
      <S.Button disabled={!canBePurchased}>Заказать</S.Button>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  Button: styled.button`
    border: none;
    font-size: 40px;
    padding: 10px 35px;
    border-radius: 8px;
    background-color: lightgreen;
    transition: all 0.5s ease;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: green;
    }

    &:disabled {
      background-color: gray;
      color: #2d2d2d;
      cursor: not-allowed;
    }
  `,
}

export default PurchaseOrder
