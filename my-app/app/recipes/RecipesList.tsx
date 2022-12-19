import React from 'react'
import { fetchRandomRecipe, fetchRecipesByName } from './recipes.api';
import Link from 'next/link';

async function RecipesList() {
  const recipes = await fetchRecipesByName('negroni');

  return (
    <div className="flex flex-wrap -mx-4 p-5">
      {recipes.map(recipe => {
        return <div className="w-1/3 px-4 mb-8">
          <div className="bg-yellow-100 rounded-lg shadow-lg p-4 mb-4">
          <Link href={`/recipes/${recipe._id}`} className="text-1xl font-bold mb-2">{recipe.Name}</Link>
          <p className="text-gray-700 font-serif mb-4">
            A recipe from my personal collection
          </p>
          <img className="w-36 h-24 rounded-sm" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
    </div>
    })}
</div>
  )
}

export default RecipesList