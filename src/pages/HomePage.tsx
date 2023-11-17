import { AboutUs } from "../components/AboutUs";
import { Achievements } from "../components/Achievements";
import { Capabilities } from "../components/Capabilities";
import { Customers } from "../components/Customers";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export const HomePage = () => {
  return (
    <>    
      <Header/>
      <AboutUs/>
      <Services/>
      <Capabilities/>
      <Achievements/>
      <Customers/>
      <Footer/>
    </>
  )
}
