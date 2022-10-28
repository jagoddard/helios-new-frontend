import React from 'react'
import Informationpdf from '../../../components/informationpdf'
import InvestorContainer from '../../../components/InvestorContainer';

const AnnualsGeneralMeeting = () => {
  return (
    <InvestorContainer selectedTab='Annual General Meeting - AGM'>
      <section className='py-10 px-5 md:px-20 border-b-8 border-primaryColor bg-darkTheme'>
        <p className='text-headerMobile md:text-header font-semibold mb-6 text-white'>ANNUAL GENERAL MEETING - AGM</p>
        <Informationpdf 
          pdfText="Notice & Access"
          pdfLinkText1="PDF"
          pdfLocalLink={"/Notice-&-Access.pdf"}
        />
        <Informationpdf pdfText="Information Circular"
          pdfLinkText1="PDF"
          pdfLocalLink={"/Info-Circular.pdf"}
        />
        <Informationpdf pdfText="Proxy"
        pdfLinkText1="PDF"
        pdfLocalLink={"/Proxy.pdf"}
        />
      </section>
    </InvestorContainer>
  )
}

export default AnnualsGeneralMeeting