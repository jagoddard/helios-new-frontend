import Link from 'next/link'
import React from 'react'
import LithiumContainer from '../../../components/lithiumContainer'

const index = () => {
    return (
        <LithiumContainer selectedTab='Lithium Revolution'>
            <section className='px-5 md:px-20 py-10 border-b-8 border-primaryColor bg-darkTheme'>
                <p className='text-headerMobile md:text-header font-semibold mb-6 text-white'>THE LITHIUM REVOLUTION</p>
                <p className='mb-10 text-white'>The shift to clean energy has opened a window of opportunity for energy metals, such as Lithium. For clean energy to be useful to society, the efficient storage of energy is paramount. Advanced batteries allow our cars to run without using gasoline and batteries allow renewable energy to be stored when the sun isn't shining and the wind isn't blowing.</p>
                <p className='mb-10 text-white mt-3'>In recent years, lithium-ion batteries have emerged as the most widely used choice for energy storage. Simply put, energy metals, such as lithium, graphite, cobalt, uranium and copper, are metals used in the creation or storage of energy. Find out more by checking out this infographic on why Lithium is the key ingredient in today's technology.</p>
                <div className='flex flex-col items-center justify-center'>
                    <img src='/lithiumRevo.png' className='headerMd:w-1/2' />
                    <Link href="https://www.visualcapitalist.com/the-lithium-revolution/" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <button className='mt-12 rounded-[10px] bg-[#25272A] text-[#F78222] px-10 py-3'>Click To View More</button>
                        </a>
                    </Link>
                </div>
            </section>
        </LithiumContainer>
    )
}

export default index