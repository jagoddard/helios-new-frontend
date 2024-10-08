import Link from 'next/link'
import React from 'react'
interface Props {
  image: any,
  newsText: string,
  lithiumLink: string
}
const InvestorNews = ({ image, newsText, lithiumLink }: Props) => {
  return (
    <div className='pt-4 px-4 pb-8 bg-bgLight mb-6 md:mb-0'>
      <img src={image} className="w-full" />
      <p className='text-newsText mt-4'>{newsText}</p>
      <Link href={lithiumLink} target="_blank" passHref>
          <p className='text-primaryColor mt-4 cursor-pointer hover:text-[#e0b996]'>Read More</p>
      </Link>
    </div>
  )
}

export default InvestorNews