import React from 'react';
import Informationpdf from '../../../components/informationpdf';
import InvestorContainer from '../../../components/InvestorContainer';
import { getFinancialFileFromBlob, getFinancialMdaFileFromBlob, getFinancials } from '../../../services/financials';
import { FinancialType } from '../../../types/financialTypes';

interface Props {
  data: any
}

export const getStaticProps = async () => {
  const financialResp = await getFinancials();
  const financialData = JSON.stringify(financialResp.data);
  return {
    props: {
      data: JSON.parse(financialData)
    },
    revalidate: 120
  }
}

const Financials = ({ data }: Props) => {
  let years: string[] = data.map((item: any) => {
    return item.year
  })
  years = years.filter((item, index) => years.indexOf(item) === index)

  const finData: any = years.reduce((accumulator, value) => {
    return {...accumulator, [value]: data.filter((item: any)=> item.year === value)};
  }, {});
  
  return (
    <InvestorContainer selectedTab='Financials'>
      <section className='py-10 px-5 md:px-20 border-b-8 border-primaryColor bg-darkTheme'>
        <p className='text-headerMobile md:text-header font-semibold uppercase text-white'>Financial</p>
        {
          Object.keys(finData)
            .sort((a: any, b: any) => b - a)
            .map((financial, index:number) => {
              return (
                <div className='mt-10' key={index}>
                  <p className='aboutTitle text-2xl font-medium my-4 text-white'>{financial}</p>
                  {
                    finData[financial].map((item: any) => {
                      return (
                        <Informationpdf
                          key={item.id}
                          pdfText={item.heading}
                          pdfLinkText1="Financials"
                          pdflink={item.file}
                          route={`/pdf-viewer/financial/${item.id}`}
                          openFile={()=>getFinancialFileFromBlob(item.id)}
                          mdaLink={`/pdf-viewer/financial-mda/${item.id}`}
                          
                        />
                      )
                    })
                  }
                </div>
              )
            })
        }
      </section>
    </InvestorContainer>
  )
}

export default Financials