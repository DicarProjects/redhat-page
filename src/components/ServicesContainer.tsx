import { useTranslation } from "react-i18next";
import { Card } from "./Card";
import mobile from '../assets/img/mobile.jpg';
import web from '../assets/img/dev.jpg';
import custom from '../assets/img/custom.jpg';
import integration from '../assets/img/integration.jpg';
import ecommerce from '../assets/img/ecommerce.jpg';
import consulting from '../assets/img/consulting.jpg';

export const ServicesContainer = () => {
    
    const { t } = useTranslation();

    return (
        <section className="flex flex-col md:flex-row">
            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-20 md:my-32">
                <div 
                    className="border-b-2 border-red-500 w-6/12 mx-auto text-center pb-2 mb-10"
                >
                    <h2 className="font-bold text-xl md:text-3xl mb-5">{t('Check our services')}</h2>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
                    <Card height={'500'} titleCard={t('Mobile app development')} textCard={t('At REDHAT IT SOLUTIONS SAS, we take mobile app development to the next level. Our team of experts not only focuses on creating custom apps for iOS and Android but also delves into user experience, security, and performance. From internal apps to market-bound products, we are committed to delivering solutions that not only meet but exceed your expectations.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={mobile} />
                    </Card>
                    <Card height={'500'} titleCard={t('Web app development')} textCard={t('At REDHAT IT SOLUTIONS SAS, we excel in creating outstanding web applications. Our development team works closely with you to understand your business goals and create tailored web solutions. Utilizing the latest technologies, we ensure web applications that not only function well but also provide an exceptional user experience, optimizing your customers interaction with your brand.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={web} />
                    </Card>
                    <Card height={'500'} titleCard={t('Custom software development')} textCard={t('We believe in the uniqueness of every business. Our custom software development services are designed to provide solutions that align perfectly with your unique business processes. We work closely with you to understand your needs and provide solutions that drive efficiency and productivity in your company.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={custom} />
                    </Card>
                    <Card height={'500'} titleCard={t('Systems Integration')} textCard={t('We offer comprehensive systems integration services to break down barriers and enhance collaboration in your company. Our team of professionals connects and synchronizes different systems and platforms, facilitating data flow and improving operational efficiency. We are dedicated to delivering seamless integration that will boost agility and performance in your company.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={integration} />
                    </Card>
                    <Card height={'500'} titleCard={t('Ecommerce development')} textCard={t('We understand the importance of e-commerce in the digital era. From creating online stores to developing custom e-commerce platforms, our team works to boost your operations and maximize your presence in the online market. We are committed to delivering solutions that not only power your online sales but also enhance the customer experience.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={ecommerce} />
                    </Card>
                    <Card height={'500'} titleCard={t('Technology consulting')} textCard={t('We offer technology consulting services to assess and enhance your business operations. Our team of expert consultants works with you to identify optimization opportunities and recommend strategic solutions. We focus on driving innovation and efficiency in your company, helping you maintain a competitive edge in an ever-evolving technological landscape.')}> 
                        <img className="cursor-pointer" alt="Service Image" src={consulting} />
                    </Card>
                </div>
            </div>
        </section>
    )
}
