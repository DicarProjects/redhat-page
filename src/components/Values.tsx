import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ValueItem } from "./ValueItem";
import { Title } from "./Title";

export const Values = () => {

    const { t } = useTranslation();

    AOS.init();

    return (

        <section className="bg-gray-200 py-10 md:py-20 px-5">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-10">
                <Title text="Our values" center={true}/> 

                <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 justify-center items-center gap-5 pt-20">
                    <ValueItem
                        iconTitle={t('Innovation')}
                        iconPara={t('Think creatively and generate unique solutions for existing challenges.')}
                    >
                        <i className="fa-solid fa-lightbulb"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Integrity and ethics')}
                        iconPara={t('Value continuous improvement and seek more efficient and effective ways.')}
                    >
                        <i className="fa-solid fa-check-double"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Diversity and inclusion')}
                        iconPara={t('Promote a respectful and diverse environment to drive ongoing success.')}
                    >
                        <i className="fa-solid fa-people-group"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Flexibility and adaptability')}
                        iconPara={t('Quickly adapt to business changes with agility.')}
                    >
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </ValueItem>
                    <ValueItem
                        iconTitle={t('Customer orientation')}
                        iconPara={t('Place the customer at the center of decisions and actions, crucial for sustainable success.')}
                    >
                        <i className="fa-solid fa-users-viewfinder"></i>
                    </ValueItem>
                    <ValueItem 
                        iconTitle={t('Effective Collaboration')}
                        iconPara={t('Cultivate a diverse environment to enhance success through clear communication and sustainable teamwork.')}
                    >
                        <i className="fa-solid fa-people-carry-box"></i>
                    </ValueItem>
                </div>
            </div>

        </section>
    )
}
