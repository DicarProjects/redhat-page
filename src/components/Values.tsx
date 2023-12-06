import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ValueItem } from "./ValueItem";
import { Title } from "./Title";

export const Values = () => {

    const { t } = useTranslation();

    AOS.init();

    return (

        <section className="bg-gray-200 py-20">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-10">
                <Title text="Our values" center={true}/> 

                <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 justify-center items-center gap-5 pt-20">
                    <ValueItem
                        iconTitle={t('Innovation')}
                        iconPara={t('Involves the ability to think creatively and generate unique solutions for existing challenges.')}
                    >
                        <i className="fa-solid fa-lightbulb"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Integrity and ethics')}
                        iconPara={t('Valuing continuous improvement involves seeking more efficient and effective ways of doing things.')}
                    >
                        <i className="fa-solid fa-check-double"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Diversity and inclusion')}
                        iconPara={t('Promoting a diverse and inclusive work environment, recognizing the importance of respect for creativity and long-term success.')}
                    >
                        <i className="fa-solid fa-people-group"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Flexibility and adaptability')}
                        iconPara={t('The ability to quickly adapt to changes in the business environment. Flexibility and organizational agility are increasingly important.')}
                    >
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Customer orientation')}
                        iconPara={t('Placing the customer at the center of decisions and actions, key to long-term success.')}
                    >
                        <i className="fa-solid fa-users-viewfinder"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Colaboration and teamwork')}
                        iconPara={t('Fostering open and effective communication. Valuing collaboration involves expressing ideas clearly, actively listening, and sharing information to keep the team informed.')}
                    >
                        <i className="fa-solid fa-people-carry-box"></i>
                    </ValueItem>
                </div>
            </div>

        </section>
    )
}
