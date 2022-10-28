import React from 'react'
import LithiumContainer from '../../../components/lithiumContainer'
import Youtube from '../../../components/youtube'

const index = () => {
    return (
        <LithiumContainer selectedTab='Video Gallery'>
            <section className='px-5 md:px-20 py-10 border-b-8 border-primaryColor bg-darkTheme'>
                <p className='text-headerMobile md:text-header font-semibold mb-10 text-white'>VIDEO GALLERY</p>
                <div className='flex flex-col md:flex-row gap-8 mb-8'>
                    <Youtube video="https://www.youtube.com/embed/iEhON2UIxCU" vedioTitle="TESLA BRINGS BATTERY POWER HOME: WHAT YOU NEED TO KNOW" />
                    <Youtube video="https://www.youtube.com/embed/LSITYbxUI-I" vedioTitle="OROCOBRE LIMITED OPENING CEREMONY OF THE OLAROZ LITHIUM PROJECT" />
                </div>
                <div className='flex flex-col md:flex-row gap-10 mb-8'>
                    <Youtube video="https://www.youtube.com/embed/MOZszeZ95tk" vedioTitle="CRASH COURSE: EQUITY FINANCING IN THE MINING SECTOR" />
                    <Youtube video="https://www.youtube.com/embed/41wj31tfkkk" vedioTitle="ONE-ON-ONE WITH ELON MUSK: MIT AEROASTRO CENTENNIAL SYMPOSIUM 2014 (GIGAFACTORY)" />
                </div>
                <div className='flex flex-col md:flex-row gap-10 mb-8'>
                    <Youtube video="https://www.youtube.com/embed/Nn__9hLJKAk" vedioTitle="NISSAN LEAF: THANKS A BILLION" />
                    <Youtube video="https://www.youtube.com/embed/B39hDHxwpxM" vedioTitle="THE GROWING DEMAND FOR LITHIUM" />
                </div>
                <div className='flex flex-col md:flex-row gap-10 mb-8'>
                    <Youtube video="https://www.youtube.com/embed/_ayQAf80XpQ" vedioTitle="FORMULA E: THE WORLD’S FIRST ELECTRIC CAR RACE" />
                    <Youtube video="https://www.youtube.com/embed/M69GBL0IDzI" vedioTitle="ENERGY 101: ELECTRIC VEHICLES" />
                </div>
                <div className='flex flex-col md:flex-row gap-10'>
                    <Youtube video="https://www.youtube.com/embed/w7y0xRIuGP0" vedioTitle="ARGENTINA TRAVEL VIDEO GUIDE" />
                    <Youtube video="https://www.youtube.com/embed/p5STy6HRZEQ" vedioTitle="VIA MOTORS VTRUX - JAY LENO'S GARAGE" />
                </div>
            </section>
        </LithiumContainer>
    )
}
export default index