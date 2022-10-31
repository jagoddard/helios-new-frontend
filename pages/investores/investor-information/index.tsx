import React from 'react'
import Informationpdf from '../../../components/informationpdf';
import InvestorContainer from '../../../components/InvestorContainer';
import InvestorNews from '../../../components/investorNews';
import styles from '../../../styles/investor/investorinformation.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ReactPlayer from 'react-player';
import { getInvestorFileFromBlob, getInvestors } from '../../../services/investors';

interface InvestorInfoProps {
  data: any;
}

export const getStaticProps = async () => {
  const investorRes = await getInvestors();
  const investorData = JSON.stringify(investorRes.data);
  return {
    props: {
      data: JSON.parse(investorData)
    },
    revalidate: 10,
  }
}

const InvestorInformation = ({ data }: InvestorInfoProps) => {
  return (
    <InvestorContainer selectedTab='Investor Information'>
      <>
        <section className={styles.InvestorInformation}>
          <p className={styles.pageTitle}>Information</p>
          <div className={`${styles.infoMedia} flex md:hidden`}>
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
              <SwiperSlide className='swiper-slide'>
                <div className={styles.youtubeInner}>
                  <div className={styles.youtube}>
                    <ReactPlayer
                      url={"https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmvest-prod.s3.amazonaws.com%2Fconference%2Fvideos%2FMining_Panel_2_102022.mp4&data=05%7C01%7Candrew%40heliosx.ca%7C3d6f1225f2bb4fbbd6b508dab1fbd451%7C70420506c4654571985f9adbc81e73ad%7C0%7C0%7C638017992406381866%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000%7C%7C%7C&sdata=qrjJS4dC8P2ire8ypzanxVJOcugyWrcMoET%2BNMpXaic%3D&reserved=0"}
                      controls={true}
                      height="100%"
                      width="100%"
                      light={"/Maxim-group-panel-thumbnail.jpg"}
                    />
                  </div>
                  <p className={styles.youtubeDesc}>Maxim Group panel:  Mining and its role in EV Supply</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className={styles.youtubeInner}>
                  <div className={styles.youtube}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/S18CpSz9K7I"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <p className={styles.youtubeDesc}>Red Cloud Webinar:  Commercializing Lithium Brine with Tailored DLE Technologies.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className={styles.youtubeInner}>
                  <div className={styles.youtube}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/S18CpSz9K7I"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <p className={styles.youtubeDesc}>Christopher Brown, CEO: Presentation to Pre-PEDAC, March 4, 2022.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className={styles.youtubeInner}>
                  <div className={styles.youtube}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/S18CpSz9K7I"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <p className={styles.youtubeDesc}>Q&A with Christopher Brown of HeliosX</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`${styles.infoMedia} hidden md:flex flex-wrap lg:grid lg:grid-cols-2 `}>
            <div className={styles.youtubeInner}>
              <div className={styles.youtube}>
                <ReactPlayer
                  url={"https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmvest-prod.s3.amazonaws.com%2Fconference%2Fvideos%2FMining_Panel_2_102022.mp4&data=05%7C01%7Candrew%40heliosx.ca%7C3d6f1225f2bb4fbbd6b508dab1fbd451%7C70420506c4654571985f9adbc81e73ad%7C0%7C0%7C638017992406381866%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000%7C%7C%7C&sdata=qrjJS4dC8P2ire8ypzanxVJOcugyWrcMoET%2BNMpXaic%3D&reserved=0"}
                  controls={true}
                  height="100%"
                  width="100%"
                  light={"/Maxim-group-panel-thumbnail.jpg"}
                />
              </div>
              <p className={styles.youtubeDesc}>Maxim Group panel:  Mining and its role in EV Supply</p>
            </div>
            <div className={styles.youtubeInner}>
              <div className={styles.youtube}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/S18CpSz9K7I"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <p className={styles.youtubeDesc}>Red Cloud Webinar:  Commercializing Lithium Brine with Tailored DLE Technologies.</p>
            </div>
            <div className={styles.youtubeInner}>
              <div className={styles.youtube}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/S18CpSz9K7I"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <p className={styles.youtubeDesc}>Christopher Brown, CEO: Presentation to Pre-PEDAC, March 4, 2022.</p>
            </div>
            <div className={styles.youtubeInner}>
              <div className={styles.youtube}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/S18CpSz9K7I"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <p className={styles.youtubeDesc}>Q&A with Christopher Brown of HeliosX</p>
            </div>
          </div>
          <div className={styles.InfoPdf}>
            {
              data.payload.map((investor: any, index: number) => {
                return <Informationpdf 
                  key={index} 
                  pdfText={investor.heading} 
                  pdfLinkText1="PDF" 
                  pdflink={investor.file} 
                  openFile={()=>getInvestorFileFromBlob(investor.id)}
                />
              })
            }
          </div>
        </section>
        <section className={styles.informationData}>
          <div className={styles.informationDataBackground}>
            <p className='text-headerMobile md:text-header font-semibold text-white'>Stock <span className='text-primaryColor'>Information</span></p>
            <div className='stockInfo overflow-auto mb-10'>
              <table className='w-full m-auto mt-10 '>
                <thead className='bg-tableHeadeBg'>
                  <tr>
                    <th className='py-4'><p className='px-10 md:px-0 md:border-r border-borderright'>Trading Symbol</p></th>
                    <th className='py-4'><p className='px-10 md:px-0 md:border-r border-borderright'>Exchange</p></th>
                    <th className='py-4'><p className='px-10 md:px-0 md:border-r border-borderright'>Common Shares Issued</p></th>
                    <th className='py-4'><p className='px-10 md:px-0 md:border-r border-borderright'>Incentive Stock Options</p></th>
                    <th className='py-4'><p>Warrants</p></th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr>
                    <td className='text-black'>HX</td>
                    <td className='bg-[#FFF8F2] text-black'>TSX Venture</td>
                    <td></td>
                    <td className='bg-[#FFF8F2] text-black'></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>HXLTF</td>
                    <td className='bg-[#FFF8F2] text-black'>OTC Markets</td>
                    <td className='text-black'>36,231,804</td>
                    <td className='bg-[#FFF8F2] text-black'>3,425,000</td>
                    <td className='text-black'>10,080,000 at $0.75 expiring <br />August 5, 2023</td>
                  </tr>
                  <tr>
                    <td className='text-black'>C2U0</td>
                    <td className='bg-[#FFF8F2] text-black'>Germany</td>
                    <td></td>
                    <td className='bg-[#FFF8F2]'></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className='text-headerMobile md:text-header font-semibold text-white'>Lithium <span className='text-primaryColor'>News</span></p>
              <p className='text-xl mt-5 mb-4 text-white'>HeliosX is committed to getting our company message out to the investment community. Our goal is to inform shareholders in a timely manner of corporate developments, and to inform readers about Lithium producer developments around the world. HeliosX wants to keep readers up-to-date on events that will materially affect the price movement of various forms of lithium.</p>
              <p className='text-xl text-white mb-2'>HeliosX is committed to telling our story and has retained various channels of distribution including the service of TheNewswire, Benchmark Mineral Intelligence and Lithium Investing News to disseminate our company’s news.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-10'>
              <InvestorNews
                image="/news1.png"
                newsText="We are part of the Investing News Network. We bring unbiased, independent news and information, specifically for investors, miners and end users interested in Lithium. Our mission is to become the number one source of independent, unbiased news and education helping investors realize their financial goals. To be internationally respected for our integrity, our people and our commitment to excellence. And to create an environment where sophisticated investors can understand and connect directly with trusted organizations and businesses."
                lithiumLink="https://investingnews.com/company-pro/files/lithium-exploration-argentina-nevada-dajin-resources/"
              />
              <InvestorNews
                image="/news2.png"
                newsText="TheNewswire is a timely disclosure press release disseminator for TSX Venture, CNSX and OTC:BB- listed public companies, providing real time distribution to all investment dealer / broker terminals, including Thomson Reuters , Dow Jones, Morningstar and Quotemedia Newswire. Additionally, TNW provides direct, simultaneous dissemination to Globeinvestor, Market News Publishing, Accesswire, StockHouse, Stockwatch, the entire Comtex and Newstex.com news networks, Acquiremedia, plus an array of ancillary recipient financial news portals."
                lithiumLink="https://www.thenewswire.ca/"
              />
              <InvestorNews
                image="/news3.png"
                newsText="Specially engineered raw materials such as graphite, lithium, cobalt and vanadium are irreplaceable components in some of the world’s most important technologies. And in an increasingly connected world where information is readily available, misinformation and bad data are prevalent. Benchmark’s goal is to become the world’s most trusted source of information in this space by offering Accurate market prices collected and set by us for the industry, original, accurate supply and demand data, impartial, independent, expert analysis, and forecasting of supply, demand and prices."
                lithiumLink="https://www.benchmarkminerals.com/"
              />
            </div>
          </div>
        </section>

      </>
    </InvestorContainer>
  )
}

export default InvestorInformation