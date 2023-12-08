import { useTranslation } from 'react-i18next';
import bg from '../assets/img/bg.jpg';
import { Link } from 'react-router-dom';

interface headerProps { 
    title: string,
    subtitle?: string,
    heightBanner: string
}

export const Header = ({title, subtitle, heightBanner}:headerProps) => {

    const { t } = useTranslation();

    return (
        <header className={`bg-black h-[400px] md:h-[580px] text-center relative z-30`}>

            <div className="z-40 relative flex flex-col items-center justify-center container mx-auto h-full lg:h-[580px]">
                <div className="flex flex-col items md:flex-row justify-evenly">
                    <div className='flex flex-col gap-7 lg:w-8/12 md:m-7 lg:m-0 animate__animated animate__fadeInRight'>
                        <h2 className="text-white text-2xl lg:text-[40px] font-bold md:leading-[3rem] text-center md:text-center md:pt-12 lg:pt-6 capitalize">{t(`${title}`)}</h2>
                        {subtitle && (
                            <p className="text-white text-sm md:text-lg text-center md:text-center font-serif p-5 md:p-0">{t(`${subtitle}`)}</p>
                        )}
                        <Link to="/contact#form" className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-3 w-6/12 mx-auto block md:mt-8 max-w-[150px] font-serif">
                        {t('Contact Us')}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 opacity-60 absolute top-0 bottom-0 h-full isVisibleModal && z-30">
                <img className="w-screen object-cover h-full object-center" src={bg} alt="Hero Image" loading="lazy"/>
            </div>
        </header>
    )
}