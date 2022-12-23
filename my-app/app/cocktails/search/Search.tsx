'use client'

import { useRouter } from 'next/navigation'
import React, {FormEvent, useState} from 'react'

function Search() {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('name');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    switch(select) {
      case 'name':
        router.push(`/cocktails/search/name/${search}`);
        break;
      case 'ingredients':
        router.push(`/cocktails/search/ingredients/${search}`);
        break;
      case 'filter':
        router.push(`/cocktails/search/filter/${search}`);
        break;
    }
  }

  return (
    <>
      <form className='flex flex-row'>
        <label className='block font-bold mr-2'>
          <input
            className='mr-2 leading-tight'
            type='radio'
            value='name'
            checked={select === 'name'}
            onChange={e => setSelect(e.target.value)}
          /> Name </label>
        <label className='block font-bold mr-2'>
          <input
            className='mr-2 leading-tight'
            type='radio'
            value='ingredients'
            checked={select === 'ingredients'}
            onChange={e => setSelect(e.target.value)}
          /> By Ingredients </label>
        <label className='block font-bold mr-2'>
          <input
            className='mr-2 leading-tight'
            type='radio'
            value='filter'
            checked={select === 'filter'}
            onChange={e => setSelect(e.target.value)}
          /> Filter Ingredients
        </label>
      </form>

      <form onSubmit={handleSearch}>
        <input
          className='pr-5'
          type='text'
          value={search}
          placeholder='cocktail name'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type='submit'
          className='bg-gray-400 text-white py-2 px-4 rounded-lg'
        >
          Search
        </button>
      </form>
    </>
  )
}

export default Search