import Link from 'next/link'
import React from 'react'
import { AboutTabs } from '../../data/AboutTabs';
import { routes } from '../../routes/routes';
import Footer from '../footer';
import Header from '../header'
import MobileTabs from '../mobileTabs';

interface AboutProps {
    selectedTab: "management-team" | "coporate-responsability";
    children: JSX.Element;
}

const AboutContainer = ({ selectedTab, children }: AboutProps) => {
    return (
        <div>
            <section className='bg-abouteBanner bg-cover bg-center'>
                <Header tabname='About Us' />
                <section className='h-[400px] md:h-[500px] relative'>
                    <div className='flex justify-center items-center p-4 bg-bgOpacity absolute bottom-20'>
                        <p className='text-primaryColor text-2xl md:text-4xl font-bold'>About Us</p>
                    </div>
                </section>
            </section>
            <section className='hidden md:flex justify-center gap-10 bg-bgColor py-4 px-6'>
                <Link href={routes.managementTeam}><p className={`${selectedTab === "management-team" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Management Team</p></Link>
                <Link href={routes.corporateRespinsibility}><p className={`${selectedTab === "coporate-responsability" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Corporate Responsibility</p></Link>
            </section>
            <section className='bg-bgColor py-4 px-20 w-full md:hidden'>
                <MobileTabs tabData={AboutTabs} />
            </section>
            <section>
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default AboutContainer