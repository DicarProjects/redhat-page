import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Maintext } from "../components/Maintext";
import { Navbar } from "../components/Navbar";
import { Objectives } from "../components/Objectives";
import { Team } from "../components/Team";
import { Values } from "../components/Values";

export const AboutUsPage = () => {
  return (
    <>
      <Navbar/>  
      <Header title="About us" subtitle="We are leaders in innovation, committed to quality and constant excellence." heightBanner="400"/>
      <Maintext text="At Red Hat IT Solutions, we take pride in delivering cutting-edge technological solutions as a recently founded software development company with a vision to transform the tech landscape. While our history is recent, our footprint has rapidly expanded nationally and internationally, collaborating with clients from various sectors, including ESPN, Torc, Sodimac, and many more. We boast a highly trained and committed team, whose aim is to provide personalized and quality solutions that drive the growth and success of our clients. We strive to thoroughly understand the technological needs of our clients and offer tailored responses. Our story is built on robust relationships grounded in trust and customer satisfaction. We are committed to continued innovation and adaptation to the latest technological trends."/>
      <Objectives/>
      <Values/>
      <Team/>
      <Footer/>
    </>
  )
}
