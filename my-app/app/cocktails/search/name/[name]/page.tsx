import React from 'react';
import Link from 'next/link';
import { fetchCocktailsByName } from '../../../cocktails.api';

type RecipeProps = {
  params: {
    name: string;
  }
}

async function RecipesList({params: {name}}: RecipeProps) {
  const cocktails = await fetchCocktailsByName(name);

  return (
    <>
      <p className='text-gray-500 text-sm'>you searched for {name}</p>
      <div className="flex flex-wrap -mx-4 p-5">
        {cocktails.map(recipe => {
          return <Recipe key={recipe._id} recipe={recipe} cocktails={cocktails}/>
      })}
      </div>
    </>
  )
}

function Recipe({ recipe, cocktails }: any) {
  const {_id, Name} = recipe;

  return (
      <div className="w-1/3 px-4 mb-8">
          <div className="bg-yellow-600 rounded-lg shadow-lg p-4 mb-4">
          <Link href={`/cocktails/${_id}`} className="text-1xl font-bold mb-2 text-gray-800">{Name}</Link>
          <img className="w-36 h-24 rounded-md" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
          </div>
        </div>
  )
}

export default RecipesList