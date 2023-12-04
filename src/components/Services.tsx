import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import mobile from '../assets/img/mobile.jpg';
import web from '../assets/img/dev.jpg';
import custom from '../assets/img/custom.jpg';
import integration from '../assets/img/integration.jpg';
import ecommerce from '../assets/img/ecommerce.jpg';
import consulting from '../assets/img/consulting.jpg';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export const Services = () => {

    const { t } = useTranslation();

    AOS.init();

    return (
        <section className="bg-gray-200 py-20">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px]">

                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2"
                >
                    <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Check our services')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800" 
                    className="text-center text-gray-900 my-10 md:text-lg w-7/12 mx-auto"
                >{t('Agile development of digital solutions')}</p>
            
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-3 lg:gap-7">
                    
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={mobile} />
                        <h4 className="text-left font-bold capitalize">{t('Mobile app development')}</h4>
                        <p className="text-sm">{t('Boost your digital presence with our custom mobile apps for iOS and Android, designed for maximum usability and performance.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={web} />
                        <h4 className="text-left font-bold capitalize">{t('Web app development')}</h4>
                        <p className="text-sm">{t('Build your online presence with our robust and scalable web apps designed to meet the unique needs of your business.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={custom} />
                        <h4 className="text-left font-bold capitalize">{t('Custom software development')}</h4>
                        <p className="text-sm">{t('Optimize your business processes with our custom software, created to meet your unique requirements.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={integration} />
                        <h4 className="text-left font-bold capitalize">{t('Systems Integration')}</h4>
                        <p className="text-sm">{t('Improve efficiency and communication in your company with our expert systems integration.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={ecommerce} />
                        <h4 className="text-left font-bold capitalize">{t('Ecommerce development')}</h4>
                        <p className="text-sm">{t('Expand your business with our online stores and e-commerce platforms designed for digital success.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear" 
                        data-aos-duration="1000" 
                        className="bg-white rounded-lg mx-10 py-5 px-10 h-[500px] md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-evenly"
                    >
                        <img alt="Service Image" src={consulting} />
                        <h4 className="text-left font-bold capitalize">{t('Technology consulting')}</h4>
                        <p className="text-sm">{t('Optimize your business operations with our expert technology consulting.')}</p>
                        <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12" to='/services'>
                            {t('Read more')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}