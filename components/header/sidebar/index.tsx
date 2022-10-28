import Link from 'next/link';
import React, { useEffect } from 'react'
import { routes } from '../../../routes/routes';
interface SidebarProps {
  open: any,
  setOpen: any,
  tabname: "Home" | "Investors" | "Projects" | "Lithium" | "Contacts" | "About Us" | "Dashboard";
}


const Sidebar = ({ open, setOpen, tabname }: SidebarProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);
  console.log(tabname);
  return (
    <div className='fixed headerMd:hidden w-screen bg-[#b6b6b678] z-10 flex justify-end top-[80px] left-0' style={{ height: "calc(100vh - 80px)" }}>
      <div className='bg-black text-white w-6/12 p-4 h-full flex flex-col justify-between sidbarShadow'>
        <div className='flex flex-col gap-5'>
          <Link href={routes.homepage}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "Home" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>Home</p></Link>
          <Link href={routes.investorInformation}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "Investors" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>Investors</p></Link>
          <Link href={routes.projects}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "Projects" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>Projects</p></Link>
          <Link href={routes.theLithiumMarket}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "Lithium" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>Lithium</p></Link>
          <Link href={routes.contact}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "Contacts" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>Contacts</p></Link>
          <Link href={routes.managementTeam}><p className={`text-end mt-4 uppercase text-2xl ${tabname === "About Us" ? "text-primaryColor" : "text-white"}`} onClick={() => setOpen(open)}>About Us</p></Link>
        </div>
        <div>
          <div>
            <div className='text-end font-medium text-xl'>TSXv:
              <a href="https://money.tmx.com/en/quote/HX" className='text-primaryColor'> HX </a>
              $
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
          <div className='flex justify-end mt-4'>
            <Link href={routes.login}><button className="bg-primaryColor px-7 py-3 rounded-lg text-white uppercase text-lg">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar