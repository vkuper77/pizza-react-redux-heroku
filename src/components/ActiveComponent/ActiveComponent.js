import {useDispatch} from 'react-redux';
import {itemSelect} from '../../redux/actions/purchaseActions';

const ActiveComponent = ({compName, isActive}) => {

  const dispatch = useDispatch();

  return (
    <li>
      <span>{compName}</span>
      <button onClick={() => {
        dispatch(itemSelect(compName, isActive));
      }}>&#10006;</button>
    </li>
  );
};

export default ActiveComponent;