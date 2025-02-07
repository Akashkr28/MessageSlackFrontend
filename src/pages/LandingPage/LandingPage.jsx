import { useNavigate } from "react-router-dom";

import Banner from "@/components/atoms/Banner/Banner";
import Navbar from "@/components/atoms/Navbar/Navbar";
import StickyScrollReveal from "@/components/atoms/StickyScroll/StickyScroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
      <>
        <Navbar/>
        <Banner/>
      </>    
    );
};