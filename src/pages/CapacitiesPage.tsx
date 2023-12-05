import { CapacitiesContainer } from "../components/CapacitiesContainer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const CapacitiesPage = () => {
  return (
    <>
      <Navbar/>  
      <Header title="Capabilities" subtitle="We are leaders in innovation, committed to quality and constant excellence." heightBanner="400"/>
      <CapacitiesContainer/>
      <Footer/>
    </>
  )
}
