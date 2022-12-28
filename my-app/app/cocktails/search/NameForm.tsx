import React, { FC, FormEvent } from 'react'

interface Props {
  handleSearch: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const NameForm:FC<Props> = ({handleSearch, search, setSearch}) => {
  return (
    <form onSubmit={handleSearch}>
          <input
            className='pr-5 pl-2 m-2 bg-gray-800'
            type='text'

            value={search}
            placeholder='cocktail name'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type='submit'
            className='bg-gray-800 text-white py-1 px-4 rounded-lg'
          >
            Search
          </button>
        </form>
  )
}

export default NameForm