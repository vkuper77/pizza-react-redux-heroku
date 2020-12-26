import styled from 'styled-components';
import PurchaseView from './containers/PurchaseView';
import PurchaseOrder from './containers/PurchaseOrder';
import PurchaseSelector from './containers/PurchaseSelector';

const App = () => {
  return (
    <S.AppWrapper>
      <S.ViewWrapper>
        <PurchaseView/>
      </S.ViewWrapper>
      <S.OrderWrapper>
        <PurchaseOrder/>
      </S.OrderWrapper>
      <S.SelectorWrapper>
        <PurchaseSelector/>
      </S.SelectorWrapper>
    </S.AppWrapper>
  );
};

const S = {
  AppWrapper: styled.div`
    display: grid;
    grid-template-areas: 'view view view view order order order order'
    'selector selector selector selector selector selector selector selector';
    grid-template-rows: minmax(300px, 1fr) minmax(300px, 1fr);
  `,
  ViewWrapper: styled.div`
    grid-area: view;
    background-color: lightcoral;
  `,
  OrderWrapper: styled.div`
    grid-area: order;
    background-color: lightsalmon;
  `,
  SelectorWrapper: styled.div`
    grid-area: selector;
    background-color: lightsteelblue;
  `
};

export default App;

