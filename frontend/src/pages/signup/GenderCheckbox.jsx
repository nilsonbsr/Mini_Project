import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-3'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Male</span>
                <input type="radio" name="male" value="male" className='radio radio-accent' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Female</span>
                <input type="radio" name="gender" value="female" className='radio radio-accent' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Other</span>
                <input type="radio" name="gender" value="other" className='radio radio-accent' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox



////////////////////////////////
/* 
import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-3'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Male</span>
                <input type="radio" name="male" value="male" className='radio radio-accent' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Female</span>
                <input type="radio" name="gender" value="female" className='radio radio-accent' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Other</span>
                <input type="radio" name="gender" value="other" className='radio radio-accent' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox */