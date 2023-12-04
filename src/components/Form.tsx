// import { useState } from "react";
import { useTranslation } from "react-i18next";
import axiosClient from "../api/axios";
import { useForm } from "../hooks/useForm";
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
    
    const [formValues, handleInputChange] = useForm(initialForm);

    const { name, email, subject, comment } = formValues;

    const hasProperty = (object) => {
      const resp = Object.values(object).some(value => !value);
      return resp;
    }
    
    const login = async (e) => {
      e.preventDefault();

      if (!hasProperty(formValues)) {
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
      <div className="flex flex-col-reverse gap-10 md:flex-row container mx-auto xl:max-w-[1200px] my-10">
        <div className="flex-1">
          <img src={Contact} alt="Contact Image" />
        </div>
        <form 
          className="flex flex-1 flex-col gap-5 md:grid md:grid-cols-12 p-5 md:p-0"
          onSubmit={login}
        >
          <h2 className="text-2xl font-bold md:col-start-1 md:col-end-13 border-b-2 border-red-500 w-6/12 pb-5">{t('Contact Us')}</h2>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13"
                placeholder={t('Name')}
            />

            <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13"
                placeholder={t('Email')}
            />

            <input
                id="subject"
                name="subject"
                type="text"
                value={subject}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13"
                placeholder={t('Subject')}
            />

            <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={handleInputChange}
                className="bg-gray-100 w-full p-3 rounded text-sm md:col-start-1 md:col-end-13 md:h-24 resize-none"
                placeholder={t('Description')}
            >
            </textarea>

            <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 rounded p-2 text-white md:col-start-1 md:col-end-13"
            >
                {t('Send')}
            </button>
        </form>
      </div>
    )
}
