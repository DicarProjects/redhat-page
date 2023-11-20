import { Swiper, SwiperSlide } from "swiper/react";
import useScreenSize from "../hooks/useScreenSize";
import { Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import company from '../assets/img/company.png';

export const Customers = () => {

    const { width } = useScreenSize();

    const { t } = useTranslation();

    AOS.init();

    return (
        <section id="customers" className="my-20">

            <div 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700" 
                className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2 mb-10"
            >
                <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Customers')}</p>
            </div>

            <Swiper 
                slidesPerView={width > 768 ? 5 : 1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
                <SwiperSlide><img src={company} className="w-32 h-32"/></SwiperSlide>
            </Swiper>    
        </section>
    )
}
