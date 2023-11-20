import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MemberCard } from './MemberCard';

export const Team = () => {

  const { t } = useTranslation();

  AOS.init();

  return (
    <section className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-10">

      <div 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700" 
          className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2 mb-10"
      >
          <p className="text-black text-2xl md:text-3xl font-bold text-center">{t('Our team')}</p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-4 gap-5 justify-center items-center">
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
        <MemberCard name='Maria Marselina' position='Project Manager'/>
      </div>
    </section>
  )
}
