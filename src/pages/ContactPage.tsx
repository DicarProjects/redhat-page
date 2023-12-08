import { Address } from "../components/Address";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const ContactPage = () => {
  return (
    <>
      <Navbar/>   
      <Header title="Contact us" subtitle="Turn your projects into reality – get in touch with us today!" heightBanner="400"/>
      <Address/>
      <Form/>
      <Footer/>
    </>
  )
}
