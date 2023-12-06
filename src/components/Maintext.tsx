import { useTranslation } from "react-i18next";
import { Title } from "./Title";
import aboutImage from '../assets/img/aboutus.jpg';

export const Maintext = ({text}) => {

    const { t } = useTranslation();

    return (
        <section id="maintext" className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-10 p-5 md:p-0 md:my-20">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col">
                    <Title text="About us" center={false}/>
                    <p className="text-md md:text-[16px] font-serif">{t(`${text}`)}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center relative overflow-hidden">
                    <img className="flex-1 md:w-6/12 cursor-pointer transition-transform transform hover:scale-110" src={aboutImage} alt="About Image" />
                </div>
            </div>
        </section>
    )
}
