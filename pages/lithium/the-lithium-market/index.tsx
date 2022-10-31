import React from 'react'
import LithiumContainer from '../../../components/lithiumContainer'

const index = () => {
    return (
        <LithiumContainer selectedTab='The Lithium Market'>
            <div className='border-b-8 border-primaryColor bg-darkTheme'>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>THE LITHIUM MARKET</p>
                    <p className='text-primaryColor mb-6'>What is Lithium?</p>
                    <p className=' text-white'>Lithium (chemical symbol: Li) is the lightest of all metals. It does not occur as a pure element in nature but is contained within mineral deposits or salts, including brine lakes and seawater. The contained concentration of lithium is generally low and there are only a limited number of resources where lithium can be economically extracted.</p>
                    <div className='flex flex-col items-center justify-center my-6'>
                        <img src="/lithium1.svg" />
                    </div>
                    <p className='mb-3 text-white'>Lithium and its chemical compounds exhibit a broad range of beneficial properties including:</p>
                    <li className='text-white '>The highest electrochemical potential of all metals.</li>
                    <li className='text-white '>An extremely high co-efficient of thermal expansion.</li>
                    <li className='text-white '>Fluxing and catalytic characteristics.</li>
                    <li className='text-white '>Acts as a viscosity modifier in glass applications.</li>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>CHEMICAL APPLICATIONS:</p>
                    <p className='text-white '>Lithium can be processed to form a variety of chemicals including lithium carbonate, lithium bromide, lithium chloride, butyl lithium and lithium hydroxide. The fastest growing and second largest market for lithium globally is for use in batteries.</p>
                    <div className='flex flex-col md:items-center justify-center my-6'>
                        <img src="/lithium2.svg" />
                        <p className='mt-2 text-white text-center'>Typical non-rechargeable batteries found in items like remote controls and children's toys.</p>
                    </div>
                    <p className='my-3 text-white'>There are two types of lithium batteries,</p>
                    <p className='my-3 text-white'><strong>Primary (non-Rechargeable):</strong> Including coin or cylindrical batteries used in calculators and digital cameras. Lithium batteries have higher energy density compared to alkaline batteries, as well as lower weight and long shelf and operating life.</p>
                    <p className='my-3 text-white'><strong>Secondary (rechargeable):</strong> Key current applications for lithium batteries are in powering cell phones, laptops and other handheld electronic devices, power tools and large format batteries for electricity grid stabilisation. The advantage of the lithium secondary battery are its higher energy density and lighter weight, compared to nickel cadmium and nickel metal hydride batteries.</p>
                    <p className='my-3 text-white'>A growing application for lithium batteries is a power source for a wide range of electric vehicles, including electric bikes, scooters, buses, taxies, and passenger electric vehicles. There are three main categories of electric passenger vehicles: Hybrid Electric Vehicles, Plug-In Hybrid Vehicles and Electric Vehicles. The electrification of vehicles is strongly supported by governments around the world due to increasing political and consumer focus on climate change and energy security. The introduction of mass produced passenger electric vehicles has the potential to significantly increase the future consumption of lithium.</p>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>OTHER CHEMICAL APPLICATIONS:</p>
                    <p className='text-primaryColor mb-6'>Lithium chemicals are also used in a variety of other applications including:</p>
                    <li className=' text-white'>Lubricants: Lithium is used as a thickener in grease, ensuring lubrication properties are maintained over a broad range of temperature.</li>
                    <li className=' text-white'>Aluminum Smelting: the addition of lithium during aluminum smelting reduces power consumption, Source USGS increases both electrical conductivity and reduces fluorine emission. The process increases strength and lightens the end product. These new aluminum/lithium alloys are now being used in the auto and airline industry for fossil fuel savings.</li>
                    <li className=' text-white'>Air Treatment: Lithium may be used as an absorption medium for industrial refrigeration systems and for humidity control and drying systems.</li>
                    <li className=' text-white'>Pharmaceuticals: Lithium is used in the treatment for bi-polar disorder as well as in other pharmaceutical products.</li>
                    <div className='flex flex-col items-center justify-center mt-6'>
                        <p className='mb-4 text-primaryColor'>2025 Lithium demand by applicatons</p>
                        <img src="/lithium4DarkTheme.svg" />
                    </div>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-semibold mb-3 text-white'>GLASS AND CERAMICS:</p>
                    <p className='mb-2 text-white'><strong>Glass:</strong> including container glass, flat glass, pharmaceutical glass, specialty glass and fiberglass. These glass products may be designed for durability or corrosion resistance or for the use at high temperatures where thermal shock resistance is important. The addition of lithium increases the glass melt rate, lowers viscosity and the melt temperature providing higher output energy savings and moulding benefits.</p>
                    <p className='mb-2 text-white'><strong>Ceramics:</strong> including ceramic bodies, frits glazes and heatproof ceramic cookware. Lithium lowers firing temperatures and thermal expansion and increases the strength of ceramic bodies. The addition of lithium to glazes improves viscosity for coating, as well as improving the glazes colour, strength and lustre.</p>
                    <p className=' text-white'><strong>Specialty Applications:</strong> including induction cook tops and cookware. Lithium's extremely high co-efficient of thermal expansion makes these products resistant to thermal shock and imparts mechanical strength.</p>
                </section>
                <section className='px-5 md:px-20 py-10'>
                    <p className='text-headerMobile md:text-header font-senibold mb-3 text-white'>OTHER TECHNICAL APPLICATIONS:</p>
                    <p className='mb-2 text-white'>Lithium is also used in a variety of metallurgical applications, including:</p>
                    <p className='mb-2 text-white'><strong>Steel Castings:</strong> the addition of lithium to continuous castings moulds fluxes assists in producing thermal insulation and lubricates the surface of the steel in the continuous casting process.</p>
                    <p className='mb-2 text-white'><strong>Iron Castings:</strong> in the production of iron castings, such as engine blocks, lithium reduces the effect of veining, thereby reducing the number of defective casts</p>
                </section>
            </div>

        </LithiumContainer >
    )
}

export default index