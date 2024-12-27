<<<<<<< HEAD
"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader/Loader";

// Lazy load components with loader
const HomeSlider = dynamic(() => import("./home-slider/page"), {
  loading: () => <Loader />,
});
const OnlineBooking = dynamic(() => import("./Online-booking/page"), {
  loading: () => <Loader />,
});
const OurBestSellersPackages = dynamic(() => import("./Our-Best-Sellers-Packages/page"), {
  loading: () => <Loader />,
});
const AboutAtoZCab = dynamic(() => import("./about-atoz-cab/page"), {
  loading: () => <Loader />,
});
const AboutLatestService = dynamic(() => import("./atoz-latest-services/page"), {
  loading: () => <Loader />,
});
const WhyChooseUs = dynamic(() => import("./why-choose-atoz-cab/page"), {
  loading: () => <Loader />,
});
const AtozCabFaq = dynamic(() => import("./AtoZ-cab-faq/page"), {
  loading: () => <Loader />,
});
const TrustedCabService = dynamic(() => import("./Trusted-Cab-Service-atoz/page"), {
  loading: () => <Loader />,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;  
  }

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
        <OurBestSellersPackages/>
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
=======
"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader/Loader";

// Lazy load components with loader
const HomeSlider = dynamic(() => import("./home-slider/page"), {
  loading: () => <Loader />,
});
const OnlineBooking = dynamic(() => import("./Online-booking/page"), {
  loading: () => <Loader />,
});
const OurBestSellersPackages = dynamic(() => import("./Our-Best-Sellers-Packages/page"), {
  loading: () => <Loader />,
});
const AboutAtoZCab = dynamic(() => import("./about-atoz-cab/page"), {
  loading: () => <Loader />,
});
const AboutLatestService = dynamic(() => import("./atoz-latest-services/page"), {
  loading: () => <Loader />,
});
const WhyChooseUs = dynamic(() => import("./why-choose-atoz-cab/page"), {
  loading: () => <Loader />,
});
const AtozCabFaq = dynamic(() => import("./AtoZ-cab-faq/page"), {
  loading: () => <Loader />,
});
const TrustedCabService = dynamic(() => import("./Trusted-Cab-Service-atoz/page"), {
  loading: () => <Loader />,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;  
  }

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
        <OurBestSellersPackages/>
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
>>>>>>> 8ddc7790b008e8f0470bba7ce9f1630b3eb40779
