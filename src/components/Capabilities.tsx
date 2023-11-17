import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Capabilities = () => {

    const { t } = useTranslation();

    AOS.init();

    return (
        <section className="my-10 md:my-16">

            <div className="container mx-auto">

                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="bg-cyan-200 rounded-full w-6/12 mx-auto lg:w-2/12"
                >
                    <p
                        className="text-cyan-500 p-2 text-sm font-bold text-center md:text-lg"
                    >{t('How we works')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"  
                    className="text-center my-9 font-bold text-lg md:text-3xl w-7/12 mx-auto" 
                >{t('At Bugitech, we follow the Scrum methodology to ensure an efficient and effective process in every project.')}</p>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-5">

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[290px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-cyan-200 h-16 w-16 rounded-full relative">
                            <i className="fa-regular fa-file-lines text-cyan-600 text-5xl absolute top-2 left-9"></i>
                        </div>
                        <span className="mx-5 text-left text-cyan-500 font-bold my-3">{t('Step')} 01</span>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Requirements')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('We conduct thorough research to understand your specific needs and requirements.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1100" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[290px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-cyan-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-gears text-cyan-600 text-5xl absolute top-2 left-7"></i>
                        </div>
                        <span className="mx-5 text-left text-cyan-500 font-bold my-3">{t('Step')} 02</span>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Planning')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('We carefully plan each stage of the project, setting clear and defined objectives.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1200" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[290px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-cyan-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-code text-cyan-600 text-5xl absolute top-2 left-7"></i>
                        </div>
                        <span className="mx-5 text-left text-cyan-500 font-bold my-3">{t('Step')} 03</span>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Implementation')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('We develop customized solutions using cutting-edge technologies and practices.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1300" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[290px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-cyan-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-toolbox text-cyan-600 text-5xl absolute top-2 left-10"></i>
                        </div>
                        <span className="mx-5 text-left text-cyan-500 font-bold my-3">{t('Step')} 04</span>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Maintenance')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('We provide continuous support and perform updates to ensure optimal functionality of the implemented solutions.')}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}