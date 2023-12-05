import { AboutUs } from "../components/AboutUs";
import { Achievements } from "../components/Achievements";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";

export const HomePage = () => {
  return (
    <>
      <Navbar/>    
      <Header title={'Red Hat IT Solutions: Shaping the Digital Future with Cutting-Edge Technologies.'} subtitle={'We specialize in shaping the digital future. With our expertise in technology services, we anticipate digital needs and provide innovative solutions.'} heightBanner="600"/>
      <AboutUs/>
      <Services/>
      <Experience/>
      <Achievements/>
      <Footer/>
    </>
  )
}
