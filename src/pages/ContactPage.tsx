import { Address } from "../components/Address";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const ContactPage = () => {
  return (
    <>
      <Navbar/>   
      <Header title="Contact us" subtitle="We are leaders in innovation, committed to quality and constant excellence." heightBanner="400"/>
      <Address/>
      <Form/>
      <Footer/>
    </>
  )
}
