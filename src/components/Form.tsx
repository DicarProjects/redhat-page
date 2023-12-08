import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axiosClient from "../api/axios";
import { useForm } from "../hooks/useForm";
import { Title } from "./Title";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import Contact from "../assets/img/form.jpg";

export const Form = () => {

    const { t } = useTranslation();
    
    const initialForm = {
      name: '',
      email:'',
      subject: '',
      comment: ''
    }

    const targetRef = useRef(null);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [navigate]);

    const [formValues, handleInputChange] = useForm(initialForm);


    const { name, email, subject, comment } = formValues;

    const hasProperty = (object) => {
      const resp = Object.values(object).some(value => !value);
      return resp;
    }
    
    const login = async (e) => {
      e.preventDefault();

      console.log('form', formValues)

      if (!hasProperty(formValues)) {
        if (subject === 'Seleccione un asunto' || subject === 'Choose a subject') {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: t('Pick a option')
          });
        }
        try {
          const response = await axiosClient.post('api/form/create-new-form', formValues);
          if (response.status === 200) {
            Swal.fire({
              title: "Good job!",
              text: "You message was sent!",
              icon: "success"
            });
          }
        } catch (error) {
          console.log('error', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Try again"
          });
        }
  
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Complete the form, please',
          icon: 'error'
        });
      }


    }

    return (
      <div id="form" ref={targetRef} className="flex flex-col-reverse gap-10 md:flex-row container mx-auto xl:max-w-[1200px] my-10 p-5">
        <div className="flex-1">
          <img className="h-[600px] object-cover" src={Contact} alt="Contact Image" />
        </div>
        <div className="flex-1 flex flex-col justify-center md:p-10">
          <Title text="Contact Us" center={false}/>
          <form 
            className="flex flex-1 flex-col gap-5 md:grid md:grid-cols-12 p-5 md:p-0"
            onSubmit={login}
          >
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 placeholder-gray-500 font-serif"
              placeholder={t('Name')}
            />

            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 placeholder-gray-500 font-serif"
              placeholder={t('Email')}
            />
            <select id="subject" name="subject" className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 placeholder-gray-500 font-serif" value={subject} onChange={handleInputChange}>
              <option>{t('Pick a option')}</option>
              <option>{t('Mobile app development')}</option>
              <option>{t('Web app development')}</option>
              <option>{t('Custom software development')}</option>
              <option>{t('Systems Integration')}</option>
              <option>{t('Ecommerce development')}</option>
              <option>{t('Technology consulting')}</option>
            </select>

            {/* <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 placeholder-gray-500 font-serif"
              placeholder={t('Subject')}
            /> */}

            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 md:h-24 resize-none placeholder-gray-500 font-serif"
              placeholder={t('Description')}i
            >
            </textarea>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 rounded p-2 text-white md:col-start-1 md:col-end-13 placeholder-gray-500 font-serif"
            >
              {t('Send')}
            </button>
          </form>
        </div>
      </div>
    )
}
