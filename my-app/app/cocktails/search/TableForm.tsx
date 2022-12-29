'use client';
import React, { FC, FormEvent, useState, useEffect } from 'react';

interface Props {
  handleSearch: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const TableForm: FC<Props> = ({handleSearch, setSearch}) => {
  const [list, setList] = useState({});
  const [ingredient, setIngredient] = useState('');

  useEffect(() => {
    if(list) {
      let search = Object.keys(list).join(',');
      setSearch(search);
    }
  }, [list]);

  const handleEnter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIngredient('');
    setList({
      ...list,
      [ingredient]: 1,
    });
  }

  const handleRemove = async (name: string) => {
    let newList:any = {...list};
    delete newList[name];
    setList(newList);
  }

  return (
    <>
      <form onSubmit={handleEnter}>
        <input
          type='text'
          value={ingredient}
          placeholder='enter ingredient'
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button className='py-1 px-4 rounded-lg bg-gray-800'
          type='submit'
        >
          enter
        </button>
      </form>

      <div className='bg-yellow-600 border rounded-md p-4 mr-20'>
        <h1 className='font-bold text-lg'>My Ingredients:</h1>
        <ul className='grid grid-cols-2'>
          {Object.keys(list).map(item => (
            <li key={item} className='px-2 rounded-md'>
              <span className='font-medium'>
                - {item}
              </span>
              <button className='ml-2 px-1 rounded-md text-black text-xs'
                onClick={() => handleRemove(item)}
              >x</button>
            </li>))
          }
        </ul>
      </div>
      <form onSubmit={handleSearch}>
        <button type='submit' className='py-2 px-4 my-4 rounded-lg bg-gray-800'
        >Find Recipes</button>
      </form>
    </>
  )
}

export default TableForm