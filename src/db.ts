import recipes from './recipes.json';

// Define the Recipe type
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

// use the Recipe type to define the recipe parameter
export const add = (recipe: Recipe) => {
  recipes.push(recipe);
}
