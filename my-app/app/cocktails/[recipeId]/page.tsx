import React from 'react'
import { fetchCocktailsById } from '../cocktails.api';

type RecipeProps = {
  params: {
    recipeId: string;
  }
}

async function RecipePage({ params: { recipeId } }: RecipeProps) {
  let recipe = await fetchCocktailsById(recipeId);
  const {Name, Ingredients, Preparation} = recipe[0];

  return (
    <div className="bg-yellow-600 rounded-lg shadow-lg p-4 m-10 max-w-md mx-auto">
      <div className="text-2xl font-bold mb-2">{Name}</div>
      <div className="text-gray-700 font-serif mb-4">
        A recipe from my personal collection
      </div>
      <div className="flex mb-4">
        <div className="w-2/3">
          <div className="text-lg font-bold mb-2">Ingredients:</div>
          <ul className="list-disc pl-4">
            {Ingredients.split(',').map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
          </ul>
          <div className="text-lg font-bold mb-2">Instructions:</div>
          <p className="pl-4">
            {Preparation}
          </p>
        </div>

        <div className="w-1/3">
          <img className="w-36 h-24 rounded-lg" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
      </div>
    </div>
  )
}

export default RecipePage