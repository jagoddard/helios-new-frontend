import React from 'react'
import ProjectContainer from '../../../components/projectContainer'

const index = () => {
    return (
        <ProjectContainer selectedTab="Alkali Lake" >
            <div className='border-b-8 border-primaryColor bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>ALKALI SPRING LITHIUM PROJECT – NEVADA</p>
                   
                    <p className='text-white'>Dajin Resources (US) Corp. holds a 100% interest in 139 placer mineral claims covering 8,825 acres in the Alkali Lake, in Esmeralda County, Nevada.</p>
                    <div className='md:w-[60%] m-auto bg-bgColor py-5 px-8 mt-10 rounded-2xl projectBoxShadow'>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>3,571</p>
                                <p className='pt-2 text-white'>Hectares</p>
                            </div>
                            <div className='md:border-l border-t md:border-t-0 border-b md:border-b-0 border-white py-10 md:py-0 w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>8,825</p>
                                <p className='pt-2 text-white'>Acres</p>
                            </div>
                        </div>
                        <p className='text-center mt-6 text-white'><span className='text-primaryColor'>100%</span> holds by Dajin Resources (US) Corp.</p>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10 bg-bgColor'>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <div className='flex gap-2 items-start md:w-1/2'>
                            <img src="/location.svg" className='w-[20px]' />
                            <div>
                                <p className='font-semibold text-white'>LOCATION</p>
                                <p className='my-3 text-primaryColor'>Esmeralda County, Nevada.</p>
                                <p className='text-white'>The Alkali Spring Valley (also known as Alkali Lake) Lithium project is located approximately 12 km (7.5 mi) northeast of Albemarle Corporation’s Silver Peak Lithium Brine operation in the Clayton Valley, near Silver Peak, Nevada.</p>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <img src="/teelsLocation.png" />
                        </div>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-3 text-xl md:text-4xl'>DESCRIPTION</p>
                    <p className='my-3 text-white'>The Alkali Spring Valley (also known as Alkali Lake) Lithium project is similar to the Clayton Valley geology with a classic fault bound closed basin. There is an active geothermal system, Alkali Hot Springs, along the southern margin of the basin. Just as with circulating basin waster, deep fluids, particularly hot ones associated with the geothermal resource, dissolved rocks, liberate Boron, Lithium and other elements such as sodium chloride. These minerals are brought to the surface as springs emanating from the faults bounding the playa (dry lake bed). The association of a closed basin with an arid environment, a geothermal system and plentiful sources of Lithium suggest that Alkali Lake may host significant Lithium rich brine.</p>
                    <div className='flex justify-center'>
                        <img src='/description.png' className='md:w-1/2' />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-3 text-xl md:text-4xl'>EXPLORATION PROGRAM</p>
                    <p className='my-3 text-white'>Dajin Resources (US) Corp. carried out and reviewed a gravity survey at Alkali Spring Valley. The survey was completed by Magee Geophysical Services LLC of Reno, Nevada and the 3D gravity and airborne magnetic basin modeling was prepared by Wright Geophysics Inc. of Elko, Nevada. The gravity model indicates the claim area is underlain by a circular basin estimated at 4,000 feet in depth (1,200 m) and a second basin exists approximately 3 km to the east. The two basins are separated by a northwest southeast trending structure likely related to the Walker Lane Shear Zone. The depth of the eastern basin ranges from 3,000 to 4,000 feet (1,000 – 1,200 meter). Surface sampling in March & April 2015, confirmed the presence of near surface lithium in the western basin.</p>
                    <div className='flex justify-center'>
                        <img src='/expoProgram.png' className='md:w-1/2' />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-3 text-xl md:text-4xl'>BACKGROUND AND SURROUNDING AREA</p>
                    <p className='my-3 text-white'>The Alkali Spring Valley (also known as Alkali Lake) property is a grass roots property that is located within 12km of the only operating brine based Lithium mine in North America. In 2014 Albemarle Corporation paid US$6.2 billion in cash and stock for Rockwood Holdings Inc. which included the Clayton Valley, Rockwood Lithium mine. The Silver Peak area is one of the oldest mining areas in Nevada as this area produced substantial amounts of silver, gold and other minerals. In 1967 the Rockwood Lithium mine began operations to mine Lithium by using the method of low cost evaporation ponds and has produced Lithium since then. This general area is surrounded by Lithium-enriched tertiary rhyolite tuffs and Lithium-bearing sediments, as well as active geothermal systems. Over time, the Lithium has become mobilized from these sources and deposited into the ground water.</p>
                    <p className='my-3 text-white mt-3'>In 2010 the Rockwood Lithium mine received a $28.4 million grant from the U.S. Department of Energy to expand and upgrade the production for battery grade usage. It is estimated that since initial production began the Rockwood Lithium mine produced over 150,000 tons of Lithium and has in ground reserve estimates of 382,000 tons of Lithium.</p>
                </section>
            </div>
        </ProjectContainer>

    )
}

export default index