import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../assets/img/Logo-White-Vertical-orientation.png';

export const Footer = () => {

    const { t } = useTranslation();

    const date = new Date().getFullYear();

    return (
        <footer className="pt-5 relative z-30 bg-gray-800">

            <div className="flex flex-col container mx-auto xl:max-w-[1200px] z-50 relative py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-white">
                    <div className="flex flex-col col-start-1 col-end-4">
                        <div className="flex flex-grow items-center basis-0">
                            <img className='w-56' src={logo} alt="Red Hat Logo" loading="lazy"/>
                        </div>
                    </div>

                    <div className="text-white">
                        <h2 className="font-bold mb-5 col-start-5 col-end-7 text-lg font-serif">{t('Menu')}</h2>
                        <div>
                        <div className="col-start-5 col-end-7 flex items-center">
                        <Link className="text-center text-sm pb-2 font-serif" to="/Home">
                            {t('Home')}
                        </Link>
                        </div>
                        <div className="col-start-5 col-end-7 flex items-center">
                        <Link className="text-center text-sm pb-2 font-serif" to="/aboutus">
                            {t('About us')}
                        </Link>
                        </div>
                        <div className="col-start-5 col-end-7 flex items-center">
                        <Link className="text-center text-sm pb-2 font-serif" to="/services">
                            {t('Services')}
                        </Link>
                        </div>
                        <div className="col-start-5 col-end-7 flex items-center">
                        <Link className="text-center text-sm pb-2 font-serif" to="/capabilities">
                            {t('Capabilities')}
                        </Link>
                        </div>
                        <div className="col-start-5 col-end-7 flex items-center">
                        <Link className="text-center text-sm pb-2 font-serif" to="/contact">
                            {t('Contact')}
                        </Link>
                        </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold mb-5 col-start-8 col-end-10 text-lg font-serif">{t('Contact')}</h2>  

                        <div className="text-white">
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-1 row-end-2 text-left">
                                <i className="fa-solid fa-phone text-white text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-full" font-serif>(+57) 3122538120</p>
                            </div>
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-2 row-end-3 text-left">
                                <i className="fa-solid fa-envelope text-white text-lg"></i>
                                <a className="text-xs col-start-6 col-end-12 w-full font-serif" href="mailto:contact@redhatitsolutions.com">contact@redhatitsolutions.com</a>
                            </div>
                            <div className="flex items-center justify-between gap-5 col-start-8 col-end-10 row-start-3 row-end-4 text-left">
                                <i className="fa-solid fa-location-dot text-white text-lg"></i>
                                <p className="text-xs col-start-6 col-end-12 w-full font-serif">{t('154th Street #21 South 22 Ibagué-Tolima')}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="z-50 relative text-center text-lg p-5 flex flex-col md:flex-row justify-around items-center gap-2">
                <p className="text-white text-sm font-serif">&copy; Red Hat It Solutions {date}. {t('All rights reserved')}</p>
                <div className="flex gap-7">
                <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-1 row-end-2 text-center">
                    <p className="text-xs font-serif">
                        <a href="#" target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                        <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                        </a>
                    </p>
                    </div>

                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-2 row-end-3 text-center">
                    <p className="text-xs font-serif">
                        <a href="#" target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                        <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                        </a>
                    </p>
                    </div>

                    <div className="flex items-center justify-evenly gap-5 col-start-11 col-end-13 row-start-3 row-end-4 text-center">
                    <p className="text-xs font-serif">
                        <a href="#" target="_blank" rel="noreferrer" onClick={(e) => e.preventDefault()}>
                        <i className="fa-brands fa-instagram text-white text-lg"></i>
                        </a>
                    </p>
                    </div>
                </div>
            </div>
    </footer>
    )
}