import React from 'react';
import Link from 'next/link';
import { fetchCocktailsByIngredient } from '../../../cocktails.api';

type RecipeProps = {
  params: {
    ingredients: string;
  }
}

async function RecipesList({params: {ingredients}}: RecipeProps) {
  const cocktails = await fetchCocktailsByIngredient(ingredients);

  return (
    <>
      <div className="flex flex-wrap -mx-4 p-5">
        {cocktails.map(recipe => {
          return <Recipe key={recipe._id} recipe={recipe}/>
      })}
      </div>
    </>
  )
}

function Recipe({ recipe }: any) {
  const {_id, Name} = recipe;

  return (
      <div className="w-1/3 px-4 mb-8">
          <div className="bg-yellow-600 rounded-lg shadow-lg p-4 mb-4">
          <Link href={`/cocktails/${_id}`} className="text-1xl font-bold mb-2 text-gray-800">{Name}</Link>
          <img className="w-36 h-24 rounded-sm" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
          </div>
        </div>
  )
}

export default RecipesList