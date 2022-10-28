import React from 'react'
interface Props {
    address:string
}
const Address = ({address}:Props) => {
  return (
    <p className='text-xl md:text-2xl font-semibold border-l-4 pl-2 border-primaryColor md:-ml-4 uppercase text-white'>{address}</p>
  )
}

export default Address