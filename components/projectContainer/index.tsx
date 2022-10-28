import Link from 'next/link'
import React, { useState } from 'react'
import { ProjectTabs } from '../../data/ProjectsTabs';
import { routes } from '../../routes/routes';
import Footer from '../footer';
import Header from '../header'
import MobileTabs from '../mobileTabs';

interface ProjectProps {
    selectedTab?: string;
    children: JSX.Element;
}

const ProjectContainer = ({ selectedTab, children }: ProjectProps) => {
    return (
        <div>
            <section className='bg-projectBanner bg-cover'>
                <Header tabname='Projects' />
                <section className='h-[400px] md:h-[500px] relative'>
                    <div className='flex justify-center items-center p-4 bg-bgOpacity absolute bottom-20'>
                        <p className='text-primaryColor text-2xl md:text-4xl font-bold'>Projects</p>
                    </div>
                </section>
            </section>
            <section className='hidden md:flex justify-center gap-10 bg-bgColor py-4 px-6'>
                <Link href={routes.teelsMarsh}><p className={`${selectedTab === "Teels Marsh" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Teels Marsh</p></Link>
                <Link href={routes.alkaliLake}><p className={`${selectedTab === "Alkali Lake" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Alkali Lake</p></Link>
                <Link href={routes.guayatoyoc}><p className={`${selectedTab === "Guayatoyoc" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Guayatoyoc</p></Link>
                <Link href={routes.foxCreek}><p className={`${selectedTab === "Fox Creek" ? "text-primaryColor" : "text-white"} cursor-pointer text-xl`}>Fox Creek</p></Link>
            </section>
            <section className='bg-bgColor py-4 px-20 w-full md:hidden'>
                <MobileTabs tabData={ProjectTabs} />
            </section>
            <section>
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default ProjectContainer