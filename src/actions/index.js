export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items
  }
}

//Action Creator
export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe
  }
}
