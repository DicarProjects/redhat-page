import { useTranslation } from 'react-i18next';
import about from '../assets/img/about1.png';

export const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="flex flex-col md:flex-row gap-10 container mx-auto p-5 md:p-0 md:max-w-[700px] xl:max-w-[1200px] pt-10 md:py-20">
            <div className="flex flex-col justify-center">
                <h2 className="mb-10 text-2xl font-bold">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque aliquid libero blanditiis eaque, consectetur ad maxime quae. Veritatis pariatur qui quo nulla aperiam numquam, inventore blanditiis quibusdam? Commodi, accusamus. Id!</p>
                <a className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-3 w-6/12 mx-auto md:mx-0 lg:w-3/12 md:mt-8" href="#about">
                    {t('Read more')}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div>
                <img className="w-screen object-cover h-full object-center cursor-pointer" src={about} alt="Hero Image" loading="lazy"/>
            </div>
            
        </section>
    )
}
