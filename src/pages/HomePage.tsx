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
      <Header title={'Experts in Digital Development and Transformation through Innovative Technologies.'} subtitle={'Welcome to Red Hat It Solutions, leaders in software development and digital transformation. Our innovative agility drives tangible results. Join us to strategically and effectively shape the digital future.'} heightBanner="600"/>
      <AboutUs/>
      <Services/>
      <Capabilities/>
      <Achievements/>
      <Customers/>
      <Footer/>
    </>
  )
}
