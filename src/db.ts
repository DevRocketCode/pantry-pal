import recipes from './recipes.json';

export interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
}

export const get = () => {
  return recipes;
}

export const getByIndex = (idx: number) => {
  return recipes[idx];
}

export const add = (recipe: Recipe) => {
  recipes.push(recipe);
}
