import React from 'react'

interface Props {
    img: JSX.Element;
}

const MapHover = ({ img }: Props) => {
    return (
        <div className='hidden md:flex flex-col justify-center items-center gap-3'>
            {img}
        </div>

    )
}

export default MapHover