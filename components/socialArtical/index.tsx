import React from 'react'
import { reduceString } from '../../utils/reduceString'
interface Props {
    // newsImage: any,
    headline: string;
    description: string;
    date: string;
    fileLink: string;
}
const SocialArtical = ({ headline, description, date, fileLink }: Props) => {
    return (
        <div className='flex justify-between border-b border-bgColor pb-3 mt-6 cursor-pointer'>
            <div className='flex gap-3 items-center'>
                <div className='ml-2 md:mr-0'>
                    {
                        fileLink != '#' ? (
                            <p className='text-white text-base md:text-newsArticalHeader hover:text-primaryColor'>
                                <a href={fileLink} target="_blank" rel="noopener noreferrer">
                                    {reduceString(40, headline)}
                                </a>
                            </p>
                        ) : (
                            <p className='text-white text-base md:text-2xl hover:text-primaryColor'>
                                    {reduceString(40, headline)}
                            </p>
                        )
                    }

                    <p className='text-textGray text-xs md:text-base w-2/3'>{reduceString(100, description)}</p>
                </div>
            </div>
            <p className='text-textGray hidden md:flex'>{date}</p>
        </div>
    )
}

export default SocialArtical