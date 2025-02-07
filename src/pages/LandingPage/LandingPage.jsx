import { useNavigate } from "react-router-dom";

import Banner from "@/components/atoms/Banner/Banner";
import Navbar from "@/components/atoms/Navbar/Navbar";

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
      <>
        <Navbar/>
        <Banner/>
      </>    
    );
};