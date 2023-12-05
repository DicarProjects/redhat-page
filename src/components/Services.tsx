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
import { ServiceItem } from './ServiceItem';

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
                    <p className="text-black text-2xl md:text-3xl font-mono font-bold text-center">{t('Check our services')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800" 
                    className="text-center text-gray-900 my-10 md:text-lg w-7/12 mx-auto font-serif"
                >{t('Agile development of digital solutions')}</p>
            
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-3 lg:gap-7">

                    <ServiceItem title='Mobile app development' textService='Boost your digital presence with our custom mobile apps for iOS and Android, designed for maximum usability and performance.'>
                        <img alt="Service Image" src={mobile} />
                    </ServiceItem>

                    <ServiceItem title='Web app development' textService='Build your online presence with our robust and scalable web apps designed to meet the unique needs of your business.'>
                        <img alt="Service Image" src={web} />
                    </ServiceItem>

                    <ServiceItem title='Custom software development' textService='Optimize your business processes with our custom software, created to meet your unique requirements.'>
                        <img alt="Service Image" src={custom} />
                    </ServiceItem>

                    <ServiceItem title='Systems Integration' textService='Improve efficiency and communication in your company with our expert systems integration.'>
                        <img alt="Service Image" src={integration} />
                    </ServiceItem>

                    <ServiceItem title='Ecommerce development' textService='Expand your business with our online stores and e-commerce platforms designed for digital success.'>
                        <img alt="Service Image" src={ecommerce} />
                    </ServiceItem>

                    <ServiceItem title='Technology consulting' textService='Optimize your business operations with our expert technology consulting.'>
                        <img alt="Service Image" src={consulting} />
                    </ServiceItem>
                    
                </div>

            </div>
        </section>
    )
}