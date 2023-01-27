import React from "react";
import Link from "next/link";
import { fetchCocktailsById, fetchRandomCocktail } from "../../cocktails.api";

type RecipeProps = {
  params: {
    recipeId: string;
  };
};

async function Reroll ({ params: { recipeId } }: RecipeProps) {
  let recipe = await fetchCocktailsById(recipeId);
  let reroll = await fetchRandomCocktail();
  const { name, ingredients, preparation, img } = recipe[0];
  return (
    <div className="bg-yellow-600 rounded-lg shadow-lg py-4 pl-4 m-10 max-w-lg mx-auto relative">
      <span className="text-2xl font-bold mb-2">{name}</span>
      <Link href={`/cocktails/random/${reroll[0]._id}`}>
        <span className="absolute bg-black text-white pl-1 pr-1 right-2 rounded">
          ♻︎ ☈e-☈oll
        </span>
      </Link>
      <div className="text-gray-700 font-serif mb-4">
        A recipe from my personal collection
      </div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
          <ul className="list-disc pl-4">
            {ingredients.split(",").map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold my-2">Instructions:</h3>
          <p className="mr-2">
            {preparation
              .split(".")
              .filter((x) => x !== "")
              .map((steps, idx) => (
                <li key={idx} className="list-decimal">
                  {steps}
                </li>
              ))}
          </p>
        </div>

        <div className="w-1/2 p-2">
          <img className="h-64 rounded-lg" src={img}></img>
        </div>
      </div>
    </div>
  );
}

export default Reroll ;
