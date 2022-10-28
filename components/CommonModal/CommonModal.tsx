import React, { useEffect } from 'react'

interface Props {
    children: JSX.Element;
    isOpen: boolean;
}

const CommonModal = ({ children, isOpen }: Props) => {
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);
    return (
        <>
            {isOpen && <div className='fixed z-50 top-0 left-0 flex justify-center items-center h-screen w-full bg-[#00000073]'>
                <div className='bg-white min-h-[300px] min-w-[500px] max-h-[90vh] rounded overflow-x-auto'>
                    {children}
                </div>
            </div>}
        </>

    )
}

export default CommonModal