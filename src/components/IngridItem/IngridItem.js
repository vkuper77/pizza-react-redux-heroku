import {useDispatch} from 'react-redux';


const IngridItem = ({ingridName, isActive, price, onItemSelected}) => {
  return (
    <li>
      <button className={isActive ? "active" : ""} onClick={() => {
        onItemSelected(ingridName, isActive)
      }} >{`${ingridName} ${price}$`}</button>
    </li>
  )
};

export default IngridItem;