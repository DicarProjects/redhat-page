import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import useScreenSize from "../hooks/useScreenSize";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";

export const Experience = () => {

    const { t } = useTranslation();

    const { width } = useScreenSize();

    AOS.init();

    return (
        <section className="my-10 md:my-16">

            <div className="container mx-auto">

                <div 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" 
                    className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2"
                >
                    <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Experience')}</p>
                </div>

                <p 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800" 
                    className="text-center text-gray-900 my-10 md:text-lg w-7/12 mx-auto"
                >{t('Our expertise')}</p>

                <Swiper 
                    slidesPerView={width > 768 ? 4 : 1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="flex gap-5"
                >
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('Tech Mastery')}</h4>
                            <p className="text-sm mb-5 text-left">{t('We master cutting-edge technologies to bring your ideas to life.')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('Next-Gen Development')}</h4>
                            <p className="text-sm mb-5 text-left">{t('We explore and apply powerful frameworks on the market.')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('User-Centric Design')}</h4>
                            <p className="text-sm mb-5 text-left">{t('We place your users at the heart of everything we do.')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('Custom Solutions')}</h4>
                            <p className="text-sm mb-5 text-left">{t('We create tailor-made solutions to meet the unique needs of your business.')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('Seamless Integration')}</h4>
                            <p className="text-sm mb-5 text-left">{t('We make your systems work together seamlessly.')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000" 
                            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
                        >
                            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                                <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                            </div>
                            <h4 className="text-left font-bold -mb-5 text-sm">{t('Security First')}</h4>
                            <p className="text-sm mb-5 text-left">{t('Security is our primary design consideration.')}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>  

            </div>
        </section>
    )
}