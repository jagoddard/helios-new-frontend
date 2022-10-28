import React from 'react'
interface props {
  pdfText: string;
  pdfLinkText1: string;
  pdf2?: boolean;
  pdflink?: string;
  pdfLocalLink?: string;
  mdaLink?: string;
  openFile?: () => void 
  openMda?: () => void
}
const Informationpdf = ({ pdfText, pdf2, pdfLinkText1, pdflink, mdaLink, pdfLocalLink, openFile, openMda }: props) => {
  return (
    <div className='border-b border-[#efefef] pb-2 mb-3 cursor-pointer'>
      <div className='flex gap-4 md:gap-0 justify-between items-center'>
        <p className='text-white w-2/3 md:w-fit md:text-pdfText'>{pdfText}</p>
        <div className='flex flex-col justify-end md:flex-row gap-5'>
          {
            pdfLocalLink ? (
              <a href={pdfLocalLink} target="_blank" rel="noopener noreferrer">
                <div className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                  <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                  <p className='text-primaryColor'>{pdfLinkText1}</p>
                </div>
              </a>
            ) : null
          }
          {
            pdflink && openFile ? (
              <div onClick={openFile} className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                <p className='text-primaryColor'>{pdfLinkText1}</p>
              </div>
            ) : null
          }
          {
             mdaLink && openMda ?
                <div onClick={openMda} className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                  <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                  <p className='text-primaryColor'>MD&A</p>
                </div>
              :
              null
          }

        </div>

      </div>
    </div>
  )
}

export default Informationpdf