import { useTranslation } from 'react-i18next';
import about from '../assets/img/about1.png';

export const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="flex flex-col md:flex-row gap-10 container mx-auto p-5 md:p-0 md:max-w-[700px] xl:max-w-[1200px] pt-10 md:py-20">
            <div className="flex flex-col justify-center">
                <h2 className="mb-10 text-2xl font-bold capitalize">{t('About us')}</h2>
                <p className="text-md text-[16px]">{t('RedHat IT Solutions SAS is your technological partner for success. As a software development company, we specialize in providing innovative and customized solutions that drive the growth of our clients. With a highly trained and committed team, we are ready to tackle any challenge and help you achieve your professionals goals.')}</p>
            </div>

            <div>
                <img className="w-[1000px] object-cover h-full object-center cursor-pointer" src={about} alt="Hero Image" loading="lazy"/>
            </div>
            
        </section>
    )
}
