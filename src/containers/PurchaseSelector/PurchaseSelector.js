import {useSelector} from 'react-redux';
import {getAllIngids} from '../../redux/selectors/purchaseSelectors';
import IngridList from '../../components/IngridList';
import styled from 'styled-components';

const PurchaseSelector = () => {

  const goods = useSelector(getAllIngids);

  console.log('all ingrids', goods);

  return (
    <S.Wrapper>
       {goods.map(good => (
          <IngridList 
            key={good.title}
            title={good.title}
            ingredients={good.components}
          />
        ))} 
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    padding: 2.3%;

    & ul {
      list-style-type: none;
    }

    & h3 {
      margin-bottom: 30px;
      text-align: center;
    }

    & button {
      border-radius: 8px;
      border: 2px solid #fff;
      color: #fff;
      padding: 10px 15px;
      width: 150px;
      margin: 10px 0;
      outline: none;
      cursor: pointer;
      transition: all 0.5s ease;
      background-color: transparent;

      &:hover {
        background-color: coral;
      }

      &.active {
        border: 2px solid #fff;
        font-weight: bold;
        background-color: lightcoral;
      }
    }
  `
}

export default PurchaseSelector;
