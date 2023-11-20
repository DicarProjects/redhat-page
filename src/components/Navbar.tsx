import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo.png';
import useScreenSize from '../hooks/useScreenSize';

export const Navbar = () => {

    const { width } = useScreenSize();

    const { i18n, t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isHome, setIsHome] = useState(true);

    const handleLanguageSelect = (language: any) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    const handleClickMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    useEffect(() => {
        const url = window.location.href;
        if (url.includes("/services") || url.includes("/contactus")) {
            setIsHome(!isHome);
        }
    }, [window.location.href]);

    return (
        <>
            { width > 768 ? (
                <>
                    <Link to="/" className="flex flex-grow items-center basis-0 container mx-auto justify-center md:justify-start cursor-pointer">
                      <img className="w-32 mr-5" src={logo} alt="Redhat logo" loading="lazy" />
                    </Link>

                    <nav className="hidden md:block">
                      <ul className={`flex flex-col md:flex-row text-sm [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 font-bold lg:text-lg`}>
                        <li><Link to='/aboutus'>{t('About us')}</Link></li>
                        <li><Link to='/services'>{t('Services')}</Link></li>
                        {isHome ? <li><a href="#customers">{t('Customers')}</a></li> :  <li><Link to='/'>{t('Customers')}</Link></li>}
                        <li><Link to='/contact'>{t('Contact us')}</Link></li>
                      </ul>
                    </nav>

                    <nav className="hidden md:flex flex-grow basis-0 justify-end">
                      <ul className={`flex text-sm [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2`}>
                        <li>
                            <Link to="#" onClick={() => setIsOpen(!isOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" fill={'white'} />
                                </svg>
                            </Link>

                            {isOpen && (
                                <div className="absolute z-50  md:-right-4 bg-white shadow-lg rounded w-2/12 xl:w-1/12">
                                    <ul className="py-2">
                                        <li>
                                          <button
                                              onClick={() => handleLanguageSelect('en')}
                                              className="block w-full px-4 py-2 text-gray-500 hover:bg-gray-200"
                                          >
                                              English
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                              onClick={() => handleLanguageSelect('es')}
                                              className="block w-full px-4 py-2 text-gray-500 hover:bg-gray-200"
                                          >
                                              Spanish
                                          </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                      </ul>
                    </nav>
                </>

            ) : (
                <div className="flex flex-grow items-center basis-0 container mx-auto justify-center md:justify-start cursor-pointer" onClick={() => setIsActiveMenu(!isActiveMenu)}>
                  <img className="w-20 mr-5" src={logo} alt="Redhat Logo" loading="lazy" />
                </div>
            )} 

            <div className={`fixed top-0 left-0 w-60 h-full bg-white pt-5 transform transition-transform ease-in-out ${isActiveMenu ? 'translate-x-0' : '-translate-x-60'} z-[100] flex flex-col`} style={{zIndex: 9999}}>
                <button className="toggle-button" onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    <i 
                      className="fa-solid fa-xmark rounded-md text-red-500 cursor-pointer text-xl "
                      onClick={() =>  handleClickMenu() }
                    ></i>
                </button>
                <div className="pt-10 flex flex-col text-left">
                    {isHome ? <a className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100" href="#about">{t('About us')}</a> : <Link to="/" className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100">{t('About us')}</Link>}
                    <Link to="/services" className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100">{t('Services')}</Link>
                    {isHome ? <a className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100" href="#customers">{t('Customers')}</a> : <Link to="/" className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100">{t('Customers')}</Link>}
                    <Link to="/contactus" className="text-gray-500 hover:text-gray-600 cursor-pointer p-3 border-y-2 border-gray-100">{t('Contact us')}</Link>
                    <div className="text-gray-500 hover:text-gray-600 cursor-pointer flex  gap-3 mx-auto w-full p-3 border-y-2 border-gray-100" onClick={() => handleLanguageSelect(i18n.language === 'en' ? 'es' : 'en' )}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" fill={'#d4d4d4'} />
                        </svg>
                        {i18n.language === 'en' ? 'Español' : 'Inglés' }
                    </div>
                </div>
            </div>

        </>
    )
}