import React from 'react'
import Informationpdf from '../../../components/informationpdf'
import InvestorContainer from '../../../components/InvestorContainer'
import { getTechnicalFileFromBlob, getTechnicalReports } from '../../../services/technicalReports'

interface Props {
  data: any
}

export const getStaticProps = async () => {
  let reportResp = await getTechnicalReports();
  let reportData = JSON.stringify(reportResp.data);
  return {
    props: {
      data: JSON.parse(reportData)
    },
    revalidate: 10,
  }
}

const TechnicalReports = ({ data }: Props) => {
  return (
    <InvestorContainer selectedTab='Technical Reports'>
      <section className='py-10 px-5 md:px-20 border-b-8 border-primaryColor bg-darkTheme'>
        <p className='text-headerMobile md:text-header font-semibold mb-6 text-white'>TECHNICAL REPORTS</p>
        {
          data.payload.map((reports: any, index:number) => {
            return (
              <Informationpdf
                key={index}
                pdfText={reports.heading}
                pdfLinkText1="PDF"
                pdflink={reports.file}
                openFile={()=>getTechnicalFileFromBlob(reports.id)}
              />
            )
          })
        }
      </section>
    </InvestorContainer>
  )
}

export default TechnicalReports