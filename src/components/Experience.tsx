import { useTranslation } from "react-i18next";
import { ExperienceItem } from "./ExperienceItem";
import { Title } from "./Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";

export const Experience = () => {

    const { t } = useTranslation();

    AOS.init();

    return (
        <section className="my-10 md:my-16">

            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px]">

                <Title text="Experience" center={true}/>

                <p
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                    className="text-center text-gray-900 my-4 md:text-lg w-7/12 mx-auto font-serif"
                >{t('Our expertise')}</p>

                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <ExperienceItem title="Tech Mastery" textExperience="We master cutting-edge technologies to bring your ideas to life.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                    <ExperienceItem title="Next-Gen Development" textExperience="We explore and apply powerful frameworks on the market.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                    <ExperienceItem title="User-Centric Design" textExperience="We place your users at the heart of everything we do.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                    <ExperienceItem title="Custom Solutions" textExperience="We create tailor-made solutions to meet the unique needs of your business.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                    <ExperienceItem title="Seamless Integration" textExperience="We make your systems work together seamlessly.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                    <ExperienceItem title="Security First" textExperience="Security is our primary design consideration.">
                        <i className="fa-regular fa-file-lines text-red-600 text-5xl absolute top-2 left-9"></i>
                    </ExperienceItem>
                </div>

            </div>
        </section>
    )
}