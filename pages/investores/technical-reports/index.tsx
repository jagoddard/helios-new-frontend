import React from 'react'
import Informationpdf from '../../../components/informationpdf'
import InvestorContainer from '../../../components/InvestorContainer'
import { getTechnicalFileFromBlob, getTechnicalReports } from '../../../services/technicalReports'

interface Props {
  data: any
}

export const getServerSideProps = async () => {
  let reportResp = await getTechnicalReports();
  let reportData = JSON.stringify(reportResp.data);
  return {
    props: {
      data: JSON.parse(reportData)
    }
  }
}

const TechnicalReports = ({ data }: Props) => {
  return (
    <InvestorContainer selectedTab='Technical Reports'>
      <section className='py-10 px-5 md:px-20 border-b-8 border-primaryColor bg-darkTheme'>
        <p className='text-headerMobile md:text-header font-semibold mb-6 text-white'>TECHNICAL REPORTS</p>
        <Informationpdf
          pdfText='Fox Creek NI 43-101 Technical Report - March 2022'
          pdfLinkText1='PDF'
          pdflink='./files/technicalReports/NI_43_101_Fox_Creek_Independent_Report_March 2022.pdf'
        />
        <Informationpdf
          pdfText='Teels Marsh NI 43-101 Technical Report - February 2022'
          pdfLinkText1='PDF'
          pdflink='./files/technicalReports/9Teels MarshNI 43-101 2022-02-02_draft.pdf'
        />
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