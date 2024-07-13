//import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };


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

            <form onSubmit={handleSubmit}>
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
                         max-w-xs" 
                         value={inputs.fullName} 
                         onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                         />
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
                         max-w-xs" 
                         value={inputs.username} 
                         onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
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
                         max-w-xs" 
                         value={inputs.password} 
                         onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
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
                         max-w-xs" 
                         value={inputs.confirmPassword} 
                         onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>
               <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
                <Link to={"/login"} className='text-sm
                                       hover:BiUnderline
                                       hover:text-blue-500
                                       mt-3
                                       inline-block'>
                                        Already have an account?
                </Link>
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