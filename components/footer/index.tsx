import Link from 'next/link'
import React from 'react'
import { routes } from '../../routes/routes'
import styles from '../../styles/footer.module.css'
const Footer = () => {
    return (
        <>
            <div className='bg-primaryColor h-2 w-full' />
            <div className={styles.footer}>
                <div className={styles.footerNav}>
                    <Link href={routes.homepage}>
                        <img src="/logo.svg" className={styles.footerLogo} />
                    </Link>
                    <div className={styles.footerNavbarMobile}>
                        <div className={styles.footerNavItemMobile}>
                            <Link href={routes.homepage}>
                                <p className={styles.footerNavItem}>Home</p>
                            </Link>
                            <Link href={routes.investorInformation}>
                                <p className={styles.footerNavItem}>Investors</p>
                            </Link>
                            <Link href={routes.projects}>
                                <p className={styles.footerNavItem}>Projects</p>
                            </Link>
                        </div>
                        <div className={styles.footerNavItemMobile}>
                            <Link href={routes.theLithiumMarket}>
                                <p className={styles.footerNavItem}>Lithium</p>
                            </Link>
                            <Link href={routes.contact}>
                                <p className={styles.footerNavItem}>Contact</p>
                            </Link>
                            <Link href={routes.managementTeam}>
                                <p className={styles.footerNavItem}>About Us</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footerNavbar}>
                        <Link href={routes.homepage}>
                            <p className={styles.footerNavItem}>Home</p>
                        </Link>
                        <Link href={routes.investorInformation}>
                            <p className={styles.footerNavItem}>Investors</p>
                        </Link>
                        <Link href={routes.projects}>
                            <p className={styles.footerNavItem}>Projects</p>
                        </Link>
                        <Link href={routes.theLithiumMarket}>
                            <p className={styles.footerNavItem}>Lithium</p>
                        </Link>
                        <Link href={routes.contact}>
                            <p className={styles.footerNavItem}>Contact</p>
                        </Link>
                        <Link href={routes.managementTeam}>
                            <p className={styles.footerNavItem}>About Us</p>
                        </Link>
                    </div>
                    <div></div>
                </div>
                <p className={styles.copyRight}>© Copyright 2022 HeliosX</p>
                <p className={styles.copyRightDesc}>All project entities, reports and intellectual property are wholly owned by HeliosX Lithium & Technologies Corp. as of the Shareholder’s unanimous approval of the Plan of Arrangement between Dajin Lithium Corp. and HeliosX Corp on November 19, 2021</p>
                <div className={styles.developBy}>Site is Developed and Maintained by <a className='underline hover:text-primaryColor' href='http://bodhisaar.com/' target="_blank" rel="noopener noreferrer">Bodhisaar Learning</a></div>



                <div className={styles.groupOfSocialIcon}>
                    <Link href="https://www.linkedin.com/company/heliosxlithium/" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <img src="/linkedinLight.svg" className={styles.fotterSocialIcon} />
                            {/* <img src="/linkedinDark.svg" className={styles.fotterSocialIcon} /> */}
                        </a>
                    </Link>
                    <Link href="https://twitter.com/Heliosx_lithium" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <img src="/twitterLight.svg" className={styles.fotterSocialIcon} />
                            {/* <img src="/twitterDark.svg" className={styles.fotterSocialIcon} /> */}
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/HeliosXLithium" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            <img src="/facebookLight.svg" className={styles.fotterSocialIcon} />
                            {/* <img src="/facebookDark.svg" className={styles.fotterSocialIcon} /> */}
                        </a>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Footer