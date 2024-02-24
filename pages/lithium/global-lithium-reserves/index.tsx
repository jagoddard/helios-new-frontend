import Link from 'next/link'
import React from 'react'
import LithiumContainer from '../../../components/lithiumContainer'

const index = () => {
    return (
        <LithiumContainer selectedTab='Global Lithium Reserves'>
            <div className='border-b-8 border-primaryColor bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold my-3 text-white'>GLOBAL LITHIUM RESERVES</p>
                    <p className='mb-3 text-white'>Global estimates suggest there are more than 30 million lithium resources, however, it is important to know that most deposits are not economically viable. For instance, some of the deposits, both brines and hard rock, may have high levels of impurities that make processing very costly, while others are in isolated parts of the world and would require high infrastructure expenditures, deeming them uneconomical. In the case of brines, the weather in some regions is not appropriate for the solar evaporation process. There are also many other factors, thus it is necessary to spend a significant amount of time and resources to determine the feasibility of these projects before considering them as viable resources (Euro Pacific- Canada, August 2013)</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd15.jpg' />
                        <p className='text-white'>Source USGS</p>
                    </div>
                    <p className='mb-3 text-white'>According to the United States Geological Survey (USGS) it is estimated that the global lithium reserves are in the 13 million tons. These estimates exclude lithium occurrences and resources that have not proven economic.</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd16.jpg' />
                        <p className='text-white text-center'>*Global Lithium Reserves from USGS (2011)</p>
                    </div>
                    <p className='text-headerMobile md:text-header font-semibold my-3 text-white'>BRINE DEPOSITS ARE NOT ALL THE SAME</p>
                    <p className='mb-3 text-white'>Brine based deposits are located all over the world but only a small number of them are considered to be economical for the recovery of lithium, potash, boron and potassium. We hear the term "playa" and "salar" which primarily means the same thing, a salt encrusted depression that may or may not be the basin of an evaporated lake.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/lsd17.jpg' />
                    </div>
                    <p className='mb-1 text-white'>The best explanation of lithium brine based deposit can be found the USGS (United Stated Geological Survey):
                    <Link href="https://pubs.usgs.gov/of/2013/1006/OF13-1006.pdf" passHref>
                        <a target="_blank" rel="noopener noreferrer" className='text-readMore mb-3'>
                            {" "} Read More
                        </a>
                    </Link>
                    </p>
                    <p className='mb-3 mt-3 text-white'>Some of the more relevant determining factors for an economical brine based Lithium deposit are as follows:</p>
                    <div>
                        <li className='mb-2 text-white'>Lithium Grate: Solar evaporation of brine can yield a final brine with 0.50% to 6% lithium, depending on the initial concentration.</li>
                        <li className='mb-2 text-white'>Evaporation Rate: This rate depends on the geographical location of the deposit. Traditional evaporation cycles can take up to several years deeming some locations to be un-economical. Several companies are experimenting with various methods of screening systems that could process the brine in several days as opposed to periods of 24 months. These new processing methods are sure to be implemented in future mines and we may see conversions to this system in order to meet increased demands.</li>
                        <li className='mb-2 text-white'>By-products to Lithium Brines: Potassium and boron concentrates can also be recovered from the brines and processed. The sale of these products can make brine operations even more economical.</li>
                        <li className='mb-2 text-white'>Concentrated Sulphate and Magnesium: The magnesium to lithium ratio and lithium to sulphate ration are an important parameter in the economic assessment of a brine project. High magnesium levels in the brine means that a large amount of lithium may be trapped in the magnesium salts during the initial stages of the evaporation process reducing recovery rates. Also, a high magnesium to lithium ratio means that more soda ash reagent would be required during the chemical processing of the brine adding to raw material costs. The lower the sulphate to lithium ration in the final lithium brine point, the better.</li>
                        <li className='mb-2 text-white'>Localised Infrastructure: Brine deposits located in remote areas away from electricity, water and transportation routes require larger initial investment. Another consideration for the operation of brine based deposits is the quality of the ponds themselves. They must be free of leeks and the location should be able to support multiple ponds to allow for each of the salts in the brine to crystalize in separate ponds, improving the ultimate recovery of lithium.</li>
                    </div>
                    <p className='text-white'>For the sake of this narrative we are excluding the evaporation and development of hard rock lithium mining, as it is a historical fact that hard rock lithium mining is at least double the cost of brine based operations.</p>
                    
                </section>
            </div>
        </LithiumContainer>
    )
}

export default index