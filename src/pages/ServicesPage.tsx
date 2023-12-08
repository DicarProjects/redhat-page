import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ServicesContainer } from "../components/ServicesContainer";

export const ServicesPage = () => {
  return (
    <>
      <Navbar/>   
      <Header title="Services" subtitle="We turn ideas into advanced technological solutions." heightBanner="400"/>
      <ServicesContainer/>
      <Footer/>
    </>
  )
}
