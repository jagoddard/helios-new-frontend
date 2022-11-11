import React from 'react'
interface Props {
    title: string,
    newsDate: string,
    newsDescription: string,
    pdfLink: string,
    openFile: () => void,
    route?:string
}
const NewsItem = ({ title, newsDate, newsDescription, pdfLink, openFile }: Props) => {
    return (
        <div className='p-6 rounded-[10px] newsItem bg-[#25272A]'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-[80%]'>
                    <p className='text-xl md:text-2xl border-l-4 pl-2 border-primaryColor text-white'>{title}</p>
                    <p className='mt-2 text-newsItemDate text-lg'>{newsDate}</p>
                </div>
                <div className='flex md:justify-end gap-5 md:w-[20%] mt-5 md:mt-0'>
                   {pdfLink && <div 
                        className='flex gap-2 items-center cursor-pointer'
                        // onClick={openFile}
                    >
                        <img src="/pdf.png" className='w-4 h-5' />
                        <p className='text-primaryColor text-base'>View</p>
                    </div>}
                </div>
            </div>

            <p className=' mt-4 text-base text-white'>BRIEF: {newsDescription}</p>
        </div>
    )
}

export default NewsItem