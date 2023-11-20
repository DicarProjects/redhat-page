import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ValueItem } from "./ValueItem";

export const Values = () => {

    const { t } = useTranslation();

    AOS.init();

    return (

        <section className="bg-gray-200 py-10">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-10 md:my-5">
                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2 mb-10"
                >
                    <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Our values')}</p>
                </div>

                <div className="flex flex-col md:flex-row items-center  gap-10">
                    <ValueItem iconTitle="Customer first" iconPara="Lorem ipsum dolor sit amet consectetur. Arcu dui vitae non fermentum">
                        <i className="fa-regular fa-user"></i>
                    </ValueItem>
                    <ValueItem iconTitle="Urgency and focus" iconPara="Lorem ipsum dolor sit amet consectetur. Arcu dui vitae non fermentum">
                        <i className="fa-regular fa-clock"></i>
                    </ValueItem>
                    <ValueItem iconTitle="Great design is not a luxury" iconPara="Lorem ipsum dolor sit amet consectetur. Arcu dui vitae non fermentum">
                        <i className="fa-regular fa-image"></i>
                    </ValueItem>
                    <ValueItem iconTitle="Team work" iconPara="Lorem ipsum dolor sit amet consectetur. Arcu dui vitae non fermentum">
                        <i className="fa-solid fa-people-group"></i>
                    </ValueItem>
                </div>
            </div>

        </section>
    )
}
