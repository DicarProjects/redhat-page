import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoWhite from '../assets/img/logo-white.png';

export const Footer = () => {

    const { t } = useTranslation();

    const date = new Date().getFullYear();

    return (
        <footer className="pt-5 relative z-30 bg-gray-600">
            <div className="z-50 relative flex flex-col md:flex-row justify-center items-center text-white md:hidden">
                <div className="container mx-auto max-w-[1200px] md:flex md:items-center md:justify-center">
                    <div className="text-center">
                        <div className="flex flex-grow items-center basis-0 justify-center">
                            <img className='w-10 mr-1' src={logoWhite} alt="Redhat Logo" loading="lazy"/>
                            <p className="text-white lg:text-lg">Redhat</p>
                        </div>
                        <p className="w-10/12 mx-auto text-xs mt-3 leading-4">{t('With Redhat, harness the power of technology to drive your business success.')}</p>
                    </div>

                    <div className="text-center">
                        <nav className="my-10 md:my-0 flex flex-col gap-2 justify-center">
                            <h2 className="font-bold text-sm mb-3 md:mb-0">{t('Sites')}</h2>
                            <ul className="text-xs flex flex-col gap-5 ">
                                <li><a href="#about">{t('About us')}</a></li>
                                <li><Link to='/services'>{t('Services')}</Link></li>
                                <li><Link to='/contact'>{t('Contact')}</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-1 my-10 md:my-0">
                        <h2 className="font-bold text-sm col-span-12 text-center mb-3 md:mb-0">{t('Information')}</h2>
                        <div className="flex flex-col gap-1">
                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-solid fa-phone text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12">+57 3016079706</p>
                            </div>

                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-solid fa-envelope text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12">gerencia@redhat.com.co</p>
                            </div> 

                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-solid fa-location-dot text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-9/12">Calle 18 # 50 c 40 Neiva Huila</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-sm col-span-12 text-center mb-3 md:mb-0">{t('Social')}</h2>
                        <div className="flex flex-col gap-3 md:gap-0">
                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-brands fa-facebook-f text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-9/12"><a href="https://www.facebook.com/Redhat" target="_blank" rel="noreferrer">Facebook Redhat</a></p>
                            </div>

                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-brands fa-whatsapp text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12"><a href="https://api.whatsapp.com/send?phone=573016079706" target="_blank" rel="noreferrer">Whatsapp Redhat</a></p>
                            </div> 

                            <div className="grid grid-cols-12 gap-2 justify items-center justify-center">
                                <i className="fa-brands fa-instagram text-red-400 col-start-4 col-end-5 text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12"><a href="https://www.instagram.com/Redhats.a.s/" target="_blank" rel="noreferrer">Instagram Redhat</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block container mx-auto xl:max-w-[1200px] z-50 relative py-10">
                
                <div className="grid grid-cols-12 text-white">                    
                    <div className="flex flex-col col-start-1 col-end-4">
                        <div className="flex flex-grow items-center basis-0">
                            <img className='w-10 mr-1' src={logoWhite} alt="Redhat Logo" loading="lazy"/>
                            <p className="text-white lg:text-xl">Redhat</p>
                        </div>
                    </div>
                    <h2 className="font-bold  mb-3 md:mb-0 col-start-5 col-end-7 text-center self-center text-lg">{t('Sites')}</h2>
                    <h2 className="font-bold  mb-3 md:mb-0 col-start-8 col-end-10 text-center self-center text-lg">{t('Information')}</h2>
                    <h2 className="font-bold  mb-3 md:mb-0 col-start-11 col-end-13 text-center self-center text-lg">{t('Social')}</h2>
                </div>

                <div className="grid grid-cols-12 grid-rows-3 text-white">                    
                    <div className="col-start-1 col-end-4 row-start-2 row-end-3">
                        <p className="text-sm leading-4">{t('With Redhat, harness the power of technology to drive your business success.')}</p>
                    </div>
                    <div className="col-start-5 col-end-7 flex items-center justify-center">
                         <a className="text-center text-sm" href="#about">{t('About us')}</a>
                    </div>
                    <div className="col-start-5 col-end-7 flex items-center justify-center">
                        <Link className="text-center text-sm" to='/services'>{t('Services')}</Link>
                    </div>
                    <div className="col-start-5 col-end-7 flex items-center justify-center">
                    <Link className="text-center text-sm" to='/contact'>{t('Contact')}</Link>
                    </div>
                    <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-1 row-end-2 text-center">
                        <i className="fa-solid fa-phone text-red-400 text-lg"></i>
                        <p className="text-xs col-start-6 col-end-12">+57 300000000</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-2 row-end-3 text-center">
                        <i className="fa-solid fa-envelope text-red-400 text-lg"></i>
                        <p className="text-xs col-start-6 col-end-12">gerencia@redhat.com.co</p>
                    </div> 
                    <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-3 row-end-4 text-center">
                        <i className="fa-solid fa-location-dot text-red-400 text-lg"></i>
                        <p className="text-xs col-start-6 col-end-12">Calle XX # XX Ibagué, Tolima</p>
                    </div>
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-1 row-end-2 text-center">
                        <i className="fa-brands fa-facebook-f text-red-400 text-lg"></i>
                        <p className="text-xs"><a href="https://www.facebook.com/Redhat" target="_blank" rel="noreferrer">Redhat</a></p>
                    </div>
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-2 row-end-3 text-center">
                        <i className="fa-brands fa-whatsapp text-red-400 text-lg"></i>
                        <p className="text-xs"><a href="https://api.whatsapp.com/send?phone=573016079706" target="_blank" rel="noreferrer">Redhat</a></p>
                    </div>
                    
                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-3 row-end-4 text-center">
                        <i className="fa-brands fa-instagram text-red-400 text-lg"></i>
                        <p className="text-xs"><a href="https://www.instagram.com/Redhats.a.s/" target="_blank" rel="noreferrer">Redhat</a></p>
                    </div>
                </div>

            </div>

            <div className="z-50 relative text-center text-lg p-5">
                <p className="text-white text-sm">&copy; Redhat {date}. {t('All rights reserved')}</p>
            </div>


        </footer>
    )
}