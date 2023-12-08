import { CapacitiesContainer } from "../components/CapacitiesContainer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const CapacitiesPage = () => {
  return (
    <>
      <Navbar/>
      <Header title="Capabilities" subtitle="Masterfully crafting solutions at the forefront of technology." heightBanner="400"/>
      <CapacitiesContainer/>
      <Footer/>
    </>
  )
}
