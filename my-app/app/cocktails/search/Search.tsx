'use client'

import { useRouter } from 'next/navigation';
import React, {FormEvent, useState} from 'react';
import TableForm from './TableForm';
import NameForm from './NameForm';

function Search() {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('name');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    if (search.length === 0) {
      alert('please enter search criteria');
      return;
    }
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

      {select === 'name' ? (
        <NameForm handleSearch={handleSearch} search={search} setSearch={setSearch}/>
        ) : (
        <TableForm handleSearch={handleSearch} setSearch={setSearch} search={search}/>
        )
      }
    </>
  )
}

export default Search