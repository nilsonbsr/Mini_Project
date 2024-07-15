const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex mt-2 justify-center'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text'>Male</span>
					<input
						type='radio'
						className='radio radio-sm border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800 '
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input
						type='radio'
						className='radio radio-sm border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>

			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "other" ? "selected" : ""}`}>
					<span className='label-text'>Other</span>
					<input
						type='radio'
						className='radio radio-sm border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800'
						checked={selectedGender === "other"}
						onChange={() => onCheckboxChange("other")}
					/>
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