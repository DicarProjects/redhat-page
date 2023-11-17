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
                    className="bg-red-500 rounded-lg w-6/12 mx-auto lg:w-2/12"
                >
                    <p
                        className="text-white p-2 text-sm font-bold text-center md:text-lg"
                    >{t('Capabilities')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"  
                    className="text-center my-9 font-bold text-lg md:text-3xl w-7/12 mx-auto" 
                >{t('Our expertise.')}</p>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-5">

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[240px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-red-200 h-16 w-16 rounded-full relative">
                            <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                        </div>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Design')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1100" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[240px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-red-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-gears text-red-600 text-5xl absolute top-2 left-7"></i>
                        </div>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Planning')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1200" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[240px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-red-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-code text-red-600 text-5xl absolute top-2 left-7"></i>
                        </div>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Implementation')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
                    </div>

                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1300" 
                        className="bg-white rounded-lg p-5 max-w-[280px] h-[240px] flex flex-col justify-between drop-shadow-md"
                    >
                        <div className="mx-5 bg-red-200 h-16 w-16 rounded-full relative">
                            <i className="fa-solid fa-toolbox text-red-600 text-5xl absolute top-2 left-10"></i>
                        </div>
                        <h4 className="mx-5 text-left font-bold mb-5">{t('Quality')}</h4>
                        <p className="mx-5 text-sm mb-5">{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}