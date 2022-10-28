import Link from 'next/link'
import React from 'react'
import { LithiumTabs } from '../../data/LithiumTabs';
import Footer from '../footer';
import Header from '../header'
import MobileTabs from '../mobileTabs';

interface ProjectProps {
    selectedTab: string;
    children: JSX.Element;
}

const LithiumContainer = ({ selectedTab, children }: ProjectProps) => {
    return (
        <div>
            <section className='bg-lithiumBanner bg-cover bg-center'>
                <Header tabname='Lithium' />
                <section className='h-[400px] md:h-[500px] relative'>
                    <div className='flex justify-center items-center p-4 bg-bgOpacity absolute bottom-20'>
                        <p className='text-primaryColor text-2xl md:text-4xl font-bold'>Lithium</p>
                    </div>
                </section>
            </section>
            <section className='hidden md:flex justify-center gap-6 bg-bgColor py-4 px-6'>
                <Link href="/lithium/the-lithium-market"><p className={`${selectedTab === "The Lithium Market" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>The Lithium Market</p></Link>
                <Link href="/lithium/supply-and-demand"><p className={`${selectedTab === "Supply & Demand" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Supply & Demand</p></Link>
                <Link href="/lithium/lithium-products"><p className={`${selectedTab === "Lithium Products" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Lithium Products</p></Link>
                <Link href="/lithium/global-lithium-reserves"><p className={`${selectedTab === "Global Lithium Reserves" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Global Lithium Reserves</p></Link>
                <Link href="/lithium/lithium-articles"><p className={`${selectedTab === "Lithium Articles" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Lithium Articles</p></Link>
                <Link href="/lithium/video-gallery"><p className={`${selectedTab === "Video Gallery" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Video Gallery</p></Link>
                <Link href="/lithium/lithium-technology"><p className={`${selectedTab === "Lithium: Technology" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Lithium: Technology</p></Link>
                <Link href="/lithium/lithium-revolution"><p className={`${selectedTab === "Lithium Revolution" ? "text-primaryColor" : "text-white"} cursor-pointer text-base`}>Lithium Revolution</p></Link>
            </section>
            <section className='bg-bgColor py-4 px-20 w-full md:hidden'>
                <MobileTabs tabData={LithiumTabs} />
            </section>
            <section>
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default LithiumContainer