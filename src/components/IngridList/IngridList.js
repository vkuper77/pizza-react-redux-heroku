import IngridItem from "../IngridItem/IngridItem";
import {useDispatch} from 'react-redux';
import {itemSelect} from '../../redux/actions/purchaseActions';

const IngridList = ({title, ingredients}) => {

  const dispatch = useDispatch();

  const onItemSelected = (itemName, isActive) => dispatch(itemSelect(itemName, isActive));


  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {ingredients.map(ing => (
          <IngridItem 
            key={ing.name}
            ingridName={ing.name}
            price={ing.price}
            onItemSelected={onItemSelected}
            isActive={ing.isActive}
          />))}
      </ul>
    </div>
  )
}

export default IngridList;