import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import contact from "../assets/img/contact.jpg";

export const Address = () => {

  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row container mx-auto md:max-w-[700px] xl:max-w-[1200px] mt-10 p-5">
      <div className="flex flex-col flex-1 items-start justify-center gap-5 m-10 md:m-0 md:mt-10">
        <Title text="LATAM" center={false}/>
        <p className="text-gray-700 text-md text-[16px] font-serif"><span className="font-bold text-black">{t('Direction')}:</span> Calle 154 # 21 Sur Ibagué, Tolima</p>
        <p className="text-gray-700 text-md text-[16px] font-serif"><span className="font-bold text-black">{t('Phone')}:</span> (+57) 312 2538120</p>
        <p className="text-gray-700 text-md text-[16px] font-serif"><span className="font-bold text-black">{t('Email')}:</span> contact@redhatitsolutions.com</p>
      </div>
      <div className="flex-1">
        <img className="h-[650px] object-cover" alt="Contact Image" src={contact}/>
      </div>
    </section>
  )
}
