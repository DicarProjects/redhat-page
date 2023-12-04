import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Objectives } from "../components/Objectives";
import { Team } from "../components/Team";
import { Values } from "../components/Values";

export const AboutUsPage = () => {
  return (
    <>
      <Header title="About us" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum purus eros, vel consectetur mauris rutrum a. Quisque vitae arcu ut diam lobortis volutpat. Vivamus dapibus eget metus a dapibus" heightBanner="400"/>
      <Objectives/>
      <Values/>
      <Team/>
      <Footer/>
    </>
  )
}
