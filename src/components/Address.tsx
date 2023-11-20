import { useTranslation } from "react-i18next";
import contact from "../assets/img/contact.jpg";

export const Address = () => {

  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row container mx-auto md:max-w-[700px] xl:max-w-[1200px] mt-10">
      <div className="flex flex-col flex-1 items-start gap-5 m-10 md:m-0 md:mt-10">
        <h2 className="mb-10 text-2xl font-bold">{t('LATAM')}</h2>
        <p className="text-gray-400"><span className="font-bold text-black">{t('Direction')}:</span> Calle 154 # 21 Sur Ibagué, Tolima</p>
        <p className="text-gray-400"><span className="font-bold text-black">{t('Phone')}:</span> +57 300000000</p>
        <p className="text-gray-400"><span className="font-bold text-black">{t('Email')}:</span> gerencia@redhat.com.co</p>
      </div>
      <div className="flex-1">
        <img className="" alt="Contact Image" src={contact}/>
      </div>
    </section>
  )
}
