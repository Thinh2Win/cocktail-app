import React from 'react'
import { fetchRecipesById } from '../recipes.api';

type RecipeProps = {
  params: {
    recipeId: string;
  }
}

async function RecipePage({ params: { recipeId } }: RecipeProps) {
  let recipe = await fetchRecipesById(recipeId);
  return (
    <div className="bg-yellow-300 rounded-lg shadow-lg p-4 mb-4">
      <div className="text-2xl font-bold mb-2">{recipe[0].Name}</div>
      <div className="text-gray-700 font-serif mb-4">
        A recipe from my personal collection
      </div>
      <div className="flex mb-4">
        <div className="w-1/3">
          <div className="text-lg font-bold mb-2">Ingredients:</div>
          <ul className="list-disc pl-4">
            {recipe[0].Ingredients.split(',').map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
          </ul>
            {recipe[0].Garnish &&
            <>
            <div className="text-lg font-bold mb-2">Garnish:</div>
            {recipe[0].Garnish.split(',').map(ingredient => <li>{ingredient}</li>)}
            </>}
        </div>
        <div className="w-2/3">
          <div className="text-lg font-bold mb-2">Instructions:</div>
          <p className="list-decimal pl-4">
            {recipe[0].Preparation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecipePage