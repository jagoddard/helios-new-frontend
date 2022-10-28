import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { GrDown } from 'react-icons/gr';
import { TabType } from '../../types/tabsTypes';

interface MobileTabProps {
    tabData: TabType[];
}

const MobileTabs = ({ tabData }: MobileTabProps) => {

    const [selectedTab, setSelectedTab] = useState<TabType | undefined>(tabData[0]);
    const [unSelectedTabs, setUnSelectedTabs] = useState<any>();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let pathname = router.pathname;
        setSelectedTab(tabData.find((tab: TabType) => tab.link === pathname))
    }, [])

    useEffect(() => {
        setUnSelectedTabs(tabData.filter((tab: TabType) => tab.name !== selectedTab?.name))
    }, [selectedTab])

    const handleTabChange = (tab: TabType) => {
        setSelectedTab(tab);
        setIsPopoverOpen(false);
        router.push(tab.link);
    }


    return (
        <div className='flex items-center justify-center w-full relative'>
            <div onClick={() => setIsPopoverOpen((prevState) => !prevState)} className='flex justify-center items-center gap-3 w-full'>
                <p className='text-primaryColor font-medium text-xl'>{selectedTab?.name}</p>
                <img src="/downArrow.svg" className='w-5 mt-1' />
            </div>
            {
                isPopoverOpen ? (
                    <div className='absolute min-h-[144px] w-60 bg-mobileDropdownBg top-11 flex flex-col justify-center items-center z-50'>
                        {
                            unSelectedTabs && unSelectedTabs.map((tab: TabType, index: number) => (
                                <div
                                    key={index}
                                    onClick={() => handleTabChange(tab)}
                                    className={`w-4/5 ${index !== unSelectedTabs.length - 1 ? "border-b-2 border-b-primaryLight" : ""} `}
                                >
                                    <p className='text-lg font-medium leading-10'>{tab.name}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>

    )
}

export default MobileTabs