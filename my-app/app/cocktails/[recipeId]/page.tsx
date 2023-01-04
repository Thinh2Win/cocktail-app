import React from 'react';
import { fetchCocktailsById } from '../cocktails.api';

type RecipeProps = {
  params: {
    recipeId: string;
  }
}

async function RecipePage({ params: { recipeId }}: RecipeProps) {
  let recipe = await fetchCocktailsById(recipeId);
  const {Name, Ingredients, Preparation} = recipe[0];
  return (
    <div className="bg-yellow-600 rounded-lg shadow-lg py-4 pl-4 m-10 max-w-lg mx-auto">
      <div className="text-2xl font-bold mb-2">{Name}</div>
      <div className="text-gray-700 font-serif mb-4">
        A recipe from my personal collection
      </div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
          <ul className="list-disc pl-4">
            {Ingredients.split(',').map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
          </ul>
          <h3 className="text-lg font-bold my-2">Instructions:</h3>
          <p className="mr-2">
            {Preparation}
          </p>
        </div>

        <div className="w-1/2 p-2">
          <img className="h-64 rounded-lg" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
      </div>
    </div>
  )
}

export default RecipePage