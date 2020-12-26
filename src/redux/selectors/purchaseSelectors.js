import { createSelector } from 'reselect'

const getIngr = (state) => state.ingrids

export const getAllIngids = createSelector(getIngr, (ings) => ings)

export const getActiveIngrids = createSelector(getIngr, (ings) =>
  ings.reduce((overall, ing) => {
    return [...overall, ...ing.components.filter((comp) => comp.isActive)]
  }, [])
)

export const getCanBePurchased = createSelector(getIngr, (ings) =>
  ings.every((ingrid) => {
    return (
      ingrid.currentActive.length > 0 &&
      ingrid.currentActive.length <= ingrid.canBeActive
    )
  })
)
