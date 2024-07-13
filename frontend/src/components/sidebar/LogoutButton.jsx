import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {logout}= useLogout()

  return (
    <div className='mt-auto'>
        <BiLogOutCircle className='w-5 h-5 text-white cursor-pointer'
        onClick={logout}/>
    </div>
  )
}

export default LogoutButton