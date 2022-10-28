import React from 'react'
interface Props {
    title: string
    textColor?:string,
}
const Title = ({ title,textColor }: Props) => {
    return (
        <div>
            <p className="text-xl md:text-2xl border-l-4 pl-2 border-primaryColor md:w-[80%] text-white">{title}</p>
        </div>
    )
}

export default Title