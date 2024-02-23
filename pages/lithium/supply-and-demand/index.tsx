import Link from 'next/link'
import React from 'react'
import LithiumContainer from '../../../components/lithiumContainer'

const index = () => {
    return (
        <LithiumContainer selectedTab='Supply & Demand'>
            <div className='border-b-8 border-primaryColor  bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>LITHIUM SUPPLY AND DEMAND</p>
                    <p className='text-primaryColor mb-6'>The following narrative is drawn from the United States Geological Survey(USGS)</p>
                    <div className='my-3 flex justify-center'>
                        <img src='/lsd1.jpg' />
                    </div>
                    <p className='text-white'>In 2012, lithium consumption in the United States was estimated to be about 2,000 metric tons (t) of contained lithium, the same as that in 2011 and about 80% greater than that in 2010. The increase in U.S. consumption in 2011 and 2012 relative to 2010 was primarily the result of increased demand for lithium- based air treatment, battery, ceramic and glass, grease, metallurgical, pharmaceutical, and polymer products in the United States. Net imports of lithium compounds into the United States in 2012 decreased by about 5% from those in 2011, and were nearly 15% lower than those in 2008. In the United States, one lithium brine operation with associated lithium carbonate and lithium hydroxide plants operated in Silver Peak, NV. Domestic and imported lithium carbonate, lithium chloride, and lithium hydroxide were consumed directly in industrial applications and used as raw materials for downstream lithium compounds. Argentina and Chile were the principal sources of imported lithium carbonate, lithium chloride, and lithium hydroxide. World lithium production in 2012 (excluding U.S. production) was estimated to be 36,600t of lithium contained in minerals and compounds, an increase of 8% from that of 2011.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/lsd2.jpg' />
                    </div>
                    <p className='text-white'>Lithium historically has been mined from two distinct sources: continental brines and hard rock minerals. Chile, the world's leading producer of lithium carbonate, recovered lithium from two brine operations on the Salar de Atacama in the Andes. Concentrated brines were transported to and processed at two lithium carbonate plants, one lithium chloride plant, and one lithium hydroxide plant in Antofagasta, on the Chilean coast. Lithium carbonate and lithium chloride also were produced from brines from the Salar del Hombre Muerto in the Andes Mountains in Argentina. A large percentage of the lithium carbonate produced in South America was exported to the United States. In China, lithium carbonate was produced from brines from the Zabayu Salt Lake in western Tibet and from the Dongtai and Xitai Salt Lakes in Qinghai Province. China was the only country that produced large quantities of lithium carbonate from mineral concentrates, mostly from imported Australian spodumene. Australia was, by far, the leading producer of lithium mineral concentrates, but Brazil, China, Portugal, and Zimbabwe also produced significant quantities, most of which is used directly in the production of ceramics and glass.</p>
                    <p className='text-headerMobile md:text-header font-semibold mt-5 mb-3 text-white'>CONSUMPTION</p>
                    <p className='text-white'>Lithium is sold as brines, compounds, metal, or mineral concentrates depending on the end use. Lithium's electrochemical reactivity and other unique properties have resulted in many commercial lithium products. For many years, most lithium compounds and minerals were used in the production of ceramics, glass, and primary aluminum. As a result of growth in lithium battery use and a reduction in the use of lithium in aluminum production, batteries have gained market share. For 2012, according to one estimate, the main global markets for lithium products were batteries, 35%; ceramics and glass, 26%; lubricating greases, 13%; metallurgy, 8%; air conditioning, 4%; polymers, 3%; medical applications, 3%; and other uses, 8%* (Desormeaux, 2013, p. 13). Other uses may have included alloys, cement and concrete, dyestuffs, industrial bleaching and sanitation, pool chemicals, and specialty inorganics (FMC Corp., 2008).</p>

                    <div className='my-6 flex flex-col items-center'>
                        <p className='text-primaryColor mt-6 mb-2'>* U.S. consumption was not available in this report.</p>
                        <img src='/lsd3.jpg' />
                        <p className='text-white'>Source: signumBOX estimates 2012</p>
                    </div>
                    <p className='text-white'>Lithium's properties make it one of the most attractive battery materials of all the elements. Worldwide, rechargeable lithium batteries powered most cellular telephones and laptop computers, as well as many heavy-duty power tools. Automakers were developing and Aerovironnment Electric Vehicle charging station improving lithium batteries for electric vehicles (EVs), HEVs, and plug-in hybrid electric vehicles (PHEVs).</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd4.jpg' />
                        <p className='text-white text-center'>Aerovironnment Electric Vehicle charging station</p>
                    </div>
                    <p className='mb-3 text-white'>The Portable Rechargeable Battery Association reported that the number of lithium-ion cells produced worldwide increased to 4.4 billion in 2012, a 450% increase from 800 million cells made in 2002 (Seetharaman, 2013). The global lithium-ion battery market had revenues of $11.7 billion in 2012. Consumer applications (cameras, cellular telephones, computer tablets, laptop computers, etc.) accounted for 64% of the revenues; industrial applications (aerospace and defense, energy storage, industrial tools, medical devices, etc.) accounted for 22%; and automotive applications (EVs, HEVs, PHEVs, and electric bicycles) accounted for 14%. Although the consumer segment accounted for the highest revenues in 2012, the industrial and automotive segments increased at a faster pace. The greatest share of consumer and industrial revenues came from North America, and China led in automotive revenues. (Tohani, 2013).</p>
                    <p className='mb-3 text-white'>Increased use of larger lithium-ion batteries can be attributed in part to the rapid replacement of nickel-cadmium batteries with lithium-ion batteries in heavy-duty power tools. According to Robert Bosch GmbH, a leading manufacturer of power tools, 74% of new cordless power tools produced in 2012 were powered by lithium-ion batteries, up from only 26% in 2007 (Müller, 2013).</p>
                    <p className='mb-3 text-white'>In 2012, China, Japan, and the Republic of Korea accounted for 85% to 90% of global lithium-ion battery production. Germany, Switzerland, and the United States were among other countries producing lithium-ion batteries (Tohani, 2013). According to a Japanese market research firm, the Republic of Korea overtook Japan (the leading lithium-ion battery producer since 1991) in 2011 to become the leading manufacturer of lithium-ion batteries (Sung-Mi, 2012).</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/lsd5.jpg' />
                    </div>
                    <p className='mb-3 text-white'>In 2011, Alcoa Inc. developed a third- generation aluminum- lithium alloy that could contribute to lighter, less costly, and more corrosion resistant airplanes compared with those using composite alternatives. The alloy reduced density by up to 7% in critical structural components. In May, as part of a plan to expand its aluminum lithium production capacity and capabilities, Alcoa began construction of a new $90 million facility adjacent to its Lafayette, IN, plant with a capacity to produce more than 20,000 t/yr of aluminum lithium. Alcoa also began expanding aluminum lithium capacity at its Technical Center in Alcoa Center, PA, and Alcoa's Kitts Green plant in the United Kingdom (Chai, 2011; Alcoa Inc., 2013, p. 17).</p>
                    <p className='mb-3 text-white'>Addition of lithium carbonate to aluminum potlines lowers the melting point of the cryolite bath, allows a lower operating temperature for the cells, increases the electrical conductivity, and decreases bath viscosity. U.S. primary aluminum production and U.S. lithium consumption for aluminum production in 2012 remained near the level in 2011.</p>
                    <p className='text-white'>"Must-Know": What makes Alcoa bullish on aluminum demand?
                        <Link href="https://finance.yahoo.com/news/must-know-makes-alcoa-bullish-130043815.html" passHref>
                            <a target="_blank" rel="noopener noreferrer" className='text-readMore'>
                                {" "} Read More
                            </a>
                        </Link>
                    </p>
                    <p className='text-headerMobile md:text-header font-semibold my-3 text-white'>WORLD REVIEW</p>
                    <p className='mb-3 text-white'>Worldwide production and consumption of lithium increased in 2012. Two major lithium producing countries, Chile and Australia, increased lithium production by 9% and 8%, respectively, from that of 2011. World lithium production in 2012 (excluding U.S. production) was estimated to be 36,600t of lithium contained in minerals and compounds, an increase of 8% from that of 2011.</p>
                    <p className='mb-3 text-white'>Lithium end-use markets for batteries, ceramics and glass, grease, and other industrial applications all increased. World lithium consumption was estimated by Roskill Information Services (2013a) to be 28,200t of lithium contained in minerals and compounds in 2012, an increase of approximately 9% from Roskill's consumption estimate of 2011. Capacity utilization among the current lithium producers was estimated to be greater than 80%.</p>
                    <p className='mb-3 text-white'>Total lithium consumption growth averaged 6.4% per year from 2000 through 2012. Based on estimated total lithium consumption and an estimated lithium chemical market share of total consumption of about 75%, an estimated 21,200 t of lithium was consumed in chemicals and the remainder as mineral concentrates used in the ceramics and glass industry in 2012.</p>
                    <div className='my-6 flex justify-center'>
                        <img src='/lsd6.jpg' />
                    </div>
                    <p className='text-headerMobile md:text-header font-semibold mt-5 mb-2 text-white'>LITHIUM OUTLOOK</p>
                    <p className='mb-3 text-white'>World lithium consumption forecasts to 2015 and 2020 were projected by numerous lithium producers and many leading lithium market analysts. On average, their conclusions indicated that world lithium consumption was likely to increase to approximately 190,000 t/yr of LCE by 2015 and to 280,000 t/yr of LCE by 2020 (Clarke, 2012a). From 2012 to 2017, average annual growth in world lithium consumption was expected to be approximately 11% (Baylis, 2013, p. 23). New lithium producers were expected to supply approximately 25% of the lithium required by 2020 (Baylis and Chegwidden, 2012, p. 29).</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd7.jpg' />
                        <p className='text-white'>Tesla Model - X</p>
                    </div>
                    <p className='mb-3 text-white'>Annual growth in lithium consumed globally for batteries averaged 21% per year between 2000 and 2012. Demand for rechargeable lithium-ion batteries continues to have the greatest potential for growth. The lithium-ion battery market was expected to increase by 200% by 2017, the equivalent of an additional 90,000 t of LCE (Baylis, 2013, p. 26). The global market for lithium-ion batteries was forecast to reach $9 billion by 2015, with potential to exceed $50 billion by 2020 (Schrader, 2012). Other lithium end uses were projected to increase also, but at lower rates than batteries.</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd8.jpg' />
                        <p className='text-white'>Electric Harley Davidson</p>
                    </div>
                    <p className='mb-3 text-white'>Most global automobile manufacturers have announced plans to use lithium-ion batteries in current or future generations of EVs, HEVs, and PHEVs. Vehicles with lithium-ion batteries from companies such as Bavarian Motor Works AG (BMW); Ford Motor Co.; General Motors Co.; Honda Motor Co., Ltd.; Hyundai Group; Tesla Motors, Inc. Toyota Motor Corp.; and Volkswagen Group were introduced in 2012. Major automobile manufacturers formed partnerships with established battery manufacturers to build battery plants for hybrid and electric-vehicles and begin mass production of lithium-ion batteries.</p>
                    <p className='mb-3 text-white'>The worldwide market for lithium-ion batteries used in light duty vehicles was forecast to increase to approximately $22 billion by 2020 from $1.6 billion in 2012. As manufacturing efficiencies improve, the cost of lithium- ion batteries was expected to decrease by more than one-third by 2017 (Pike Research, 2012; Navigant Research, 2013).</p>
                    <p className='mb-3 text-white'>The successful use of lithium-ion batteries in EVs, HEVs, and PHEVs could greatly increase consumption of lithium. If the rate of consumption increases faster than supply, prices could increase, and spodumene and other lithium resources that had been considered uneconomic might once again yield economically feasible raw materials for the production of lithium carbonate. New lithium mineral operations under development throughout the world specifically designed to produce battery-grade lithium carbonate demonstrate the potential economic viability of these mineral operations.</p>
                   
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd9.jpg' />
                        <p className='text-white text-center'>Typical US wind farm that can store electric energy using green energy lithium storage solutions.</p>
                    </div>
                    <p className='mb-3 text-white'>Various countries worldwide were establishing national alternative energy policies that have the potential to substantially increase lithium demand. It was anticipated that Asia, North America, and Western Europe would be at the forefront of adopting utility-scale energy storage systems that would become integral components of electricity grids in the future, for long-duration storage as well as short-duration ancillary services. China, in particular, was expected to become the largest utility-scale energy storage market in the world, with $586 billion in Government funds to be invested by 2020.</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd11.jpg' />
                        <p className='text-white'>Tesla Lithium Car Battery</p>
                    </div>
                    <p className='mb-3 text-white'>These energy storage systems could be the beneficiaries of the widespread research and development of lithium-ion batteries for the transportation sector. Of several energy storage technologies competing within the short-duration ancillary services market, advanced lithium-ion batteries were expected to hold the greatest potential, capturing approximately 70% of the ancillary services market worldwide by 2019. Worldwide revenue from sales of lithium-ion batteries for use in utility-scale energy storage systems was expected to increase to nearly $6 billion in 2020, from $72 million in 2012 (Pike Research, 2010; Oyama, 2011).</p>
                    <p className='mb-3 text-white'>In addition to energy storage systems, several other potential growth areas could significantly increase lithium demand by 2020. Lithium used in solar power applications and in nuclear reactor applications offer substantial opportunities for future lithium growth.</p>
                    <div className='my-6 flex flex-col items-center'>
                        <img src='/lsd12.jpg' />
                        <p className='text-white text-center'>Solar panels that use lithium solutions to store the energy they create.</p>
                    </div>
                    <p className='mb-3 text-white'>For further information we recommend reading the entire U.S.G.S Report at:
                        {" "} <span className='text-readMore'>Read More</span>
                    </p>
                    <p className='text-headerMobile md:text-header font-semibold mt-10 mb-3 text-white'>WORDS FROM INDUSTRY LEADERS</p>
                    <p className='text-primaryColor mb-6'>SQM media release April 4th 2014</p>
                    <p className='mb-3 text-white'>We believe the lithium market is positioned to grow in the short and long term, resulting from the development of new technologies as well as due to strong growth in industrial applications. Lithium market demand should grow between 8-10% in 2014</p>
                    <p className='text-xl mb-3 text-white'>Tesla Credit Suisse Equity Research American Region</p>
                    <p className='text-xl mb-3 text-primaryColor'>Specialty Chemicals May 27 2014</p>
                    <p className='mb-3 text-white'>Nevada selected as official site for Tesla battery gigafactory. Tesla is also pushing ahead for a gigafactory with 35gwh of production that would equate to 25K tones of lithium carbonate equated demand</p>
                    <p className='text-xl mb-3 text-primaryColor'>Tesla Motors Inc - Elon Musk</p>
                    <p className='mb-3 text-white'>The need for lower-cost batteries for autos and power storage means there will need to be hundreds of "gigafactories" like the one Tesla is planning to build</p>
                    <p className='text-xl mb-3 text-primaryColor'>Credit Suisse Research May 27th 2014</p>
                    <p className='mb-3 text-white'>Bottom line, demand growth is projected to grow 12% annually compounded, looking out to the end of the decade. While there are a number of capacity projects planned to come up during this time frame, we believe a number of them will be either delayed or potentially even cancelled, suggesting a noticeable spread between theoretical capacity and effective capacity. Should this scenario play out, lithium pricing should see upward pressure looking forward with certain industry checks suggesting 2020 prices could be 40 -60% higher than today.</p>
                    <p className='text-xl mb-3 text-primaryColor'>FMC Minerals - 2013 Annual Report</p>
                    <p className='mb-3 text-white'>The lithium business started the year slowly. But by late third quarter, FMC completed operations improvements at its Argentina Salow facility that increased annualized capacity by over 30% from pre-expansion levels. FMC anticipates a rise in lithium demand of approximately 10% annually throughout 2020, driven mainly by energy storage for batteries used in hybrid and electric vehicles.</p>
                    <p className='text-xl mb-3 text-primaryColor'>Rockwood March 3rd 2014 Conference Call</p>
                    <p className='mb-3 text-white'>I think that, worldwide, the demand for lithium products will probably grow by 15% to 20%. The issue for Rockwood is going to be, can we actually supply it? Because we are getting close to being sold out, and that's why we want to bring the new plant on stream, but that plant is not going to come on-stream until 2015.</p>
                    <p className='text-xl mb-3 text-primaryColor'>FMC Investors - Marketing Dec 2013</p>
                    <p className='mb-3 text-white'>Lithium demand growth of 9% CAGR expected through 2020.</p>
                    <p className='text-xl mb-3 text-primaryColor'>Liz Jarvis-Shean, Tesla Motors</p>
                    <p className='mb-3 text-white'>Tesla Motors Inc. (TSLA), the electric vehicle maker co-founded by Elon Musk, plans to use only raw materials sourced in North America for its proposed $5 billion U.S. battery factory. The Silicon Valley Company won't look overseas for the graphite, cobalt and other materials needed for its so-called Gigafactory. "It will enable us to establish a supply chain that is local and focused on minimizing environmental impact while significantly reducing battery cost."</p>
                </section>
            </div>
        </LithiumContainer>
    )
}

export default index