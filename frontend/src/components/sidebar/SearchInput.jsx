import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" 
        placeholder="Search..." 
        className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-cyan-500 text-white '>
        
        <RiUserSearchFill className='w-7 h-7 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput



/* import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" 
        placeholder="Search..." 
        className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-cyan-500 text-white '>
        
        <RiUserSearchFill className='w-7 h-7 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput */