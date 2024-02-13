import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectContainer from '../../../components/projectContainer'
import { Navigation } from "swiper";
import "swiper/css/navigation";
import TelsMarshSlide from '../../../components/telsMarshSlide';
const TeelsMarsh = () => {
  return (
    <ProjectContainer selectedTab="Teels Marsh" >
      <div className='border-b-8 border-primaryColor bg-darkTheme'>
        <section className='px-5 md:px-20 py-10'>
          <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>TEELS MARSH BRINE PROJECT – NEVADA - USA</p>
          <div className='md:w-[60%] m-auto bg-bgColor py-5 px-8 mt-10 rounded-2xl projectBoxShadow'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
              <div className='w-full flex flex-col justify-center items-center'>
                <p className='text-primaryColor font-bold text-xl'>3,202</p>
                <p className='pt-2 text-white'>Hectares</p>
              </div>
              <div className='md:border-r md:border-l border-t md:border-t-0 border-b md:border-b-0 border-white py-10 md:py-0 w-full flex flex-col justify-center items-center'>
                <p className='text-primaryColor font-bold text-xl'>7,914</p>
                <p className='pt-2 text-white'>Acres</p>
              </div>
              <div className='w-full flex flex-col justify-center items-center'>
                <p className='text-primaryColor font-bold text-xl'>403</p>
                <p className='pt-2 text-white'>Placer Claims</p>
              </div>
            </div>
            <p className='text-center mt-6 text-white'><span className='text-primaryColor'>100%</span> owned by Dajin Resources(US) Corp., a wholly owned subsidiary of D2 LITHIUM</p>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10 bg-bgColor'>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='flex gap-2 items-start md:w-1/2'>
              <img src="/location.svg" className='w-[20px]' />
              <div>
                <p className='font-semibold text-white'>LOCATION</p>
                <p className='my-3 text-primaryColor'>Mineral County, Nevada</p>
                <p className='text-white'>West Central Nevada, west of Highway 95 and northwest of Highway 360. Teels Marsh is located approximately 190 kilometres (120 miles) southeast of Reno, and 80 kilometres (50 miles) northwest of the Clayton Valley which hosts Albemarle's Silver Peak Lithium Brine Mine, North America’s only producing Lithium “brine based deposit”.</p>
              </div>
            </div>
            <div className='md:w-1/2'>
              <img src="/teelsLocation.png" />
            </div>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='md:w-1/2'>
              <p className='font-semibold text-primaryColor mb-6 text-headerMobile md:text-header'>INTRODUCTION</p>
              <img src="/introduction.png" />
            </div>
            <div className='md:w-1/2'>
              <p className='text-white'>Teels Marsh is a dry lake very similar to the Clayton Valley property, being that they are both closed desert basins (playas) that were mined for borax starting in the mid 1800’s. The areas covered by pediment include areas where sand and gravel have been periodically flushed into the margins of the playa, originally a much deeper basin, by the larger drainages into the playa. Subsequent flooding by Lithium and Boron rich waters trapped in the basin would form brines by evaporation and the sand and gravel beds would become brine rich aquifers in the package of basin sediments.</p>
            </div>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>CONSTRUCTION PROGRAM</p>
          <p className='text-white'>Dajin has completed the construction of drilling pads and engineered access roads in preparation for its drilling program in the Teels Marsh valley. The drill pads and roads were constructed to ensure that wide diameter, deep drilling can take place under all weather conditions encountered in the valley. During construction, that took place between May and mid August 2018, the integrity of the engineered roads and pads was tested during two flash flood events that washed out local county roads. Dajin’s roads and drill pads were unaffected. These engineered roads and pad are necessary because Dajin’s exploration approach is significantly different than what other companies have undertaken in Nevada. The drill pads are designed to support a four (4) hole wide-diameter drill program to test for the presence of Lithium-bearing aquifers to depth. The sumps are constructed large enough to hold a significant volume of material associated with the drilling and flow testing of the wells. These wells are intended to follow-up on the favorable surface Lithium brine results that Dajin previously announced on June 9, 2016, the details of which are given below.</p>
          <div className='mt-6'>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 0
                }
              }}
              modules={[Navigation]}
            >
              <SwiperSlide className='swiper-slide w-full mx-auto md:ml-4'>
                <TelsMarshSlide
                  image='/construction1.png'
                  title="View of completed Drill Pad #1 and its associated sump"
                />
              </SwiperSlide>
              <SwiperSlide className='swiper-slide w-full mx-auto  md:ml-4'>
                <TelsMarshSlide
                  image='/construction2.png'
                  title="Access road to Drill Pad #1"
                />
              </SwiperSlide>
              <SwiperSlide className='swiper-slide w-full mx-auto  md:ml-4'>
                <TelsMarshSlide
                  image='/construction3.jpg'
                  title="Drill Pad #2"
                />
              </SwiperSlide>
              <SwiperSlide className='swiper-slide w-full mx-auto  md:ml-4'>
                <TelsMarshSlide
                  image='/construction4.jpg'
                  title="Dumping"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>EXPLORATION PROGRAM</p>
          <p className='text-white'>HeliosX has been carrying out exploration at Teels Marsh since late 2014. The initial work in the marsh was auger drilling to sample near-surface brines and confirm the presence of Lithium in sediments reported from surveys in the 1970s. Following auger drilling, a detailed gravity survey was completed and a basin depth model was generated. This model revealed that the sediment basin underneath Teels Marsh was steep-sided and more than 2 km deep. The company then completed a 10-hole Geoprobe survey of the northeastern section of the marsh. In addition, Dajin completed a structural analysis in early 2016 and a 12 mile (19 km) seismic survey was carried out during May-June 2016. In May 2016, Dajin announced the acquisition of water rights for Teels Marsh through the Nevada Division of Water Resources (NDWR). On September 15, 2016, Dajin reported that the processing and interpretation of the high resolution seismic survey carried out in May and June was completed. Dajin Director, Dr. Mark Coolbaugh, in conjunction with the University of Nevada, Reno, completed the analysis of the data and created an updated structural interpretation of the playa. Dajin is planning to drill wide diameter exploration wells at two sites: one site is located in the sub-basin at the west end of Teels Marsh, where Lithium concentrations in shallow brines sampled by augers ranges from 0.2 to 71 ppm. A second site is more centrally located above the deepest part of the basin. Dajin's geophysical and geological analysis has confirmed that the playa is over 6,500 feet (2,000 m) deep; deeper than most playas of its size in Nevada. This great depth has led Dajin to plan for wells deeper than those contemplated at other playas (≥2,000 feet), but consistent with known production depths at Clayton Valley's Albemarle's Silver Peak Lithium Brine Mine. A shallower well will be drilled alongside a deeper well at each site. This will facilitate sampling of potential Lithium-rich aquifers at a variety of depths. The wells are also designed to penetrate a number of strong reflectors seen in the seismic survey. These reflectors likely indicate interstratified accumulations of volcanic ash, sands, gravels, evaporites and other types of sedimentary deposits, and some of these layers could host the sought-after Lithium-enriched brines.</p>
          <p className='text-white mt-3'>In early February 2018, Dajin began to move forward with construction of the engineered roads and drill pads at Teels Marsh valley in preparation for the drilling of four (4) production sized exploration wells. Dajin has executed a Service Agreement with Welsh Hagen Associates, Inc. located in Reno, Nevada. Welsh Hagen (formerly Telesto Nevada, Inc.) has been providing design and construction services to the Nevada exploration and mining community since 2003. Gravel was being processed for road construction and drill pads from a nearby private land parcel. The roads provide all-season access to the drilling pads where Dajin will drill four (4) exploration holes. Dajin’s exploration approach is significantly different than what other companies have undertaken in Nevada. These wells will be drilled at a large diameter using rotary drilling techniques. In addition, because Dajin holds water rights in Teels Marsh valley, has received from the Nevada Division of Water Resources (State Engineer), approval for pump-test volumes up to 20 acre-feet per well. The drilling of deep, large-diameter, cased wells with the ability to discharge, will make it possible to not only measure the concentration of Lithium in the subsurface aquifers but to also carry out the flow testing of any Lithium bearing subsurface aquifers that may be encountered during the drilling.</p>
          <div className='flex flex-col items-center justify-center mt-6'>
            <img src="/explorationProgram.png" className='md:w-1/2' />
            <p className='pt-2 text-white'>Planned Well Locations and Seismic Profile at Dajin's Teels Marsh Lithium Project</p>
            <p className='mt-4 text-white'>The drilling results, in conjunction with the high resolution seismic survey and structural interpretation, will provide data to constrain any resource estimate calculated following drilling. Further details can be accessed through the press releases published on September 22, October 20 and November 3, 2016.</p>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>SURFACE SAMPLING RESULTS</p>
          <p className='my-3 text-white'>In February 2015 Dajin confirmed the Lithium potential of Teels Marsh. Dajin has received the Lithium and Boron assay results from a widely spaced sediment sampling program carried out on Dajin’s 100% owned Teels Marsh claims in Mineral County, Nevada. The results of the initial exploration program confirmed the presence of near surface Lithium in dry and wet sediments within an anomalous zone up to 18,000 feet long in an east-west direction and up to 6,000 feet wide in a north-south direction (5480 m x 1820 m). A total of 74 sample locations were tested, at approximately 1,000 feet (300 m) intervals along east-west lines 1,600 feet (487 m) apart. With most of the analyses completed, the highest Lithium assay value was 460 ppm. There were 28 assays that returned Lithium values greater than 150 ppm, 23 assays were greater than 100 ppm and only 5 assays were lower than 100 ppm.</p>
          <div className='flex justify-between'>
            <p className='text-primaryColor'>460ppm (high sample)</p>
            <p className='text-primaryColor'>150ppm (and higher) – 28 samples</p>
            <p className='text-primaryColor'>100ppm (and higher) – 23 samples</p>
          </div>
          <div className='flex justify-center mt-4'>
            <img src='/surface.jpg' className='md:w-1/2' />
          </div>
        </section>

        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>GRAVITY SURVEY RESULTS</p>
          <p className='my-3 text-white'>Relative gravity measurements were made with LaCoste & Romberg Model-G gravity meters. Topographic surveying was performed with Trimble Real-Time Kinematic (RTK) and Fast-Static GPS. Gravity data were processed to Complete Bouguer Gravity and merged with existing USGS public domain gravity data. The resultant three dimensional interpretation images a deep closed basin up to 8,900 feet (2,700 meter) in depth which indicates the potential to retain a large quantity of fluids. The gravity, magnetic and geological data indicate that the basin is fault bounded with the strongest structural control along the basin’s southern margin. Along this boundary faulting on an east-northeast trending fault has created a basin of significant depth.</p>
          <div className='flex flex-col items-center justify-center my-4'>
            <img src='/gravitySurveyResults.png' className='md:w-1/2' />
            <p className='mt-2 text-white'>Gravity model basin depth showing Teels Marsh basin reaching maximum depth approaching 2,700 m (8860 ft).</p>
          </div>
          <p className='my-4 text-white'>The gravity survey was carried out by Magee Geophysics Services LLC of Reno, Nevada. A total of 415 new gravity stations were attained of which 307 stations were acquired on a 250 meter (820 feet) grid and 108 stations were regional stations collected on roads and tracks. Ninety-five existing US Government Survey public domain sites were also included in the analysis. A 3D gravity interpretation as well as a reanalysis of a 2001 US Government Survey public domain airborne magnetite survey formed part of the project. Both of these elements were completed by Wright Geophysics Inc., Elko, Nevada.</p>
          <div className='flex flex-col md:flex-row gap-10 mt-4'>
            <div className='md:w-1/2 flex flex-col items-center'>
              <img src='/gsr1.png' className='w-full' />
              <p className='mt-2 text-white text-center'>The figure represents the three dimensional shape of the basin if all the sediments were removed. The colour bands characterize depth with the bottom of the basin modeled as deep as 8,900 foot (2,700 meters)</p>
            </div>
            <div className='md:w-1/2 flex flex-col items-center'>
              <img src='/gsr2.png' className='w-full' />
              <p className='mt-2 text-white text-center'>Teels Marsh complete bouguer anomaly.</p>
            </div>
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>GEOPROBE EXPLORATION</p>
          <p className='my-3 text-white'>Dajin retained Pediment Gold LLC, of Sparks, Nevada to carry out the exploration work on Teels Marsh. Pediment Gold LLC has significant experience in geoprobe sampling of Nevada playas to obtain fluid and sediment samples. This exploratory work was designed to help determine if shallow (less than 200 feet (60 meters)) brine deposits exist and to determine the subsurface properties of the marsh in preparation for deep drilling. A recent rain event had left the Marsh surface wet and restricted access to the margins and northern parts of the claim block. The crew was able to complete 9 holes, the deepest of which was 195 feet (59 meters). In addition to the deep probe samples to collect fluid and sediment, 3 25 foot (7.5 meter) were also collected. Sediments will be analyzed for their physical properties, composition and Lithium concentrations. Collected fluids will be analyzed for a suite of chemicals, including Boron and Lithium.</p>
          <div className='flex justify-center'>
            <img src="/geoprobe.png" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Geoprobe surveys are capable of probing to a depth of 200 feet (60 meters) under good conditions. In the program undertaken in September, 2015, access to the marsh was limited by soft and wet ground conditions over most of the marsh. As a result only eight locations, from the north east sector of the marsh, could be accessed by the truck mounted equipment. These locations are shown on the map along with a cross section of the values obtained for Lithium and Boron from the sediments that were analyzed.</p>
          <div className='flex justify-center'>
            <img src="/geo2.png" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>The results were encouraging with values ranging up to 310 ppm Lithium and 8,600 ppm Boron and demonstrate an area in the north east contains sediments high in Lithium. Sediment analysis was carried out by Western Environmental Testing Laboratories (Wetlabs), Sparks, Nevada. These results, combined with earlier auger results show that a large area of the shallow subsurface of the marsh contain high levels of Lithium.</p>
          <div className='flex flex-col items-center gap-6 mt-3'>
            <img src="/geo3.png" className='md:w-1/2' />
            <img src="/geo4.png" className='md:w-1/2' />
            <img src="/geo5.png" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Lithium concentrations are likely in the form of clays including Smectite (possibly with Hectorite, a Lithium bearing clay) and Searlesite (a Sodium Boron Lithium bearing mineral). This investigation was carried out by the Geothermal Research Group, University of Utah in Salt Lake City.</p>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-3 text-headerMobile md:text-header'>STRUCTURAL ANALYSIS OF TEELS MARSH</p>
          <p className='my-3 text-white'>Dajin has retained the services of Reno, Nevada-based geothermal and mineral exploration geologist, Dr. Mark Coolbaugh, to carry out a structural and stratigraphic analysis of Teels Marsh. Using gravity, magnetic and Geoprobe data already collected, a new structural map of the basin is being created. The work is focused on identification of drill targets to test favourable aquifers that might contain Lithium-rich brines. Structural analysis reveals that Teels Marsh is bounded by faults and is tectonically active. Thick accumulations of ash deposits could occur beneath the marsh because the marsh occupies a closed basin and is located east of the nearby Long Valley Caldera (Bishop Tuff) and other ash producing volcanic centres. These ash layers have proven to be the most productive brine sources in Clayton Valley, where the only North American Lithium brine deposit is being mined by Albemarle Corporation. The following map is modified from the report of Zampirro, D., (2004) Hydrogeology of Clayton Valley Brine Deposits, Esmeralda County, Nevada, Nevada Bureau of Mines Special Publication 33, p. 271-280, (his Figure 11).</p>
          <div className='flex justify-center my-4'>
            <img src="/stucture1.png" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>The structural work, combined with the Geoprobe results, suggests that stratigraphy similar to that found at Clayton Valley may be present at Teels Marsh. Published information from Albemarle's operations show relatively low Lithium concentrations close to the playa edges, with higher concentrations deeper in the basin, consistent with Dajin’s findings so far. The model similarity suggests the possibility that higher brine Lithium concentrations could exist in the central, deeper portions of the basin. The figure below shows a cross section of Clayton Valley drawn by Davis, J.R., Freidman, I, and Gleason, J.D. (1986) Origin of Lithium-rich Brine, Clayton Valley, Nevada, USGS Bulletin 1622 (their Figure 4).
          </p>
          <div className='flex justify-center my-4'>
            <img src="/stucture2.png" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Dr. Coolbaugh’s structural model of Teels Marsh basin was constructed with the help of a detailed gravity survey and a basin-depth model derived from that survey. The structural model features a fault-bounded, northeast-trending graben 6.5-km-long and 1 to 2.4-km-wide with an estimated maximum depth (to consolidated bedrock) of greater than 2 km near the center of the basin beneath the playa. This graben is part of a structural pull-apart block in a subsiding extensional basin near the western end of the active Excelsior Mountain sinistral/normal fault zone. The graben occupies a broader, roughly circular-shaped basin 6 km in diameter. A number of secondary faults divide the basin and central graben into a series of structural blocks and sub-basins. Unconsolidated sediments within these blocks and sub-basins could be either open or closed to through-going fluid flow depending on the configuration of faults and favourable stratigraphy. Shallow auger holes and drill-holes (less than 60 m) show that unconsolidated basin fill deposits include clays, clastic rocks (silts and sands), evaporite deposits, and volcanic ash (tuff or tephra). With the exception of clays, these rocks represent potential sources of permeability. Silts, sands, and conglomerates could play a greater role in defining zones of permeability at Teels Marsh than at Clayton Valley (site of active Lithium production 80 km to the SE) because of the closer proximity of Teels Marsh to adjacent mountains with a steeper topographic profile. Volcanic ash beds could also host significant zones of permeability, due to the relative proximity of Teels Marsh to young volcanic centers at Mono Lake volcanic center (near Mono Lake) and Long Valley, California, both located approximately 70 km to the southwest. The Bishop Tuff, which is believed to represent an important zone of permeability at Clayton Valley, is likely present in the subsurface at Teels Marsh, but depths to this ash layer are difficult to predict because depth of burial is a function of basin subsidence rates over time, and these rates are currently poorly constrained. Additional local permeability could be provided by the faults that bound the graben and sub-basins.
          </p>
          <div className='flex justify-center my-4'>
            <img src="/stucture3.jpg" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Regional structural setting: Quaternary faults and geothermal systems in the Mina Deflection, taken from Coolbaugh et al. (2005) and originally adapted from Wesnousky (2005). The physical extent of the Mina Deflection encompasses the geothermal areas: 1 = Sodaville, 2 = Rhodes Marsh, 3 & 4 = North & south Teels Marsh, 5 = Redlich, 6 = SW Columbus Marsh; and thermal wells 7, 8, and 9 at Whiskey Flat, Huntoon Valley, and NE of Queen Valley, respectively. RSM = Rhodes Salt Marsh, TM = Teels Marsh, CSM = Columbus Salt Marsh, GF = Garfield Flat, HV = Huntoon Valley, RF = Rattlesnake Flat, MLB = Mono Lake Basin, LV = Long Valley caldera, AV = Adobe Valley, QV = Queen Valley, GV = Gabbs Valley, EX = Excelsior Mountain fault, GM = Gumdrop Hills fault, CL = Coaldale fault, BS = Benton Springs fault. Blue circles are geothermal systems outside the Mina Deflection with measured or estimated temperatures {'>'}70°C.
          </p>
          <div className='flex justify-center my-4'>
            <img src="/stucture4.jpg" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Structural model Teels Marsh: Model is superimposed on Google Earth with the bottom-of-basin elevation model. Excelsior Mountain fault system of Wesnousky (2005) shown in red (known) and orange (concealed). Faults inferred from the gravity-derived basin depth model of Wright (2015) shown in black (SE-dipping) and blue (NW dipping). Thin black lines are elevation contours on the modeled elevation of the unconsolidated sediment-basement contact (prior to modeling of fault locations). Transparent shading from yellow through green and lavender represents progressively lower elevations of the unconsolidated sediment-basement contact, with lowest elevations (lavender) lying 2 to 2.5 km (1.2 to 1.6 mi) below surface. Colored stars depict temperatures from springs, shallow wells, and direct-push holes drilled in 2010: green less than 20°C, yellow 20-26°C, orange 26-37°C, red {'>'}37°C. Cross-section is shown with white line (profile 1). A 10-km UTM wgs84 grid is shown with thin orange lines. Magenta lines on east and west margins of image mark the 812 km2 Teels Marsh surface catchment basin.
          </p>
          <div className='flex justify-center my-4'>
            <img src="/stucture5.jpg" className='md:w-1/2' />
          </div>
          <p className='my-3 text-white'>Profile 1. Cross-sectional view looking northeast of the modeled graben along profile line 1 (plan-view location shown Structural Model Teels Marsh). The original gravity-derived model of the basin-bottom elevation is shown with the yellow background shading. QTal = basin fill deposits, including muds, clastic rocks including silt, sand, and possible conglomerates; evaporite deposits, and ash beds (tephra layers). Tertiary and older rocks include Paleozoic and Mesozoic sedimentary and volcanic rocks, Mesozoic plutons, Tertiary volcanic rocks including basalt, andesite, probable felsic tuffs, and some Tertiary sedimentary rocks including lacustrine rocks equivalent to the Esmeralda Formation. Higher confidence is placed on faults denoted with the bold blue lines (E, G) that match strong gradients in the gravity model. Smaller faults (A-D, F, H) are known with less certainty, and in some cases, a primary sloping bedrock contact could explain the gravity model without the need for faulting. Horizontal and vertical scales are in metres, 1:1.
          </p>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-1 text-headerMobile md:text-header'>HISTORICAL INFORMATION</p>
          <p className='font-semibold text-primaryColor mb-3 text-xl italic'>According to US Geological Survey (USGS) reports:</p>
          <p className='my-3 text-white'>Teels Marsh was first worked in the late 1860’s as a source of sodium chloride. In 1872 it was the site of the first borax discovery in Nevada and continued to produce, steadily, until 1892 under control of US Borax Inc., which still holds the private ground in the east of the playa. The Albemarle's Silver Peak Lithium Brine Mine, was also mined in the 1800’s for salt and borax. The richest concentrations of Borax can usually be found on the surface of salt incretion that develops as a result of capillary rise of solutions and solar evaporation on the surface of the desert playa. In the mid-1970’s, the USGS performed extensive sampling to evaluate the potential for economically viable Lithium sources in Nevada (Lithium in Sediments and Rocks in Nevada, 1976 USGS OFR: 76-567.) Though 58 basins were sampled, particular attention was given to the Teels Marsh basin, as evidenced by more than 25% of the total number of studies’ samples being collected there. Hydrofluoric acid dissolution of the crushed, dried samples followed by atomic absorption tests yielded the top “high samples” produced in the entire study.
          </p>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-1 text-headerMobile md:text-header'>HISTORICAL LITHIUM RESULTS
          </p>
          <p className='my-1 text-white'>850ppm (high sample) – 47 samples near spring’s margin to playa</p>
          <p className='my-1 text-white'>580ppm (high sample) – 50 samples from backhoe pits near springs</p>
          <p className='my-1 text-white'>560ppm (high sample) – 30 samples from playa surface</p>
          <p className='my-3 text-white'>In 2008, ESO Uranium Corp. conducted a preliminary sampling of surface sediments on the Teels Marsh playa. This sampling playa returned Boron values of 1615, 2165, 2245, 2645ppm Boron, which is equivalent to 5200, 6970, 7230, 8520ppm borate (0.52%, 0.70%, 0.72%, 0.85% respectively). These samples cover an area of approximately 1 square mile (260 hectares), at the west end of Teels Marsh playa.
          </p>
          <div className='flex justify-center my-4'>
            <img src="/historical.jpg" className='md:w-1/2' />
          </div>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-1 text-headerMobile md:text-header'>POTENTIAL
          </p>
          <p className='my-3 text-white'>In addition to the historical borax production and the potential for a commercial grade discovery of a brine based Lithium deposit, Teels Marsh has also been identified as a potential geothermal target. Researchers with the University Great Basin Center for Geothermal Energy and the Desert Research Institute (DRI) reported in early 2008, that they had discovered the existence of an active geothermal system in the Teels Marsh area of Mineral County, Nevada. According to Dr. Lisa Shevenell, director of the Great Basin Center, no thermal springs or wells are known to exist in Teels Marsh basin, the shallow temperature anomalies are believed to be caused by geothermal groundwater upwelling along a fault on the western margin of the basin. Shallow temperatures reached 35°C in contrast to background temperatures of 16-18°C. A shallow temperature survey (2m) uncovered 0-3 thermal anomalies along an active range-front fault west side of the playa that had a combined strike length of 4 km. In May of 2008, the Teels Marsh was revisited to verify if the anomaly is produced by geothermal groundwaters. A probe was inserted to 9.5m (31 ft) into the playa. The temperatures increased rapidly with depth; a bottom-hole temperature of 65°C (149°F) was measured.
          </p>
          <p className='my-3 text-white'>In 2010, Caldera Geothermal performed a hydroprobe survey that found 97°C (172°F) and 78°C (206°F) water at a 30 m (98 ft) depth under northern and southern anomalies, respectively.
          </p>
        </section>
        <section className='px-5 md:px-20 py-10'>
          <p className='font-semibold text-primaryColor mb-1 text-headerMobile md:text-header'>CLAIM BLOCK OUTLINE
          </p>
          <div className='flex justify-center my-4'>
            <img src="/claim.jpg" className='md:w-1/2' />
          </div>
        </section>
      </div>
    </ProjectContainer>

  )
}

export default TeelsMarsh