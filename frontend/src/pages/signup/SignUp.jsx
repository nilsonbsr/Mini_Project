import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex
                   flex-col
                   items-center
                   justify-center
                   min-w-95
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
                            text-white'>Create an account</h1>

            <form>
                <div>
                <label className='label'>
                        <span className='text-base
                                        label-text
                                        mt-2'>
                                            Full name
                        </span>
                </label>
                <input type="text"
                         placeholder="Enter your name"
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
                                            Username
                        </span>
                </label>
                <input type="text"
                         placeholder="Username"
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
                         placeholder="Enter password"
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
                                            Confirm Password
                        </span>
                </label>
                <input type="password"
                         placeholder="Confirm Password"
                         className="input
                         input-bordered
                         input-info
                         w-full
                         max-w-xs" />
                </div>
               <GenderCheckbox />
                <a href='#' className='text-sm
                                       hover:BiUnderline
                                       hover:text-blue-500
                                       mt-3
                                       inline-block'>
                                        Already have an account?
                </a>
                <div>
                <button className= 'btn btn-primary btn-block btn-sm mt-3'>
                    Sign Up
                  </button>
                </div>
            </form>

        </div>

    </div>
  )
}

export default SignUp