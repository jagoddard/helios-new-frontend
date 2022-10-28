import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import { routes } from '../../routes/routes';
import styles from '../../styles/header.module.css';
import AppLoginContext from '../AppLoginContext';
import Sidebar from './sidebar';
// import { BiMoon, BiSun } from 'react-icons/bi';
// import { useTheme } from 'next-themes';

interface HeaderProps {
    tabname: "Home" | "Investors" | "Projects" | "Lithium" | "Contacts" | "About Us" | "Dashboard";
}

const Header = ({ tabname }: HeaderProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const loginContext = useContext(AppLoginContext)
    const router = useRouter()
    const handleLogout = () => {
        loginContext.setIsLoggedIn(false)
        loginContext.setToken("")
        router.push(routes.homepage)
    }

    // const [toggleDarkIcon, setToggleDarkIcon] = useState<boolean>(false);
    // const { theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState<boolean>(false)

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // useEffect(() => {
    //     if (theme === 'dark') {
    //         setToggleDarkIcon(true)
    //     } else if (theme === 'light') {
    //         setToggleDarkIcon(false)
    //     }
    // }, [theme])

    // useEffect(() => {
    //     if (theme === 'dark') {
    //         setToggleDarkIcon(true)
    //     } else if (theme === 'light') {
    //         setToggleDarkIcon(false)
    //     }
    // }, [theme])

    const sidebarHandler = () => {
        open === true ? setOpen(false) : setOpen(true)
    }
    // const renderThemeChanger = () => {
    //     if (!mounted) return null;
    //     if (theme === 'dark') {
    //         setTheme('light')
    //     } else {
    //         setTheme('dark')
    //     }
    // }
    return (
        <section className={styles.header}>
            <Link href="/homepage">
                <img src="/logo.svg" alt="logo" className={styles.logo} />
            </Link>
            <div className={styles.nav}>
                <Link href={routes.homepage}>
                    <p className={`${styles.navLink} ${tabname === "Home" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"} `}>Home</p>
                </Link>
                <Link href={routes.investorInformation}>
                    <p className={`${styles.navLink} ${tabname === "Investors" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>Investors</p>
                </Link>
                <Link href={routes.projects}>
                    <p className={`${styles.navLink} ${tabname === "Projects" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>Projects</p>
                </Link>
                <Link href={routes.theLithiumMarket}>
                    <p className={`${styles.navLink} ${tabname === "Lithium" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>Lithium</p>
                </Link>
                <Link href={routes.contact}>
                    <p className={`${styles.navLink} ${tabname === "Contacts" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>Contact</p>
                </Link>
                <Link href={routes.managementTeam}>
                    <p className={`${styles.navLink} ${tabname === "About Us" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>About Us</p>
                </Link>
                {loginContext.isLoggedIn &&
                    <Link href={routes.dashboard}>
                        <p className={`${styles.navLink} ${tabname === "Dashboard" ? "border-b-4 border-primaryColor text-primaryColor" : "text-white"}`}>Dashboard</p>
                    </Link>
                }
            </div>

            <div className={styles.shareLogin}>
                <div>
                    <div className={styles.sharePrice}>TSXv:&nbsp;
                        <a href="https://money.tmx.com/en/quote/HX" className={styles.shareName}>HX</a>
                        &nbsp;$
                        <div
                            data-qmod-tool="miniquotes"
                            data-qmod-params='{
                                "lang":"en",
                                "symbol":"HX:CA",
                                "jsvarsAddClasses":false,
                                "chshname":true
                            }'
                            className="qtool"
                            id="TSXV"
                        ></div>
                    </div>
                </div>
                {loginContext.isLoggedIn ? 
                    <button className={styles.login} onClick={handleLogout}>Logout</button> 
                    : 
                    <Link href={routes.login}><button className={styles.login}>Login</button></Link>}
            </div>

            <div className='visible headerMd:hidden flex justify-end items-center'>
                <div className='text-white mr-4'>
                    {/* {
                        toggleDarkIcon ?
                            <div onClick={renderThemeChanger} className='cursor-pointer'>
                                <BiSun />
                            </div>
                            :
                            <div onClick={renderThemeChanger} className='cursor-pointer'>
                                <BiMoon />
                            </div>

                    } */}
                </div>
                {
                    open ?
                        <img src="/close.svg" alt="" role={'button'} onClick={sidebarHandler} className='w-6 h-6' />
                        :
                        <img src="/sidebarIcon.svg" alt="" role={'button'} onClick={sidebarHandler} className='w-6 h-6' />
                }
            </div>
            {open ?
                <Sidebar open={open} setOpen={setOpen} tabname={tabname} />
                :
                null
            }
        </section>
    )
}

export default Header