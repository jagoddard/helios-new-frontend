import React from 'react'
interface Props {
    Label:string,
    value: string | number,
    disabled: boolean,
    type: React.HTMLInputTypeAttribute,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
const CommonInput = ({Label, value, disabled, onChange, type}:Props) => {
  return (
    <div className='mb-6'>
        <p className='font-medium mb-2 text-xl'>{Label}</p>
        <input 
          type={type}
          className='w-full rounded-[3px] focus:outline-none py-2 px-3 border-2 border-[#00000066] disabled:opacity-80'
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default CommonInput