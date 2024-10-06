import Link from "next/link";
import React from "react";
import LithiumContainer from "../../../components/lithiumContainer";

const index = () => {
  return (
    <LithiumContainer selectedTab="Lithium Products">
      <div className="border-b-8 border-primaryColor bg-darkTheme">
        <section className="px-5 md:px-20 py-10">
          <p className="text-headerMobile md:text-header font-semibold mb-3 text-white">
            ALUMINUM-LITHIUM ALLOY
          </p>
          <p className="text-primaryColor mb-6">
            Making transportation Lighter and Greener Using Aluminum-Lithium
            Alloy
          </p>
          <div className="my-6 flex justify-center">
            <img src="/lsd13.jpg" />
          </div>
          <p className="mb-3 text-white">
            Aircraft manufacturers are continuously seeking to refresh existing
            aircrafts or develop next generation aircrafts, their customers want
            planes that are less expensive to fly, have longer inspection
            intervals, longer useful lifetimes and offer enhanced comfort for
            the flying public. Recently, Alcoa Inc. has partnered with aircraft
            manufacturers to meet this market need. Alcoa has developed new
            aluminum alloys and third generation aluminum-lithium alloys that
            are up to 7% less dense than the current generation. These new
            aluminum-lithium alloys are expected to reduce the next generation,
            short range aircraft by up to 10% versus composite-intensive planes.
            This weigh reduction is expected to produce a 12% increase in fuel
            efficiency. Alcoa is planning to expand their aluminum-lithium
            production facilities at three locations around the world.
          </p>
          <p className="mb-3 text-white">
            "The future of aviation is being built with aluminum-lithium and
            Alcoa is making big moves to capture that demand" Klaws Klein, Alcoa
            Chairman and CEO. "This state of the art facility positions Alcoa as
            the world's premier aluminum-lithium supplier, offering the broadest
            portfolio of aluminum. Lithium components for next generation
            aircraft"
          </p>
          <p className="mb-3 text-white">
            Alcoa Opens World's Largest Aluminum-Lithium Aerospace Plant in
            Indiana:
          </p>
          <Link
            href="https://news.alcoa.com/home/default.aspx"
            target="_blank"
            className="text-primaryColor mb-3"
            passHref
          >
            {" "}
            Read More
          </Link>
          <p className="text-headerMobile md:text-header font-semibold my-3 text-white">
            CELL PHONES, COMPUTERS, POWER TOOLS, IPODS AND IPADS.
          </p>
          <div className="my-6 flex justify-center">
            <img src="/lsd14.jpg" />
          </div>
          <p className="mb-3 text-white">
            It is estimated that in 2014 smartphones users, worldwide, will
            total 1.75 billion. In this same time period, Gartner speculates
            that worldwide traditional PC's, tablets, ultra mobile and mobile
            phone shipments are on pace to grow 7.6 percent, an increase of 2.5
            billion units. Between 2013 and 2017, mobile phone penetration will
            rise from 61.1% to 69.4% of the global population, according to a
            new emerging report "Worldwide mobile phone users." On average,
            mobile devices usually carry between 8-25 grams of lithium,
            depending on the watt hour ratings of the device. In contrast,
            vehicles can carry anywhere from 0.3Kg (300g) to 5 Kg of lithium,
            depending on the type of battery and the size of the car.
          </p>
          <p className="mb-3 text-white">
            Smartphone Users Worldwide Will Total 1.75 Billion in 2014:
            <Link
              href="https://www.insiderintelligence.com/insights/mobile-users-smartphone-usage/"
              target="_blank"
              className="text-primaryColor mb-3"
              passHref
            >
              {" "}
              Read More
            </Link>
          </p>
        </section>
      </div>
    </LithiumContainer>
  );
};

export default index;
