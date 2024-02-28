import Link from "next/link";
import React from "react";
import { routes } from "../../routes/routes";
import styles from "../../styles/footer.module.css";
const Footer = () => {
  return (
    <>
      <div className="bg-primaryColor h-2 w-full" />
      <section className={styles.footer}>
        <div className={styles.footerNav}>
          <Link href={routes.homepage}>
            <img
              src="/D2_Lithium_Corp_LOGO_v1.jpg"
              className={styles.footerLogo}
            />
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
        <p className={styles.copyRight}>© Copyright 2024 D2 LITHIUM</p>

        <div className={styles.developBy}>
          Site is Developed and Maintained by{" "}
          <Link href="http://bodhisaar.com/" className="underline hover:text-primaryColor"
            target="_blank" passHref>
            Bodhisaar Learning
          </Link>
        </div>

        <div className={styles.groupOfSocialIcon}>
          <Link
            href="#"
            target="_blank"
            passHref
          >
              <img
                src="/linkedinLight.svg"
                className={styles.fotterSocialIcon}
              />
              {/* <img src="/linkedinDark.svg" className={styles.fotterSocialIcon} /> */}
          </Link>
          <Link href="#" target="_blank" passHref>
              <img
                src="/twitterLight.svg"
                className={styles.fotterSocialIcon}
              />
              {/* <img src="/twitterDark.svg" className={styles.fotterSocialIcon} /> */}
          </Link>
          <Link href="#" target="_blank" passHref>
              <img
                src="/facebookLight.svg"
                className={styles.fotterSocialIcon}
              />
              {/* <img src="/facebookDark.svg" className={styles.fotterSocialIcon} /> */}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;