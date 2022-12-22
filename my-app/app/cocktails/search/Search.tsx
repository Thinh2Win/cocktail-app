'use client'

import { useRouter } from 'next/navigation'
import React, {FormEvent, useState} from 'react'

function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/cocktails/search/${search}`)
  }

  return (
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
  )
}

export default Search