import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Objectives } from "../components/Objectives";
import { Team } from "../components/Team";
import { Values } from "../components/Values";

export const AboutUsPage = () => {
  return (
    <>
      <Header title="About us" heightBanner="400"/>
      <Objectives/>
      <Values/>
      <Team/>
      <Footer/>
    </>
  )
}
