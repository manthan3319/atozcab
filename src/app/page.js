import Image from "next/image";
import HomeSlider from "./home-slider/page";
import OnlineBooking from "./Online-booking/page";
import AboutAtoZCab from "./about-atoz-cab/page";
import AboutLatestService from "./atoz-latest-services/page";
import WhyChooesUs from "./why-choose-atoz-cab/page";
import AtozCabFaq from "./AtoZ-cab-faq/page";
import TrustedCabService from "./Trusted-Cab-Service-atoz/page";

export default function Home() {
  return (
    <>
    <div>
      <HomeSlider/>
    </div>
    <div>
      <OnlineBooking/>
    </div>

    <div>
      <AboutAtoZCab/>
    </div>
    <div>
      <AboutLatestService/>
    </div>
    <div>
      <WhyChooesUs/>
    </div>
    <div>
      <AtozCabFaq/>
    </div>
    <div>
      <TrustedCabService/>
    </div>
    </>
  );
}
8