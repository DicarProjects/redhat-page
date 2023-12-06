import { useTranslation } from "react-i18next";
import { Title } from "./Title";
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

                <Title text='Check our services' center={true} />

                <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={mobile} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Mobile app development')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Taking mobile application development to the next level, our team of experts not only focuses on creating custom applications for iOS and Android but also delves into user experience, security, and performance. From internal applications to market-targeted products, our commitment is to deliver solutions that not only meet but exceed your expectations.')}</p>
                    </div>

                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={web} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Web app development')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Excelling in the creation of exceptional web applications, our team of developers collaborates closely with you to understand your business goals and craft tailored web solutions. Utilizing the latest technologies, we ensure web applications that not only perform well but also provide an exceptional user experience, optimizing your customers interaction with your brand.')}</p>
                    </div>

                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={custom} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Custom software development')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Believing in the uniqueness of every business, our custom software development services are designed to provide solutions that align perfectly with your unique business processes. We work closely with you to understand your needs and provide solutions that drive efficiency and productivity in your company.')}</p>
                    </div>

                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={integration} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Systems Integration')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Offering comprehensive systems integration services to break down barriers and enhance collaboration in your company, our team of professionals connects and synchronizes different systems and platforms, facilitating data flow and improving operational efficiency. We are dedicated to delivering seamless integration that will boost agility and performance in your company.')}</p>
                    </div>

                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={ecommerce} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Ecommerce development')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Understanding the importance of e-commerce in the digital era, from creating online stores to developing custom e-commerce platforms, our team works to boost your operations and maximize your presence in the online market. Our commitment is to deliver solutions that not only power your online sales but also enhance the customer experience.')}</p>
                    </div>

                    <div className="bg-white flex flex-col drop-shadow-md rounded transition-transform transform hover:-translate-y-2 cursor-pointer">
                        <div className="relative">
                            <img className="cursor-pointer" alt="Service Image" src={consulting} />

                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-4 w-full h-full flex justify-center items-center">
                                    {t('Technology consulting')}
                                </p>
                            </div>
                        </div>
                        <p className="my-5 text-md text-[16px] font-serif p-5">{t('Offering technology consulting services to assess and enhance your business operations, our team of expert consultants works with you to identify optimization opportunities and recommend strategic solutions. Focusing on driving innovation and efficiency in your company, we help you maintain a competitive edge in an ever-evolving technological landscape.')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
