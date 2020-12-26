import styled from 'styled-components';
import {getActiveIngrids} from '../../redux/selectors/purchaseSelectors';
import {useSelector} from 'react-redux';
import { useMemo } from 'react';
import ActiveComponent from '../../components/ActiveComponent';
import ActiveComopnent from '../../components/ActiveComponent';

const PurchaseView = () => {

  const activeItems = useSelector(getActiveIngrids);

  const overallPrice = useMemo(() => {
    return activeItems.reduce((sum, item) => sum + item.price, 0);
  }, [activeItems]);


  return (
    <S.Wrapper>
      <S.Heading>Область просмотра заказа:</S.Heading>
      <ul>
        {activeItems.map(({name, isActive}) => (<ActiveComopnent key={name} compName={name} isActive={isActive} />))}
      </ul>  
      <div>Цена: {overallPrice}$</div>
    </S.Wrapper>
  );
};

const S = {
  Wrapper:styled.div`
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;

    & ul {
      list-style-type:none;
      flex-grow: 1;

      & li {
        margin: 10px 0;
        font-size: 20px;
      }

      & button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: coral;
        line-height: 30px;
        transition: all 0.2s ease;
        cursor: pointer;
        margin-left: 20px;
        outline: none;

        &:hover {
          background-color: red;
        }
      }
    }
  `,
  Heading: styled.h2`
    text-align: center;
    font-size: 30px;
    padding: 4%;
  `,
}

export default PurchaseView;