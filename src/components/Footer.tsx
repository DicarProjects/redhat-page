import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../assets/img/logo.png';

export const Footer = () => {

    const { t } = useTranslation();

    const date = new Date().getFullYear();

    return (
        <footer className="pt-5 relative z-30 bg-gray-600">

            <div className="flex flex-col container mx-auto xl:max-w-[1200px] z-50 relative py-10">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-white">                    
                    <div className="flex flex-col col-start-1 col-end-4">
                        <div className="flex flex-grow items-center basis-0">
                            <img className='w-56' src={logo} alt="Redhat Logo" loading="lazy"/>
                        </div>
                    </div>

                    <div className="text-white">
                        <h2 className="font-bold mb-5 col-start-5 col-end-7 text-lg">{t('Menu')}</h2>

                        <div>                    
                            <div className="col-start-5 col-end-7 flex items-center">
                                <a className="text-center text-sm pb-2" href="#about">{t('About us')}</a>
                            </div>
                            <div className="col-start-5 col-end-7 flex items-center">
                                <Link className="text-center text-sm pb-2" to='/services'>{t('Services')}</Link>
                            </div>
                            <div className="col-start-5 col-end-7 flex items-center">
                                <Link className="text-center text-sm pb-2" to='/capabilities'>{t('Capabilities')}</Link>
                            </div>
                            <div className="col-start-5 col-end-7 flex items-center">
                                <Link className="text-center text-sm pb-2" to='/contact'>{t('Contact')}</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold mb-5 col-start-8 col-end-10  text-lg">{t('Contact')}</h2>  

                        <div className="text-white">
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-1 row-end-2 text-left">
                                <i className="fa-solid fa-phone text-white text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-full">+57 3122538120</p>
                            </div>
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-2 row-end-3 text-left">
                                <i className="fa-solid fa-envelope text-white text-lg"></i>
                                <a className="text-xs col-start-6 col-end-12 w-full" href="mailto:contact@redhatitsolutions.com">contact@redhatitsolutions.com</a>
                            </div> 
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-3 row-end-4 text-left">
                                <i className="fa-solid fa-location-dot text-white text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-full">Calle 154 # 21 Sur Ibagué, Tolima</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="z-50 relative text-center text-lg p-5 flex flex-col md:flex-row justify-around items-center gap-2">
                <p className="text-white text-sm">&copy; Redhat {date}. {t('All rights reserved')}</p>
                <div className="flex gap-7">
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-1 row-end-2 text-center">
                        <p className="text-xs"><a href="https://www.facebook.com/redhat" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f text-white text-lg"></i></a></p>
                    </div>
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-2 row-end-3 text-center">
                        <p className="text-xs"><a href="https://api.whatsapp.com/send?phone=573122538120" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp text-white text-lg"></i></a></p>
                    </div>
                    
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-3 row-end-4 text-center">
                        <p className="text-xs"><a href="https://www.instagram.com/redhat/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram text-white text-lg"></i></a></p>
                    </div>
                </div>
            </div>


        </footer>
    )
}