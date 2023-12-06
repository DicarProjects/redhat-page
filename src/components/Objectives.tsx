import { useTranslation } from "react-i18next";
import { Title } from "./Title";

export const Objectives = () => {
    const { t } = useTranslation();

    return (
        <section id="aboutus" className="flex flex-col md:flex-row gap-5 container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-16 p-5 md:p-0">
            <div className="flex-1">
                <Title text="Mission" center={false} />
                <p className="text-md md:text-[16px] font-serif">
                    {t('To provide innovative and personalized technological solutions that meet the specific needs of businesses, with the aim of enhancing their competitiveness and productivity.')}
                </p>
            </div>
            <div className="flex-1">
                <Title text="Vision" center={false} />
                <p className="text-md md:text-[16px] font-serif">
                    {t('To be leaders in software development by consistently offering cutting-edge technologies and customized solutions, driving the digital transformation of companies. Establish ourselves as strategic partners to enhance their competitiveness and productivity in an ever-evolving world.')}
                </p>
            </div>
        </section>
    );
};
