import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav className='bg-gray-800 p-4 flex justify-between items-center'>
        <Link href='/' className='text-white font-bold text-2xl'>Personal Bartender</Link>
        <div className='flex items-center'>
          <Link href='/' className='text-white mr-4 hover:text-gray-400'>Home</Link>
          <Link href='#' className='text-white mr-4 hover:text-gray-400'>About</Link>
          <Link href='#' className='text-white mr-4 hover:text-gray-400'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header