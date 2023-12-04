import { Address } from "../components/Address";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

export const ContactPage = () => {
  return (
    <>
      <Header title="Contact us" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum purus eros, vel consectetur mauris rutrum a. Quisque vitae arcu ut diam lobortis volutpat. Vivamus dapibus eget metus a dapibus" heightBanner="400"/>
      <Address/>
      <Form/>
      <Footer/>
    </>
  )
}
