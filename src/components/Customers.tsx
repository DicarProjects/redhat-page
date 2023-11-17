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
        <section className="my-20">

            <div 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700" 
                className="bg-red-500 rounded-lg w-6/12 mx-auto lg:w-2/12 mb-10"
            >
                <p
                    className="text-white p-2 text-sm font-bold text-center md:text-lg"
                >{t('Customers')}</p>
            </div>

            <Swiper 
                slidesPerView={width > 768 ? 5 : 2}
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
