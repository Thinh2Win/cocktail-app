import React from 'react'
import { fetchRandomCocktail } from '../cocktails.api'

async function getData() {
  const res = await fetchRandomCocktail();
  if (!res) {
    throw new Error('Failed to fetch data');
  }
  return res;
}

async function Random() {
  const data = await getData();
  const {Name, Ingredients, Garnish, Preparation} = data[0];

  return (
    <div className="bg-yellow-600 rounded-lg shadow-lg p-4 mb-4">
      <div className="text-2xl font-bold mb-2">{Name}</div>
      <div className="text-gray-700 font-serif mb-4">
        A recipe from my personal collection
      </div>
      <div className="flex mb-4">
        <div className="w-1/3">
          <div className="text-lg font-bold mb-2">Ingredients:</div>
          <ul className="list-disc pl-4">
            {Ingredients.split(',').map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
          </ul>
            {Garnish &&
            <>
            <div className="text-lg font-bold mb-2">Garnish:</div>
            {Garnish.split(',').map(ingredient => <li>{ingredient}</li>)}
            </>}
        </div>
        <div className="w-2/3">
          <div className="text-lg font-bold mb-2">Instructions:</div>
          <p className="list-decimal pl-4">
            {Preparation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Random