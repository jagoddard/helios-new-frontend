import React from 'react'
interface Props {
    image:any,
    title:string
}
const TelsMarshSlide = ({image,title}:Props) => {
  return (
    <div>
        <img src={image} className="w-full md:w-[600px] h-96 border-b-4 border-primaryColor" />
        <p className='text-center text-white mt-2'>{title}</p>
    </div>
  )
}

export default TelsMarshSlide