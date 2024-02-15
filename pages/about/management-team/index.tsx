import React from 'react'
import AboutContainer from '../../../components/aboutContainer'
import AboutData from '../../../components/aboutData'

const ManagementTeam = () => {
    return (
        <AboutContainer selectedTab="management-team">
            <section className='bg-darkTheme relative py-12 md:py-10 px-5 md:px-20 md:pr-[45%] border-b-8 border-primaryColor'>
                <p className='text-headerMobile md:text-header font-semibold text-white'>MANAGEMENT & DIRECTORS</p>
                {/* <AboutData
                    title="Christopher Brown"
                    subTitle="CEO & Director, HeliosX"
                    desc="Mr. Brown has more than 25 years engineering, capital markets and Indigenous partnership experience. Worked as a financial analyst for BMO Capital Markets and Canaccord on international energy and infrastructure opportunities. Has more than 10 years direct energy experience managing budgets in excess of $300 million. Restructured Huntington Exploration Inc. as Director, President & CEO (listed on TSXv (HEI)) into a junior gold exploration company."
                /> 
                <AboutData
                    title="Sameer Uplenchwar"
                    subTitle="CFO & Director, HeliosX"
                    desc="Mr. Uplenchwar has more than 15 years of financial and business development experience. Served as Managing Director of Global Hunter Securities in Calgary, and Head of US Research with GMP Capital in Houston. Was Senior Energy Analyst supporting a $550MM gross long/short strategy fund in New York for Surveyor Capital LLC. Worked for Morgan Stanley in New York, as well as KPMG and Lasalle/ABN AMRO Bank."
                /> */}
                <AboutData
                    title="Brian Findlay"
                    subTitle="President & Director"
                    desc="Mr. Findlay brings decades of senior management experience in corporate development, international mining, mergers and acquisitions, exploration and development, mine operations, corporate social responsibility; and managing, financing and administration of public companies. Helped raise more than $200 million in capital for junior resource and technology companies. An expert at managing public companies with international interests."
                />
                {/* <AboutData
                    title="Frank Busch"
                    subTitle="Director, HeliosX"
                    desc="Mr. Busch is a member of Nisichawayasihk (Nee-chise-away-a-see) Cree Nation. Bachelor's degree in Indigenous Studies from the University of Manitoba, 5 certificates from the Canadian Securities Institute and Post-Graduate Certificate in Finance from Harvard University. CEO of NationFUND, and in addition to HeliosX, also on the Board of Huntington Exploration Inc. and Kelso Technologies Inc.; a publicly traded, cross-border, industrial technology company, and as such, is a registered 'insider' on the Toronto and New York Stock Exchanges."
                /> */}
                <AboutData
                    title="Bob Verhelst"
                    subTitle="Director"
                    desc="Mr. Verhelst has more than 20 years of senior management experience, including 11 as Partner, Director and Officer of several Western Canada brokerage firms. During this time, he was also President and CEO of a US (FINRA) regulated foreign broker dealer. He has senior risk management experience at CIBC and 11 years combined experience in enforcement for the RCMP, Alberta Securities Commission and Vancouver Stock Exchange. He also has management and board experience with TSX Venture Exchange companies and brings a strong corporate governance background to the Board."
                />
                <p className='text-2xl md:text-4xl font-semibold mt-20 text-white'>DAJIN RESOURCES S.A.</p>
                <AboutData
                    title="Cosme Beccar-Verela"
                    subTitle="ALTERNATE"
                    desc="Cosme Beccar-Verela was born in New York City and graduated  as a lawyer at the University of Buenos Aires in 1989. He practiced as a Foreign Associate in Winthrop, Stimson, Putnam & Roberts, New York (1990) and in Huygué de Mahenge, Bloxham et Michaud, Paris (1995). He was an associate Professor of Contract Law in the University of Buenos Aires from his graduation until 2004. Cosme represented Placer Dome while this company explored in Argentina; signed contracts on behalf of Placer with the provincial authorities of Catamarca (Cerro Atajo) and Neuquén (Andacollo). He has represented Continental Illinois Bank and was member of the Committee of banking lawyers as well as a member of the Board of American Express Argentina and of ABB Oil & Gas. His legal practice also includes insurance, trading and industrial companies. Cosme is fluent in English, French and Portuguese and has basic knowledge of Dutch."
                />
                <img src="/bgAbout.svg" className='hidden md:w-[45%] md:block absolute top-0 right-0' />
            </section>
        </AboutContainer>
    )
}

export default ManagementTeam