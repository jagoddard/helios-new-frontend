import Link from "next/link";
import React from "react";
import LithiumContainer from "../../../components/lithiumContainer";

const index = () => {
  return (
    <LithiumContainer selectedTab="Lithium: Technology">
      <section className="px-5 md:px-20 py-10 border-b-8 border-primaryColor bg-darkTheme">
        <p className="text-headerMobile md:text-header font-semibold mb-6 text-white">
          LITHIUM: THE KEY INGREDIENT POWERING TODAY'S TECHNOLOGY
        </p>
        <p className="mb-10 text-white">
          Nature's lightest metal is also one of the most chemically reactive,
          making it a key ingredient in powering and building the latest
          technology. Soaring demand for the light metal has meant that the
          global lithium supply chain has had to grow nearly exponentially to
          keep up. Take a look through this infographic to learn more Lithium
          Facts.
        </p>
        <div className="flex justify-center">
          <img src="/lithiumtech.jpg" className="md:w-[600px]" />
        </div>
        <div className="flex justify-center">
          <Link
            href="https://www.visualcapitalist.com/lithium-key-ingredient-powering-todays-technology/"
            target="_blank"
            passHref
          >
            <button className="mt-12 rounded-[10px] bg-[#25272A] text-primaryColor px-10 py-3">
              Click To View More
            </button>
          </Link>
        </div>
      </section>
    </LithiumContainer>
  );
};

export default index;
