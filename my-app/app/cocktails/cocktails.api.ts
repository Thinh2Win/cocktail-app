type Recipe = {
  _id: string;
  Name: string;
  Ingredients: string;
  Garnish: string;
  Preparation: string;
};

export async function fetchCocktailsByName(name: string) {
  const res = await fetch(`http://${process.env.API_URL}/drink/name?n=${name}`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

export async function fetchCocktailsById(id: string) {
  const res = await fetch(`http://${process.env.API_URL}/drink/id?id=${id}`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

export async function fetchCocktailsByIngredient(ingredient: string) {
  const res = await fetch(`http://${process.env.API_URL}/drink/search?i=${ingredient}`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

export async function fetchCocktailsExcludingIngredient(ingredient: string) {
  const res = await fetch(`http://${process.env.API_URL}/drink/filter?i=${ingredient}`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

export async function fetchRandomCocktail() {
  const res = await fetch(`http://${process.env.API_URL}/drink`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

