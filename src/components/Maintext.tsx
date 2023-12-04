import { useTranslation } from "react-i18next";

export const Maintext = ({text}) => {

    const { t } = useTranslation();

    return (
        <section id="maintext" className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-16 p-5 md:p-0 md:my-20">
            <div 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700" 
                className="border-b-2 border-red-500 w-6/12 md:w-3/12 pb-2 mb-10"
            >
                <p className="text-black text-2xl md:text-3xl font-bold text-left">{t('About us')}</p>
            </div>
            <p className="text-md md:text-[16px]">{t(`${text}`)}</p>
        </section>
    )
}
