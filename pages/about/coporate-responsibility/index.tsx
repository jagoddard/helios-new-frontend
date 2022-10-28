import React from 'react'
import AboutContainer from '../../../components/aboutContainer'

const CorporateResponsability = () => {
    return (
        <AboutContainer selectedTab='coporate-responsability'>
            <section className='py-12 md:py-10 px-5 md:px-20 relative border-b-8 border-primaryColor bg-darkTheme'>
                <img src="/bgAbout.svg" className='hidden md:block absolute right-0 top-0 h-full' />
                <div className=''>
                    <p className='text-headerMobile md:text-header  font-semibold uppercase text-white'>Corporate Responsibility</p>
                    <p className='text-xl font-normal mt-6 text-white'>HeliosX is an energy metals company that believes in responsibility, accountability and cooperation with all of our stakeholders. Our objective is to build and maintain prosperity for all stakeholders through responsible business practices</p>
                    <p className='text-xl font-normal mt-2 text-white'>HeliosX is committed to responsible business conduct, placing the utmost importance on respecting the safety and health of our employees, protecting the environment, and respecting the human rights of all people, especially our employees and the residents of the communities in which we operate.</p>
                </div>
            </section>
        </AboutContainer>
    )
}

export default CorporateResponsability