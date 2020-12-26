import {ITEM_SELECT} from '../constants/purchaseConstants';

export const itemSelect = (name, isActive) => ({
  type: ITEM_SELECT,
  payload:{
    name,
    isActive
  }
}) 