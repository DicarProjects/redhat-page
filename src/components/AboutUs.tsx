import { useTranslation } from 'react-i18next';
import { Title } from './Title';
import about from '../assets/img/about1.png';

export const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="flex flex-col md:flex-row-reverse gap-10 container mx-auto p-5 md:p-0 md:max-w-[700px] xl:max-w-[1200px] pt-10 md:py-20">
            <div className="flex flex-col md:pt-10">
                <Title text="About us" center={false}/>
                <p className="text-md text-[16px] font-serif">{t('Red Hat IT Solutions is your technological partner for success. As a software development company, we specialize in providing innovative and customized solutions that drive the growth of our clients. With a highly trained and committed team, we are ready to tackle any challenge and help you achieve your professionals goals.')}</p>
            </div>

            <div>
                <img className="w-[1000px] lg:w-[1400px] h-[450px] rounded-lg object-cover object-center cursor-pointer" src={about} alt="Hero Image" loading="lazy"/>
            </div>
        </section>
    )
}
