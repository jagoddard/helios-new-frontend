import React from 'react'
import ProjectContainer from '../../../components/projectContainer'

const index = () => {
    return (
        <ProjectContainer selectedTab="Guayatoyoc" >
            <div className='border-b-8 border-primaryColor bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>GUAYATOYOC SALAR LOCATED IN NORTHWESTERN – ARGENTINA</p>
                    <div className='md:w-[60%] m-auto bg-bgColor py-5 px-8 mt-10 rounded-2xl projectBoxShadow'>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>93,000</p>
                                <p className='pt-2 text-white'>Hectares</p>
                            </div>
                            <div className='md:border-r md:border-l border-t md:border-t-0 border-b md:border-b-0 border-white py-10 md:py-0 w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>230,000</p>
                                <p className='pt-2 text-white'>Acres</p>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <p className='text-primaryColor font-bold text-xl'>25</p>
                                <p className='pt-2 text-white'>Concessions</p>
                            </div>
                        </div>
                        <p className='text-center mt-6 text-white'>The concessions are 49% owned by Dajin Resources Corp. and 51% owned by Pluspetrol Resources Corporation B.V.</p>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold mb-3 text-xl md:text-4xl text-primaryColor'>AGREEMENTS</p>
                    <p className='text-primaryColor my-3'>On November 11, 2017, Dajin Resources S.A. received exploration permits for San Jose/Navidad minas.</p>
                    <p className='my-3 text-white'>On August 8, 2016, Dajin's wholly owned Argentinian subsidiary, Dajin Resources S. A., signed a binding Memorandum of Understanding ("MOU") with LSC Lithium Corporation ("LSC") whereby LSC was granted an option to earn a 51% interest in Dajin's Lithium properties in Argentina. On October 27, 2016, Dajin reported that it has completed the share purchase agreement with LSC. In March 2019, Pluspetrol Resources Corporation B.V. acquired all of the issued and outstanding shares of LSC Lithium Corporation for approximately CDN $111 million. LSC Lithium held an agreement to acquire a 51% interest in Dajin Resources S.A with the exploration expenditure of CDN $2,000,000 on the Guayatoyocsalar. In October 2019, Pluspetrol earned a 51% interest in Dajin Resources S.A. with the expenditure of US$1,250,000 on the Salinas Grandes salar and payment of US$600,000 to Dajin Resources Corp. Currently, HeliosX is a 49% shareholder and Litica (formerly LSC Lithium Corporation) is 51% shareholder of Dajin Resources S.A.</p>
                </section>
                <section className='px-5 md:px-20 py-10 bg-bgColor'>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <div className='flex gap-2 items-start md:w-1/2'>
                            <img src="/location.svg" className='w-[20px]' />
                            <div>
                                <p className='font-semibold text-white'>LOCATION</p>
                                <p className='my-3 text-primaryColor'>Jujuy province, Argentina.</p>
                                <p className='text-white'>Access to the mineral concession is via a paved national highway with several local population centres. A high pressure National Gas pipeline passes through the property and a 345 kV transmission line is approximately 60 kilometres south. A rail line approximately 80 kilometres south provides access to multiple ports.</p>
                            </div>
                        </div>
                        <div className='h-[450px] w-full md:w-1/2'>
                            <iframe style={{height: "100%", width: "100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62624765.42279316!2d-99.57358174718908!3d16.661246347103408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94036271c62c5fd7%3A0xf463ce97be9f0eb7!2sGuayatayoc%2C%20Jujuy%2C%20Argentina!5e0!3m2!1sen!2sin!4v1663761540083!5m2!1sen!2sin" loading="lazy"></iframe>
                        </div>
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold mb-3 text-xl md:text-4xl text-primaryColor'>EXPLORATION POTENTIAL</p>
                    <p className='my-3 text-white'>The Concessions total approximately 93,000 hectares (230,000 acres) in various drainage basins including 51,970 hectares (128,421 acres) of salar (salt lake) in Guayatoyoc and 41,068 hectares (101,481 acres) in Guayatoyoc salt lake basin. Guayatoyoc salt lakes basin was chosen as HeliosX's principal focus for Lithium exploration on the basis of data that are published in various scientific publications, indicating both permissive brine chemistries accompanied by Lithium concentrations in surface and near surface waters that are within the range of Lithium concentrations being produced elsewhere and enabling infrastructure.</p>
                    <p className='my-3 text-white mt-3'>The salt lakes basin is contained in a closed basin that is fault bonded to the west forming a Tertiary age sedimentary basin. HeliosX has completed an interpretation of seismic data covering part of its acquisitions and has identified a series of salt horizons that are very prospective for brines rich in Lithium, Boron and Potassium. Based on seismic interpretations the basin may be as much as 800 metres thick and contain additional salt layers, below and adjacent to the current salt beds, which are believed to have been deposited during earlier climatic maxima. The older salt beds are similar in thickness to the current salt deposits in that seismic profiles indicate the salt beds may be over 200 metres thick. The potential exists for the older brines that flood the sedimentary/structural basins to contain substantially greater concentrations of Lithium and Potassium than the current near surface brines due to the more extreme climatic conditions extant during earlier climatic maxima when these older salt deposits were precipitated.</p>
                    <p className='my-3 text-white mt-3'>Anomalously high Lithium concentrations, up to 1,600 ppm, in near surface brines present in specific regions of Guayatoyoc salt lake are believed to be due to recharge of the salt lake by seepage of paleo brines along faults bounding the sedimentary/structural basins.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/explorationPotential.png' className='md:w-1/2' />
                    </div>
                    <p className='text-white '>Guayatoyoc is approximately 60 km to the limited east of the recently completed Lithium processing plants of Cauchari-Olaroz Lithium Americas Corp. and Orocobre.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/ep2.png' className='md:w-1/2' />
                    </div>
                    <p className=' text-white'>A series of high elevation closed topographic basins that trend generally parallel to the axis of the Andes in Chile, Argentina, Bolivia, Peru and Ecuador are the sites of brine accumulation in salt water lakes. These brines are variably rich in Lithium, Potassium, Boron and other metals. The brines reportedly form mineable resources of Lithium, Potassium and Boron in Chile, Argentina and Bolivia. In South America the cited metals are only produced in Chile, where Lithium, Potassium and Boron are produced at Salar Atacama, and in Argentina where Lithium is produced directly from the brines at Salar Hombre Muerto. In addition to the aforementioned locations, other projects in late stage exploration are the brines in the salars Rincón, Olaroz, Salinas Grandes and Antofalla in Argentina; Uyuni in Bolivia and Coipasa in Chile.</p>
                    <p className=' text-white mt-3'>Lithium is produced as one of several byproducts at most brine operations and the cost of production depends on the chemistries of the brines used as source materials for the solar evaporation ponds. Generally the greater the quantity of Magnesium and Calcium present in the brine relative to the Lithium grade and the more complex the chemistry of the brine the greater the costs of production will be. Today, Direct Lithium Extraction technologies are being commercially tested in Argentina and HeliosX intends to utilize similar technologies for its asset base.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/ep3.png' className='md:w-1/2' />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold mb-3 text-xl md:text-4xl text-primaryColor'>EXPLORATION</p>
                    <p className='text-white'>In 2016, Dajin Resources Corp. signed an earn-in agreement with LSC Lithium Corp. As per the agreement LSC was appointed the operator for Dajin Resources S.A.. On November 11, 2017 Dajin Resources S.A. received exploration permits for the San Jose-Navidad minas, part of Dajin S.A.’s Guayatoyoc land package. Exploration was carried out in late December 2017 on a portion of the minas and the results were released February 28, 2018. Twenty-five (25) shallow brine samples were taken from an area of 550 hectares, 1,360 acres (5.5 km2) in the northwestern corner of the 4,400 hectare, 10,625 acres (43 km2) San Jose-Navidad minas. Concentrations range from 281 mg/l to 1,353 mg/l, averaging 591 mg/l Lithium. Of the analysis taken, 60% of assays returned greater than 500 mg/l Lithium and 16% were greater than 800 mg/l Lithium. The highest Lithium brine concentration value was 1,353 mg/l.</p>
                    <p className='text-white mt-3'>In March, 2019 Pluspetrol Resources Corporation B.V. ("Pluspetrol") acquired 100% of the issued and outstanding common shares of LSC Lithium Corporation for a cash consideration of approximately CDN $111million. Dajin is now partnered with Pluspetrol who have earned a 51% interest in Dajin Resources S.A. with the expenditure of US$1,250,000 on the concessions and payment of $600,000 to Dajin Resources Corp. Pluspetrol has created the company Litica Resources S.A. for exploration and development of their concessions. Litica's exploration team is currently reviewing the Guayatoyoc salars exploration and drilling data acquired in the LSC Lithium transaction. Pluspetrol is a private, independent, international energy company with over 40 years experience in the exploration and production of oil and gas. Pluspetrol is the largest hydrocarbon producer in Peru. With operations in Angola, Argentina, Bolivia, Colombia, Peru, and offices in United States, Uruguay and the Netherlands, Pluspetrol promotes energy development and fosters activities at an international level. Pluspetrol has created the company Litica Resources S.A. to enter the "battery metals" business.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/explo.png' className='md:w-1/2' />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='font-semibold mb-3 text-primaryColor text-xl md:text-4xl'>OTHER AGREEMENTS</p>
                    <p className='text-white '>In July, 2015, Dajin signed an agreement with the Cooperativa and Community of Tres Morros for the right to explore the San Jose and Navidad concessions. This agreement gives HeliosX the right to explore the 4,400 hectare (10,625 acres) San Jose- Navidad concessions within the Guayatoyoc salar. The mining leases held by the Cooperative, “Navidad” and “San Jose”, cover a total area of 4,300 hectares (10,625 acres). An initial payment of $US20,000 has been made and the Cooperativa now must acquire the exploration permits to receive a further payment of $US40,000. These permits will be the first to be granted to HeliosX for exploration work in Guayatoyoc, a salar where Dajin has staked ground of 80,248 hectares (198,000 acres).</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/otherAgre.png' className='md:w-1/2' />
                    </div>
                </section>
            </div>
        </ProjectContainer>
    )
}

export default index