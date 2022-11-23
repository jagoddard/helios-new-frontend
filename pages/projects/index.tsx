import React from 'react'
import Title from '../../components/title'
import ProjectContainer from '../../components/projectContainer'

const Project = () => {
    return (
        <ProjectContainer >
            <div className='px-5 md:px-20 py-10 border-b-8 border-newsItemDate bg-darkTheme'>
                <section>
                    <p className='font-semibold text-headerMobile md:text-header text-white uppercase'>PROJECTS</p>
                    <p className='text-[#F2F2F2] my-5'>All project entities, reports and intellectual property are wholly owned by HeliosX Lithium & Technologies Corp. as of the Shareholder’s unanimous approval of the Plan of Arrangement between Dajin Lithium Corp. and HeliosX Corp. on November 19, 2021. </p>
                    <Title
                        title='TEELS MARSH VALLEY, MINERAL COUNTY, NEVADA, USA'
                    />
                    <div className='my-5 flex flex-col md:flex-row items-center justify-between gap-10'>
                        <div className='h-auto min-h-[200px] w-full md:w-3/6 max-w-full relative'>
                            <div className='absolute max-w-[150px] md:max-w-[192px] bottom-0'>
                                <p className='text-white font-medium mb-3 text-base md:text-lg'>Our Properties</p>
                                <div>
                                    <p className='text-primaryColor text-xs  md:text-sm'>Helios<span className='text-white'>X controls 100%</span></p>
                                    <p className='text-white text-xs md:text-sm'>interest in mineral claims at <span className='font-semibold'>Teels Marsh,</span> Mineral</p>
                                    <p className='text-white text-xs md:text-sm'>Country, Nevada, USA</p>
                                    <p className='text-white text-xs md:text-sm'>Teels Marsh – 7,914 acres</p>
                                </div>
                            </div>
                            <img src='/teelMarshMap.svg' className='h-auto w-full' />
                        </div>
                        <p className='text-white md:w-[50%]'>Dajin Resources (US) Corp. holds a 100% interest in 403 placer mineral claims covering 7,914 acres (3,202 hectares) of the Teels Marsh area. This area of the Teels Marsh was extensively prospected by the well-known prospector, “Borax” Smith. In 1867, Smith began processing borax and salt deposits. This property eventually became part of the early history of the giant borax producer, U.S. Borax Inc., a wholly owned subsidiary of one of the world’s largest mining companies, Rio Tinto PLC. With the recognition of Lithium and Boron in the Teels Marsh brines, it was concluded that these brines were formed by the evaporation of water leaching from volcanic ash, originating from the super eruption of nearby Long Valley Caldera, California. This is the same ash fall environment that contributed to the Lithium brines of the nearby Clayton Valley/ Silver Peak operations of Albemarle Corporation, which is the sole Lithium producer in the USA. Historical reporting of the Teels Marsh property, by the US Geological Survey (OFR: 76-567) indicates Lithium concentrations in the Teels Marsh playa brines of up to 850ppm. A report by the Clay Minerals society in 1981 analyzed 17 interstitial brine samples at Teels Marsh, which contained concentrations of Boron ranging from 214 to 893ppm.</p>
                    </div>
                </section>
                <section className='my-20'>
                    <Title
                        title='ALKALI LAKE, ESMERALDA COUNTY, NEVADA, USA'
                    />
                    <div className='mt-5 mb-2 flex flex-col-reverse md:flex-row items-center gap-10'>
                        <p className='text-white md:w-[50%]'>Dajin Resources (US) Corp. holds a 100% interest in 139 placer mineral claims covering 2,780 acres in the Alkali Lake, in Esmeralda County, Nevada. The Alkali Lake Lithium property is located about 7 miles northeast of Albemarle's Silver Peak Lithium mine; which is the only operational, Lithium brine mine in North America. Like Clayton Valley, Alkali Lake Valley is a classic, fault bounded closed basin. There is an active geothermal system, Alkali Hot Spring along the southern margin of the basin. Just as with circulating basin waters, deep fluids, particularly hot ones associated with the geothermal resource, dissolve rocks, liberating Boron, Lithium and other elements such as sodium and chloride. These minerals are brought to the surface as springs emanating from the faults bounding the playa. The association of a closed basin with an arid environment, a geothermal system and plentiful sources of Lithium suggests that Alkali Lake may host significant Lithium rich brines.</p>
                        <div className='h-auto min-h-[200px] w-full md:w-3/6 max-w-full relative'>
                            <div className='absolute max-w-[150px] md:max-w-[192px] bottom-0'>
                                <p className='text-white font-medium mb-3 text-base md:text-lg'>Our Properties</p>
                                <div>
                                    <p className='text-primaryColor text-xs  md:text-sm'>Helios<span className='text-white'>X controls 100%</span></p>
                                    <p className='text-white text-xs md:text-sm'>interest in mineral claims</p>
                                    <p className='text-white text-xs md:text-sm'>at <span className='font-semibold'>Alkali Lake,</span> Esmeralda</p>
                                    <p className='text-white text-xs md:text-sm'>Country, Nevada, USA</p>
                                    <p className='text-white text-xs md:text-sm'>Alkali Lake – 2,780 acres</p>
                                </div>
                            </div>
                            <img src='alkalilake.svg' className='h-auto w-full' />
                        </div>
                    </div>
                </section>
                <section className=''>
                    <Title
                        title='GUAYATOYOC, JUJUY PROVINCE, NORTHWESTERN ARGENTINA'
                    />
                    <div className='flex flex-col md:flex-row items-center gap-10 my-5'>
                        <div className='h-auto min-h-[200px] w-full md:w-3/6 max-w-full relative'>
                            <div className='absolute max-w-[150px] md:max-w-[192px] bottom-0'>
                                <p className='text-white font-medium mb-3 text-base md:text-lg'>Our Properties</p>
                                <div>
                                    <p className='text-primaryColor text-xs  md:text-sm'>Helios<span className='text-white'>X has a 49%</span></p>
                                    <p className='text-white text-xs md:text-sm'>joint venture</p>
                                    <p className='text-white text-xs md:text-sm'>interest in mineral</p>
                                    <p className='text-white text-xs md:text-sm'>concessions in Jujuy</p>
                                    <p className='text-white text-xs md:text-sm'>Province, Argentina</p>
                                    <p className='text-white text-xs md:text-sm'>Guayatoyoc – 230,000 acres</p>
                                </div>
                            </div>
                            <img src='guyayotoc.svg' className='h-auto w-full' />
                        </div>
                        <p className='text-white md:w-[50%]'>Dajin Resources S.A. owns a large land position in northwestern Argentina, part of an area known as the “Lithium Triangle” where it has been reported that 80% of the world’s supply of Lithium is found in flat Salt Lake basins, also known as “salars” or “brines.” On August 8, 2016, Dajin's wholly owned Argentinian subsidiary, Dajin Resources S. A., signed a binding Memorandum of Understanding ("MOU") with LSC Lithium Corporation ("LSC") whereby LSC was granted an option to earn a 51% interest in HeliosX's Lithium properties in Argentina. Lithium brine bodies in salt lakes, or salars, are formed in basins where water has leached the Lithium from the surrounding rock and is trapped and concentrated by evaporation. The process of extracting the Lithium from the brines involves pumping the brine into a series of evaporation ponds to crystallize other salts, leaving a Lithium-rich brine solution. This brine solution is further processed to remove impurities before conversion to either Lithium carbonate or Lithium chloride for further upgrading to Lithium hydroxide. The majority of Dajin’s concessions are in the Salinas Grandes/Guayatoyoc salar.</p>
                    </div>
                    <p className='text-white'>Dajin’s concessions are contiguous with a number of concessions owned by Galaxy Resources (formerly Orocobre Limited) which announced in 2010 that preliminary sampling on the Salinas Grandes indicated highly concentrated deposits of Lithium and potassium over an area of approximately 60 square kilometres. A subsequent 12 hole diamond drill program and 47 holes of shallow auger drilling lead to an estimated inferred resource of 56.5 million cubic metres of brine at 795 milligrams per litre Lithium and 9,550 milligrams per litre potassium, which is equivalent to 239,200 tonnes of Lithium carbonate and 1.03 million tonnes of potash based on 5.32 tonnes of Lithium carbonate being equivalent to one tonne of Lithium and 1.91 tonnes of potash being equivalent to one tonne of potassium. HeliosX believes that a drill program on its concessions could produce similar results as Orocobre and ultimately lead to delineating its own resource. Also active in Jujuy province, and adjacent to the Olaroz Lithium project, is Lithium Americas Corp. (TSX: LAC-T) which has commenced construction of its Cauchari-Olaroz project.</p>
                    <p className='text-white mt-3'> Nearly one-half of the world’s Lithium production comes from the Lithium brines in the Andes mountains region that encompasses parts of Argentina and Chile. This area, commonly referred to as the “Lithium Triangle,” includes the Salinas Grandes salar, which is the site of HeliosX’s extensive land package. In the mid-1990s, the development of these large-scale, low-cost brine resources in Chile and Argentina by Sociedad Quimica y Minera S.A. (NYSE: SQM), Rockwood Lithium Inc. (NYSE: ROC) and FMC Lithium (NYSE: FMC) fundamentally changed global Lithium supply. With its cost advantage of extracting Lithium brines over hard rock, mineral-based production brine producers have lowered prices to gain market share. In March 2019, Pluspetrol Resources Corporation B.V. acquired all of the issued and outstanding shares of LSC Lithium Corporation for approximately CDN $111 million. LSC Lithium held an agreement to acquire a 51% interest in Dajin Resources S.A with the exploration related expenditure of CDN $2,000,000 on the Project. In October 2019, Pluspetrol earned a 51% interest in Dajin Resources S.A.</p>
                </section>
                <section className='my-20'>
                    <Title
                        title='FOX CREEK, ALBERTA, CANADA'
                    />
                    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 my-5'>
                        <div className='md:w-1/2'>
                            <p className='text-white mt-3'>The Fox Creek region has been geologically identified as one of the most prospective regions in Alberta for higher concentration Lithium brines, and larger geological complexes. The Lithium brine bearing formations are hosted in reefal carbonates of the Devonian Beaverhill Lake and Woodbend Groups. The specific carbonate units of interest are the Leduc Formation of the Woodbend Group and the Swan Hills Formation of the Beaverhill Lake Group. To date, initial indications are that the highest concentrations tend to be associated with the Swan Hills carbonate complexes.</p>
                            <p className='text-white mt-3'>The region of investigation covers over 75,000 km2 at prospective depths between 2,220 to 4,000 metres. Average thicknesses could range between 12 to 45 metres with permeability ranges between 35 to 45 mD. The volumetric opportunities in this region are in the billions of barrels of lithium brine resource in place. The focus is on identification of regions which combine the complete “picture” of future commerciality; which includes, but is not limited to: surface access, infrastructure, Indigenous consultation, protected parks, species migration patterns, reservoir depth, and Lithium concentration.</p>
                        </div>
                        <div className='h-full md:w-1/2 relative'>
                            <div className='absolute max-w-[150px] md:max-w-[192px] bottom-0'>
                                <p className='text-white font-medium mb-3 text-base md:text-lg'>Our Properties</p>
                                <div>
                                    <p className='text-primaryColor text-xs  md:text-sm'>Helios<span className='text-white'>X control 100%</span></p>
                                    <p className='text-white text-xs md:text-sm'>interest in mineral claims</p>
                                    <p className='text-white text-xs md:text-sm'>at <span className='font-bold'>Fox Creek,</span> Alberta,</p>
                                    <p className='text-white text-xs md:text-sm'>Canada</p>
                                    <p className='text-white text-xs md:text-sm'>Fox Creek – 583,952 acres</p>
                                </div>
                            </div>
                            <img src='foxCreek.svg' className='h-auto w-full' />
                        </div>
                    </div>
                    <p className='text-white mt-3'>Historically, the energy industry has proven the productive capability of the reservoirs, and substantial wellbore penetrations assist with stratigraphic analysis to optimize potential locations. Work is ongoing in the region as HeliosX continues with a detailed Western Canadian Sedimentary Basin study to identify optimal locations for prospective lithium brine reservoirs.</p>
                </section>
            </div>
        </ProjectContainer>
    )
}

export default Project