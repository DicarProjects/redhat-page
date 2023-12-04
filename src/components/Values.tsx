import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ValueItem } from "./ValueItem";

export const Values = () => {

    const { t } = useTranslation();

    AOS.init();

    return (

        <section className="bg-gray-200 py-20">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-20 md:my-32">
                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2 mb-10"
                >
                    <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Our values')}</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <ValueItem 
                        iconTitle={t('Innovation')} 
                        iconPara={t('Involves the ability to think creatively and generate unique solutions for existing challenges.')}
                    >
                        <i className="fa-solid fa-gear"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Integrity and ethics')} 
                        iconPara={t('Valuing continuous improvement involves seeking more efficient and effective ways of doing things.')}
                    >
                        <i className="fa-solid fa-hand"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Diversity and inclusion')} 
                        iconPara={t('Promoting a diverse and inclusive work environment, recognizing the importance of respect for creativity and long-term success.')}
                    >
                        <i className="fa-solid fa-person"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Flexibility and adaptability')} 
                        iconPara={t('The ability to quickly adapt to changes in the business environment. Flexibility and organizational agility are increasingly important.')}
                    >
                        <i className="fa-solid fa-arrows-left-right-to-line"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Customer orientation')} 
                        iconPara={t('Placing the customer at the center of decisions and actions, key to long-term success.')}
                    >
                        <i className="fa-solid fa-user-group"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Colaboration and teamwork')} 
                        iconPara={t('Fostering open and effective communication. Valuing collaboration involves expressing ideas clearly, actively listening, and sharing information to keep the team informed.')}
                    >
                        <i className="fa-solid fa-people-group"></i>
                    </ValueItem>
                </div>
            </div>

        </section>
    )
}
