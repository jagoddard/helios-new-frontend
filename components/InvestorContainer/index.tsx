import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { InvestorsTabs } from '../../data/InvestorsTabs';
import { routes } from '../../routes/routes';
import { getAgmConfig } from '../../services/agm';
import styles from '../../styles/investor/investor.module.css';
import { TabType } from '../../types/tabsTypes';
import Footer from '../footer';
import Header from '../header';
import MobileTabs from '../mobileTabs';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface ChildrenType {
  selectedTab: string,
  children: any
}

const InvestorContainer = ({ selectedTab, children }: ChildrenType) => {

  const [isAgmEnabled, setIsAgmEnabled] = useState<boolean>(false);
  const InvestorTabWithAgm: TabType[] = [...InvestorsTabs, {
    name: "Annual General Meeting - AGM",
    link: routes.annualGeneralMeeting
  }]
  const router = useRouter()

  const fetchAgmConfig = async () => {
    try {
      let response = await getAgmConfig();
      setIsAgmEnabled(response.data.payload[0].isAgmTabEnabled)
    } catch (error: any) {
      toast.error(error.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER
    })
    }
  }

  useEffect(() => {
    fetchAgmConfig();
  }, [router.pathname])


  return (
    <div>
      <section className={styles.heloandHeader}>
        <Header tabname='Investors' />
        <div className={styles.hero}>
          <div className='flex justify-center items-center p-4 bg-bgOpacity absolute bottom-20'>
            <p className='text-primaryColor text-2xl md:text-4xl font-bold'>Investors</p>
          </div>
        </div>
      </section>
      <section className={styles.investFilter}>
        <Link href="/investores/investor-information">
          <p className={`${selectedTab === "Investor Information" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Investor Information
          </p>
        </Link>
        <Link href="/investores/markets">
          <p className={`${selectedTab === "Markets" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Markets
          </p>
        </Link>
        <Link href={routes.latestNewReleases}>
          <p className={`${selectedTab === "Press Releases" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Press Releases
          </p>
        </Link>
        <Link href="/investores/technical-reports">
          <p className={`${selectedTab === "Technical Reports" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Technical Reports
          </p>
        </Link>
        <Link href="/investores/financials">
          <p className={`${selectedTab === "Financials" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Financials
          </p>
        </Link>
        {isAgmEnabled && <Link href="/investores/annual-general-meeting">
          <p className={`${selectedTab === "Annual General Meeting - AGM" ? "text-primaryColor" : "text-white"} ${styles.investFilterItemName}`}>
            Annual General Meeting - AGM
          </p>
        </Link>}
      </section>
      <section className='bg-bgColor py-4 px-20 w-full md:hidden'>
       <MobileTabs tabData={isAgmEnabled ? InvestorTabWithAgm : InvestorsTabs} />
      </section>
      <section>{children}</section>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default InvestorContainer