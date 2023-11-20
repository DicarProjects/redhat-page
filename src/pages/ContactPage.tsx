import { Address } from "../components/Address";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

export const ContactPage = () => {
  return (
    <>
      <Header title="Contact us" heightBanner="400"/>
      <Address/>
      <Form/>
      <Footer/>
    </>
  )
}
