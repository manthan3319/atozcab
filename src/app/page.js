"use client";
import dynamic from "next/dynamic";

// Lazy load components
const HomeSlider = dynamic(() => import("./home-slider/page"));
const OnlineBooking = dynamic(() => import("./Online-booking/page"));
const AboutAtoZCab = dynamic(() => import("./about-atoz-cab/page"));
const AboutLatestService = dynamic(() => import("./atoz-latest-services/page"));
const WhyChooseUs = dynamic(() => import("./why-choose-atoz-cab/page"));
const AtozCabFaq = dynamic(() => import("./AtoZ-cab-faq/page"));
const TrustedCabService = dynamic(() => import("./Trusted-Cab-Service-atoz/page"));

export default function Home() {
  return (
    <>
      <div>
        <HomeSlider />
      </div>
      <div>
        <OnlineBooking />
      </div>
      <div>
        <AboutAtoZCab />
      </div>
      <div>
        <AboutLatestService />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <AtozCabFaq />
      </div>
      <div>
        <TrustedCabService />
      </div>
    </>
  );
}
