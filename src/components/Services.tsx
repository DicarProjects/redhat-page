import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import about from '../assets/img/about1.png';
import 'aos/dist/aos.css';

export const Services = () => {

    const { t } = useTranslation();

    AOS.init();

    return (
        <section className="bg-gray-200 py-20">

            <div className="container mx-auto">

                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2"
                >
                    <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Check out services')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800" 
                    className="text-center text-gray-900 my-10 md:text-lg w-7/12 mx-auto"
                >{t('Agile development of digital solutions')}</p>
            
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-0">
                    
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] max-w-[350px] flex flex-col justify-evenly"
                    >
                        <img src={about} />
                        <h4 className="text-left font-bold">{t('Digital Marketing')}</h4>
                        <p className="text-sm">{t('Through advertising strategies we seek to promote your company digitally in such a way that you can analyze results in real time.')}</p>
                        <a className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" href="#">
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] max-w-[350px] flex flex-col justify-evenly"
                    >
                        <img src={about} />
                        <h4 className="text-left font-bold">{t('Digital Marketing')}</h4>
                        <p className="text-sm">{t('Through advertising strategies we seek to promote your company digitally in such a way that you can analyze results in real time.')}</p>
                        <a className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" href="#">
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] max-w-[350px] flex flex-col justify-evenly"
                    >
                        <img src={about} />
                        <h4 className="text-left font-bold">{t('Digital Marketing')}</h4>
                        <p className="text-sm">{t('Through advertising strategies we seek to promote your company digitally in such a way that you can analyze results in real time.')}</p>
                        <a className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" href="#">
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}