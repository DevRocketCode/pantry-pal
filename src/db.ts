import recipes from './recipes.json';

export const get = () => {
  return recipes;
}

export const getByIndex = (idx: number) => {
  return recipes[idx];
}
