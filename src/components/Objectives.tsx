import { useTranslation } from "react-i18next";

export const Objectives = () => {
    const { t } = useTranslation();

    return (
        <section id="aboutus" className="flex flex-col md:flex-row gap-5 container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-16 p-5 md:p-0">
            <div className="flex-1">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="mb-10"
                >
                    <h2 className="border-b-2 border-red-500 w-6/12 md:w-3/12 pb-2 mb-2 font-bold text-xl md:text-3xl text-left">{t('Mission')}</h2>
                </div>
                <p className="text-md md:text-[16px] font-serif">
                    {t('To provide innovative and personalized technological solutions that meet the specific needs of businesses, with the aim of enhancing their competitiveness and productivity.')}
                </p>
            </div>
            <div className="flex-1">
                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="mb-10"
                >
                    <h2 className="border-b-2 border-red-500 w-6/12 md:w-3/12 pb-2 mb-2 font-bold text-xl md:text-3xl text-left">{t('Vision')}</h2>
                </div>

                <p className="text-md md:text-[16px] font-serif">
                    {t('To be leaders in software development by consistently offering cutting-edge technologies and customized solutions, driving the digital transformation of companies. Establish ourselves as strategic partners to enhance their competitiveness and productivity in an ever-evolving world.')}
                </p>
            </div>
        </section>
    );
};
