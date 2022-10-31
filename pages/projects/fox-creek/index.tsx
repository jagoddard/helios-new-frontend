import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectContainer from '../../../components/projectContainer'
import { Navigation } from "swiper";
import "swiper/css/navigation";
import TelsMarshSlide from '../../../components/telsMarshSlide';
const index = () => {
    return (
        <ProjectContainer selectedTab="Fox Creek" >
            <div className='border-b-8 border-primaryColor bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>FOX CREEK, ALBERTA, CANADA</p>
                    <div className='md:w-[60%] m-auto bg-bgColor py-5 px-8 mt-10 rounded-2xl projectBoxShadow'>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>234,269</p>
                                <p className='pt-2 text-white'>Hectares</p>
                            </div>
                            <div className='md:border-l border-t md:border-t-0 border-b md:border-b-0 border-white py-10 md:py-0 w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>578,891</p>
                                <p className='pt-2 text-white'>Acres</p>
                            </div>
                        </div>
                        <p className='text-center mt-6 text-white'><span className='text-primaryColor'>100%</span> owned by HeliosX Lithium & Technologies Corp.</p>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10 bg-bgColor'>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <div className='flex gap-2 items-start md:w-1/2'>
                            <img src="/location.svg" className='w-[20px]' />
                            <div>
                                <p className='font-semibold text-white'>LOCATION</p>
                                <p className='my-3 text-primaryColor'>Alberta, Canada </p>
                                <p className='text-white'>Fox Creek region is located in west central Alberta. The Fox Creek region has been geologically identified as one of the most prospective regions in Alberta for higher concentrations of Lithium brine and large geological complexes. </p>
                            </div>
                        </div>
                        <div className='md:w-1/2 flex justify-end'>
                            <img src="/foxCreek.png" />
                        </div>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-6 text-headerMobile md:text-header'>FORMATIONS OF INTEREST</p>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='text-white'>The Lithium brine bearing formations are hosted in reefal carbonates of the Devonian Beaverhill Lake and Woodbend Groups. The specific carbonate units of interest are the Leduc Formation of the Woodbend Group and the Swan Hills Formation of the Beaverhill Lake Group. To date, initial indications are that the highest concentrations tend to be associated within the Swan Hills carbonate complexes. </p>
                        <img src="/fc1.png" />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>RESERVOIR ATTRIBUTES</p>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='text-white'>The region of investigation covers over 75,000 km2 at prospective depths between 2,220 to 4,000 metres. Average thicknesses could range between 12 to 45 metres with permeability ranges between 35 to 45 mD. The volumetric opportunities in this region are in the billions of barrels of lithium brine resource in place. The focus is on identification of regions which combine the complete “picture” of future commerciality; which includes, but is not limited to: surface access, infrastructure, Indigenous consultation, protected parks, species migration patterns, reservoir depth, and Lithium concentration.</p>
                        <img src="/fc2.png" />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>ONGOING ACTIVITIES</p>
                    <p className='text-white'>Historically, the energy industry has proven the productive capability of the reservoirs, and substantial wellbore penetrations assist with stratigraphic analysis to optimize potential locations. Work is ongoing in the region as HeliosX continues with a detailed Western Canadian Sedimentary Basin study to identify optimal locations for prospective lithium brine reservoirs.</p>
                    <p className='text-white mt-5'>Most of the identified carbonate formations have some Lithium present in the brine, and the variation from lower to higher grade regions is still being analyzed in detail. As not all carbonates have been properly tested specifically for Lithium, there could still be a number of undiscovered opportunities to develop in the Western Canadian Sedimentary Basin.</p>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold text-primaryColor mb-6 text-headerMobile md:text-header'>STEPS TOWARDS COMMERCIALIZATION</p>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='text-white'>Resource identification is the first step in the process towards commercialization. The next step is the design and implementation of an extraction facility. Below is a sample of a lithium extraction process developed by Litus. Instead of using conventional evaporation ponds to extract the Lithium, Litus’s technology employs a proprietary Direct Lithium Extraction (DLE) process to more efficiently extract the lithium without the large environmental footprint.</p>
                        <img src="/fc3.png" />
                    </div>
                </section>
            </div >
        </ProjectContainer >
    )
}

export default index