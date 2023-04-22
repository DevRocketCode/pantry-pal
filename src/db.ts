import recipes from './recipes.json';

export interface Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export const get = (): Recipe[] => {
  return recipes;
}

export const getByIndex = (index: number): Recipe => {
  return recipes[index];
}

export const add = (recipe: Recipe): Recipe => {
  recipes.push(recipe);
  return recipe;
}
