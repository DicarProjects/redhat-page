import { AboutUs } from "../components/AboutUs";
import { Capabilities } from "../components/Capabilities";
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
      <Footer/>
    </>
  )
}
