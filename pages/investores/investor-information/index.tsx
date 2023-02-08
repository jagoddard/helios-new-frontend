import React from "react";
import Informationpdf from "../../../components/informationpdf";
import InvestorContainer from "../../../components/InvestorContainer";
import InvestorNews from "../../../components/investorNews";
import styles from "../../../styles/investor/investorinformation.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ReactPlayer from "react-player";
import {
  getInvestorFileFromBlob,
  getInvestors,
} from "../../../services/investors";

interface InvestorInfoProps {
  data: any;
}

export const getStaticProps = async () => {
  const investorRes = await getInvestors();
  const investorData = JSON.stringify(investorRes.data);
  return {
    props: {
      data: JSON.parse(investorData),
    },
    revalidate: 10,
  };
};

const InvestorInformation = ({ data }: InvestorInfoProps) => {
  return (
    <InvestorContainer selectedTab="Investor Information">
      <>
        <section className="px-5 py-3 md:px-20 md:py-10 bg-darkTheme">
          <div className="md:flex flex-row gap-4 items-center">
            <p className="text-headerMobile md:text-header font-semibold text-white m-0">
              Stock <span className="text-primaryColor">Information</span>
            </p>
            <p className="text-primaryColor hidden md:inline-block text-[16px] md:text-[22px] font-medium -mb-1">-</p>
            <p className="text-white text-[16px] md:text-[22px] font-medium -mb-1">
              TSX.v: <span className="text-primaryColor">HX </span>| OTCQB: <span className="text-primaryColor">HXLTF </span>| Germany: <span className="text-primaryColor">C2U0</span>
            </p>
          </div>
          <div className="stockInfo overflow-auto mb-10">
            <table className="w-full m-auto mt-10 ">
              <thead className="bg-tableHeadeBg">
                <tr>
                  <th className="py-4">
                    <p className="px-10 md:px-0 md:border-r border-borderright">
                      Trading Symbol
                    </p>
                  </th>
                  <th className="py-4">
                    <p className="px-10 md:px-0 md:border-r border-borderright">
                      Exchange
                    </p>
                  </th>
                  <th className="py-4">
                    <p className="px-10 md:px-0 md:border-r border-borderright">
                      Common Shares Issued
                    </p>
                  </th>
                  <th className="py-4">
                    <p className="px-10 md:px-0 md:border-r border-borderright">
                      Incentive Stock Options
                    </p>
                  </th>
                  <th className="py-4">
                    <p>Warrants</p>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="text-black">HX</td>
                  <td className="bg-[#FFF8F2] text-black">TSX Venture</td>
                  <td></td>
                  <td className="bg-[#FFF8F2] text-black"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>HXLTF</td>
                  <td className="bg-[#FFF8F2] text-black">OTC Markets</td>
                  <td className="text-black">36,231,804</td>
                  <td className="bg-[#FFF8F2] text-black">3,385,000</td>
                  <td className="text-black">
                    10,080,000 at $0.75 expiring <br />
                    August 5, 2023
                  </td>
                </tr>
                <tr>
                  <td className="text-black">C2U0</td>
                  <td className="bg-[#FFF8F2] text-black">Germany</td>
                  <td></td>
                  <td className="bg-[#FFF8F2]"></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.InvestorInformation}>
          <p className="text-headerMobile md:text-header font-semibold text-white">
            Presentations
          </p>
          <div className={styles.InfoPdf}>
            {data.payload.map((investor: any, index: number) => {
              return (
                <Informationpdf
                  key={index}
                  pdfText={investor.heading}
                  pdfLinkText1="PDF"
                  pdflink={investor.file}
                  route={`/pdf-viewer/investor-information/${investor.id}`}
                  openFile={() => {
                    getInvestorFileFromBlob(investor.id);
                  }}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.informationData}>
          <div className={styles.informationDataBackground}>
            <div>
              <p className="text-headerMobile md:text-header font-semibold text-white">
                Lithium <span className="text-primaryColor">News</span>
              </p>
              <p className="text-xl mt-5 mb-4 text-white">
                HeliosX is committed to getting our company message out to the
                investment community. Our goal is to inform shareholders in a
                timely manner of corporate developments, and to inform readers
                about Lithium producer developments around the world. HeliosX
                wants to keep readers up-to-date on events that will materially
                affect the price movement of various forms of lithium.
              </p>
              <p className="text-xl text-white mb-2">
                HeliosX is committed to telling our story and has retained
                various channels of distribution including the service of
                TheNewswire, Benchmark Mineral Intelligence and Lithium
                Investing News to disseminate our company’s news.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-10">
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
  );
};

export default InvestorInformation;
