import React from 'react'

const Login = () => {
  return (
    <div className='flex 
                    flex-col
                    items-center
                    justify-center
                    min-w-96
                    mx-auto'>

        <div className='w-full
                        p-6
                        rounded-lg
                        shadow-md
                        bg-gray-600
                        bg-clip-padding
                        backdrop-filter
                        backdrop-blur-lg
                        bg-opacity-15'>
            <h1 className='text-2xl
                            font-semibold
                            text-center
                            text-white'>
                                Login into your Account
            </h1>
            <form className='mt-6'>
                <div>
                    <label className='label'>
                        <span className='text-base
                                        label-text
                                        mt-2'>
                                            Username
                                        </span>
                    </label>
                  <input type="text"
                         placeholder="Enter username"
                         className="input
                         input-bordered
                         input-info
                         w-full
                         max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base
                                        label-text
                                        mt-2'>
                                            Password
                                        </span>
                    </label>
                    <input type="password"
                         placeholder="Enter your password"
                         className="input
                         input-bordered
                         input-info
                         w-full
                         max-w-xs" />
                </div>
                <a href='#' className='text-sm
                                       hover:BiUnderline
                                       hover:text-blue-500
                                       mt-3
                                       inline-block'>
                                        {"Don't"} have an account?
                </a>
                <div>
                  <button className= 'btn btn-primary btn-block btn-sm mt-3'>
                    Login
                  </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login



////////////////////////////////////////////////////////////////////////
/* import React from 'react'
import { BiUnderline } from 'react-icons/bi'

const Login = () => {
  return (
    <div className='flex 
                    flex-col
                    items-center
                    justify-center
                    min-w-96
                    mx-auto'>

        <div className='w-full
                        p-6
                        rounded-lg
                        shadow-md
                        bg-gray-600
                        bg-clip-padding
                        backdrop-filter
                        backdrop-blur-lg
                        bg-opacity-15'>
            <h1 className='text-2xl
                            font-semibold
                            text-center
                            text-white'>
                                Login into your Account
            </h1>
            <form className='mt-6'>
                <div>
                    <label className='label'>
                        <span className='text-base
                                        label-text
                                        mt-2'>
                                            Username
                                        </span>
                    </label>
                  <input type="text"
                         placeholder="Enter username"
                         className="input
                         input-bordered
                         input-info
                         w-full
                         max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base
                                        label-text
                                        mt-2'>
                                            Password
                                        </span>
                    </label>
                    <input type="password"
                         placeholder="Enter your password"
                         className="input
                         input-bordered
                         input-info
                         w-full
                         max-w-xs" />
                </div>
                <a href='#' className='text-sm
                                       hover:BiUnderline
                                       hover:text-blue-500
                                       mt-3
                                       inline-block'>
                                        {"Don't"} have an account?
                </a>
                <div>
                  <button className= 'btn btn-primary btn-block btn-sm mt-3'>
                    Login
                  </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login */