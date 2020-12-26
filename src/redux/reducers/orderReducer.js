import { ITEM_SELECT } from "../constants/purchaseConstants";

const defaultState = {
  ingrids: [
    {
      title: "Соус",
      canBeActive: 1,
      currentActive: [],
      components: [
        {
          name: "Чесночный",
          price: 4,
          isActive: false,
        },
        {
          name: "Терияки",
          price: 2,
          isActive: false,
        },
        {
          name: "Барбекю",
          price: 3,
          isActive: false,
        },
        {
          name: "Кетчуп",
          price: 5,
          isActive: false,
        },
      ],
    },
    {
      title: "Добавки",
      currentActive: [],
      canBeActive: 2,
      components: [
        {
          name: "Пеперони",
          price: 8,
          isActive: false,
        },
        {
          name: "Грибы",
          price: 5,
          isActive: false,
        },
        {
          name: "Сыр",
          price: 6,
          isActive: false,
        },
        {
          name: "Колбаса",
          price: 7,
          isActive: false,
        },
      ],
    },
    {
      title: "Допы",
      currentActive: [],
      canBeActive: 2,
      components: [
        {
          name: "Креветки",
          price: 12,
          isActive: false,
        },
        {
          name: "Ананас",
          price: 11,
          isActive: false,
        },
        {
          name: "Моцарелла",
          price: 14,
          isActive: false,
        },
        {
          name: "Сосиски",
          price: 24,
          isActive: false,
        },
      ],
    },
    {
      title: "Основа",
      currentActive: [],
      canBeActive: 1,
      components: [
        {
          name: "Нутелла",
          price: 20,
          isActive: false,
        },
        {
          name: "Чеснок",
          price: 10,
          isActive: false,
        },
        {
          name: "Томат",
          price: 5,
          isActive: false,
        },
      ],
    },
  ],
};

const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ITEM_SELECT:
      return {
        ingrids: state.ingrids.map((ingr) => {
          if (
            (ingr.currentActive.length === ingr.canBeActive &&
            action.payload.isActive) 
            || 
            (ingr.currentActive.length < ingr.canBeActive &&
              action.payload.isActive)
          ) {
            let newIngr = { ...ingr };
            newIngr.components = newIngr.components.map((comp) => {
              
              if (comp.name === action.payload.name) {
                let newComp = {
                  ...comp,
                  isActive: !comp.isActive,
                };
                newIngr.currentActive.splice(
                  newIngr.currentActive.findIndex(
                    (curItem) => curItem.name === newComp.name
                  ),
                  1
                );
                return newComp;
              }
              return {...comp};
            });
            return {...newIngr};
          } else if (
            (ingr.currentActive.length < ingr.canBeActive &&
            !action.payload.isActive)
          ) {
            let newIngr = { ...ingr };
            newIngr.components = newIngr.components.map((comp) => {
              if (comp.name === action.payload.name) {
                let newComp = {
                  ...comp,
                  isActive: !comp.isActive,
                };
                newIngr.currentActive.push(newComp);
                return newComp;
              } 
              return { ...comp };
              
            });
            return newIngr;
          } else {
            return { ...ingr };
          }
        }),
      };

    default:
      return state;
  }
};

export default orderReducer;
