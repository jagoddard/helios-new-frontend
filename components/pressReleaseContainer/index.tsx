import { useRouter } from 'next/router';
import React from 'react';
import { routes } from '../../routes/routes';
import InvestorContainer from '../InvestorContainer';

type marketTabType = "LatestNewsReleases" | "LithiumArticles" | "ArchivedNewsReleases";

interface Props {
    marketTabs: marketTabType,
    children: JSX.Element
}

const PressReleaseContainer = ({ marketTabs, children }: Props) => {
    const router = useRouter();
    return (
        <InvestorContainer selectedTab='Press Releases'>
            <section className='flex flex-col md:flex-row'>
                <div className='w-full md:w-[30%] bg-[#353535] py-6 md:pt-20 pl-10 md:pl-20 pr-10 flex md:flex-col flex-row gap-3 overflow-auto'>
                    <div onClick={()=>router.push(routes.latestNewReleases)} className={`${marketTabs === "LatestNewsReleases" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[200px]'>Latest Releases</p></div>
                    <div onClick={()=>router.push(routes.investorLithiumArticles)} className={`${marketTabs === "LithiumArticles" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[200px]'>Lithium Articles</p></div>
                    {/* <div onClick={()=>router.push(routes.archivedNewsReleases)} className={`${marketTabs === "ArchivedNewsReleases" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[240px]'>Archived News Releases</p></div> */}
                </div>
                <div className='md:w-[70%] pb-14 md:px-10 overflow-auto bg-darkTheme'>
                    <div className='rounded-[15px] w-full h-[500px]'>
                        {children}
                    </div>
                </div>
            </section>
        </InvestorContainer>
    )
}

export default PressReleaseContainer