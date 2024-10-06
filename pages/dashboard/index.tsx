import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import AppLoginContext from '../../components/AppLoginContext';
import Agm from '../../components/DashboardForms/Agm';
import Articles from '../../components/DashboardForms/Articles';
import Financials from '../../components/DashboardForms/Financials';
import Investors from '../../components/DashboardForms/Investors';
import News from '../../components/DashboardForms/News';
import TechnicalReports from '../../components/DashboardForms/TechnicalReports';
import Footer from '../../components/footer'
import Header from '../../components/header'
import { routes } from '../../routes/routes';
import { getAllNews } from '../../services/news';

type tabUpdateType = "NEWS" | "ARTICLES" | "TECHNICAL REPORTS" | "FINANCIALS" | "INVESTORS" | "AGM";

const dashboardOptions = ["NEWS", "ARTICLES", "TECHNICAL REPORTS", "FINANCIALS", "INVESTORS", "AGM"]

const Dashboard = () => {
    const [tabUpdate, setTabUpdate] = useState<tabUpdateType>("NEWS")
    const loginContext = useContext(AppLoginContext);
    const router = useRouter();
    const [data, setData] = useState([])

    useEffect(() => {
        if (!loginContext.isLoggedIn) {
            router.push(routes.login)
        }
    }, []);

    const fetchAllNews = async () => {
        try {
            const resp = await getAllNews();
            setData(resp.data.payload)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (tabUpdate === "NEWS") {
            fetchAllNews();
        }
    }, [tabUpdate])

    return (
        <>
            <section className='bg-darkTheme h-20'>
                <Header tabname='Dashboard' />
            </section>
            <section className='py-12 md:py-10 px-5 md:px-20 border-b-4  mt-20 border-primaryColor'>
                <div className='flex justify-between bg-[#91D695] rounded-[8px] px-8 py-5 w-3/5 m-auto'>
                    <p className='text-xl font-semibold text-center'>Please select the section you want to update</p>
                    <div className="relative">
                        <select
                            className="w-64 appearance-none bg-black border border-primaryColor text-primaryColor focus:outline-none pl-3 pr-8 py-2"
                            onClick={(e: any) => setTabUpdate(e.target.value)}
                        >
                            {dashboardOptions.map((option: string, index: number) => {
                                return (
                                    <>
                                        <option key={index + 1} value={option} className={`my-2 ${tabUpdate === option ? "text-primaryColor" : "text-white"}`}>
                                            {option}
                                        </option>
                                    </>
                                )

                            })}
                        </select>
                        <div className="pointer-events-none absolute right-0 -top-4 bottom-0 flex items-center px-2 text-gray-700">
                            <svg className="h-4 w-4" fill='#59b95f' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {tabUpdate === "NEWS" && <News />}
                {tabUpdate === "ARTICLES" && <Articles />}
                {tabUpdate === "TECHNICAL REPORTS" && <TechnicalReports />}
                {tabUpdate === "FINANCIALS" && <Financials />}
                {tabUpdate === "INVESTORS" && <Investors />}
                {tabUpdate === "AGM" && <Agm />}
            </section>
            <Footer />
        </>
    )
}

export default Dashboard