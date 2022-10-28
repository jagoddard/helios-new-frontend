import React from 'react'
interface Props {
    title: string,
    subTitle: string,
    desc: string
}
const AboutData = ({ title, subTitle, desc }: Props) => {
    return (
        <div className='mt-8'>
            <p className='text-xl md:text-2xl font-medium border-l-4 pl-2 border-primaryColor md:-ml-4 text-white'>{title}</p>
            <p className='text-subtitle text-base font-normal'>{subTitle}</p>
            <p className='text-base font-normal mt-4 text-white'>{desc}</p>
        </div>
    )
}

export default AboutData