import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import useScreenSize from '../hooks/useScreenSize';
import bg from '../assets/img/bg.jpg';

interface headerProps { 
    title: string,
    subtitle?: string,
    heightBanner: string
}

export const Header = ({title, subtitle, heightBanner}:headerProps) => {

    const { width } = useScreenSize();

    const [isVisibleModal, setIsVisibleModal] = useState<boolean>();

    const { t } = useTranslation();

    const textColor = 'text-white';

    const onClickMenu = () => {
        if (width < 768) {
            setIsVisibleModal(!isVisibleModal);
        }
    }
    
    return (
        <header className={`bg-black h-[400px] md:h-[${heightBanner}px] text-center relative z-30`}>

            <div className={`z-50 relative flex flex-col md:flex-row justify-center items-center align container mx-auto py-5 md:max-w-[700px] xl:max-w-[1200px] ${textColor}`} onClick={onClickMenu}>
                <Navbar/>
            </div>

            <div className="z-40 relative flex flex-col container mx-auto md:pt-5">
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div className='flex flex-col md:pt-5 px-5 gap-7 lg:w-8/12 md:m-7 lg:m-0 animate__animated animate__fadeInRight'>                            
                        <h2 className="text-white text-2xl lg:text-[40px] font-bold md:leading-[3rem] text-center md:text-center md:pt-12 lg:pt-6">{t(`${title}`)}</h2>
                        {subtitle && (
                            <p className="text-white text-sm md:text-lg text-center md:text-center">{t(`${subtitle}`)}</p>
                        )}
                        <a className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-3 w-6/12 mx-auto block md:mt-8 md:w-3/12" href="#about">
                            {t('Get information')}
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                    </div>   
                </div> 
            </div>

            <div className="bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 opacity-60 absolute top-0 bottom-0 h-full isVisibleModal && z-30">
                <img className="w-screen object-cover h-full object-center" src={bg} alt="Hero Image" loading="lazy"/>
            </div>
        </header>
    )
}