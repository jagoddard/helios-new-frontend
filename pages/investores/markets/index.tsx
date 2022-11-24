import React, { useState } from 'react';
import InvestorContainer from '../../../components/InvestorContainer';
import dynamic from "next/dynamic";

const AdvancedChart = dynamic<any>(() =>
  import('react-tradingview-embed').then(module => module.AdvancedChart), { ssr: false }
);
type marketTab = "TSX" | "OTC" | "GER";

const Markets = () => {
  const [marketTabs, setMarketTabs] = useState<marketTab>("TSX");
  return (
    <InvestorContainer selectedTab='Markets'>
      <section className='flex flex-col md:flex-row border-b-8 border-primaryColor'>
        <div className='w-full md:w-[30%] bg-[#353535] py-6 md:pt-20 px-10 flex flex-row md:flex-col gap-3 overflow-auto'>
          <div onClick={() => setMarketTabs("TSX")} className={`${marketTabs === "TSX" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[240px]'>TSX VENTURE EXCHANGE</p></div>
          <div onClick={() => setMarketTabs("OTC")} className={`${marketTabs === "OTC" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[200px]'>OTC MARKET</p></div>
          <div onClick={() => setMarketTabs("GER")} className={`${marketTabs === "GER" ? `marketTab w-[100%] border-l-4 border-primaryColor` : ``} py-2 px-3 cursor-pointer`}><p className='m-0 text-xl text-white w-[200px]'>GERMAN MARKET</p></div>
        </div>
        <div className='md:w-[70%] py-14 px-5 md:px-10 bg-darkTheme'>
          <p className='text-headerMobile md:text-header text-white'>
            {
              marketTabs === "TSX" ? "TSX VENTURE EXCHANGE" : (
                marketTabs === "OTC" ? "OTC MARKET" : "GERMAN MARKET"
              )
            }
          </p>
          <div className='chart rounded-[15px] mt-6 w-full h-[500px] overflow-auto'>
            {marketTabs === "TSX" ?
              <AdvancedChart widgetProps={{
                "theme": "dark",
                "symbol": "HX",
                "width": "100%",
                "height": "500px",
              }} /> : (
                marketTabs === "OTC" ?
                  <AdvancedChart widgetProps={{
                    "theme": "dark",
                    "symbol": "HXLTF",
                    "width": "100%",
                    "height": "500px",
                  }} /> :
                  <AdvancedChart widgetProps={{
                    "theme": "dark",
                    "symbol": "C2U0",
                    "width": "100%",
                    "height": "500px",
                  }} />
              )

            }
          </div>
        </div>
      </section>
    </InvestorContainer>
  )
}

export default Markets