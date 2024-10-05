import React from "react";
import Address from "../../components/address";
import Footer from "../../components/footer";
import Header from "../../components/header";

const index = () => {
  return (
    <div>
      <section className="bg-contactBanner bg-cover bg-center">
        <Header tabname="Contacts" />
        <section className="h-[400px] md:h-[500px] relative">
          <div className="flex justify-center items-center p-4 bg-bgOpacity absolute bottom-20">
            <p className="text-primaryColor text-2xl md:text-4xl font-bold">
              Contact
            </p>
          </div>
        </section>
      </section>
      <section className="py-10 px-5 md:px-20 border-b-8 border-primaryColor bg-darkTheme">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="md:w-1/2">
            <Address address="HEAD OFFICE" />
            <p className="pt-4 md:w-1/2 text-white">
              D2 Lithium Corp.
              <br />
              202-8661-201 Street
              <br />
              Langley, BC V2Y 0G6 Canada
            </p>

            <p className="md:w-1/2 text-white">Phone: 604.681.6151</p>
            <p className=" md:w-1/2 text-white">Email: brian@d2lithium.com</p>
          </div>
          {/* <div className="md:w-1/2">
            <Address address="FIELD OFFICE, ARGENTINA" />
            <p className="pt-4 md:w-1/2 text-white">
              Dajin Resources S.A. Beccar Cosme M. Varela C&C
              <br />
              Beccar Varela Reconquista 657 Piso 1 C1003ABM Buenos Aires,
              Argentina
            </p>
            <p className=" md:w-1/2 text-white">Phone: 011.54.11.4315.2444</p>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="md:w-1/2">
            <Address address="TRANSFER AGENT" />
            <p className="pt-4 md:w-1/2 text-white">
              Odyssey Trust Co.
              <br />
              323-409 Granville Street
              <br />
              Vancouver, BC V6C 1T2 Canada
            </p>
            <p className=" md:w-1/2 text-white">Phone: 778.819.1184</p>
          </div>
          {/* <div className='md:w-1/2'>
            <Address address='LEGAL COUNSEL' />
            <div className='flex flex-col md:flex-row gap-6 text-white'>
              <div>
                <p className='pt-4'>
                  Borden Ladner Gervais LLP<br />
                  1200 Waterfront Centre, 200 Burrard Street
                  Vancouver, BC,
                </p>
                <p className=' md:w-1/2 text-white'>
                  V7X 1T2, Canada
                </p>
              </div>
              <div>
                <p className='pt-4 text-white'>
                  Osler, Hoskin & Harcourt LLP<br />
                  Brookfield Place
                  Suite 2700, 225 6 Avenue SW
                  Calgary, Alberta,
                </p>
                <p className=' md:w-1/2 text-white'>
                   T2P 1N2, Canada
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="md:w-1/2">
            <Address address="AUDITORS" />
            <p className="pt-4 text-white">
              DeVisser Gray LLP
              <br />
              401-905 West Pender Street
              <br />
              Vancouver, BC V6C 1L6 Canada
            </p>
          </div>
          <div className="md:w-1/2"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <Address address="LEGAL" />
            <p className="pt-4 text-white">
              OLEN AASEN LAW
              <br />
              520-2508 Watson Street
              <br />
              Vancouver, BC V5T 3G9 Canada
            </p>
            <p className="pt-4 text-white">
              KAEMPFER CROWELL
              <br />
              50 West Libery Street, Suite 1100
              <br />
              Reno, NV 89501 U.S.A
            </p>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
