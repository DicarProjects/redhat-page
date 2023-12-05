import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ServicesContainer } from "../components/ServicesContainer";

export const ServicesPage = () => {
  return (
    <>
      <Navbar/>   
      <Header title="Services" subtitle="We are leaders in innovation, committed to quality and constant excellence." heightBanner="400"/>
      <ServicesContainer/>
      <Footer/>
    </>
  )
}
