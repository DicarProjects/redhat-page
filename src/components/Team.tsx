import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MemberCard } from './MemberCard';
import JuanDavidImage from '../assets/img/TeamMembers/JuanDavid.jpg'; // Reemplaza con la ruta correcta
import LeidyKatherinImage from '../assets/img/TeamMembers/LeidyKatherine.png'; // Reemplaza con la ruta correcta

export const Team = () => {

  const { t } = useTranslation();

  AOS.init();

  return (
    <section className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-20 md:my-32">

      <div 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="700" 
        className="border-b-2 border-red-500 w-6/12 mx-auto md:w-3/12 pb-2 mb-10"
      >
          <p className="text-black text-2xl md:text-3xl font-bold text-center font-serif">{t('Our team')}</p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 justify-center items-center">
        <MemberCard name='Wilmar Giovanny Alfaro' position='CEO' imageSrc={JuanDavidImage}/>
        <MemberCard name='Keidy Lorena Moreno' position='CTO' imageSrc={JuanDavidImage}/>
        <MemberCard name='Leidy Katherine Alvarado' position='CFO' imageSrc={LeidyKatherinImage}/>
        <MemberCard name='Sebastián Camilo Oviedo' position='FullStack Developer' imageSrc={JuanDavidImage}/>
        <MemberCard name='Diego Alejandro Cardona' position='Backend Developer' imageSrc={JuanDavidImage}/>
        <MemberCard name='Jhon Alexis Alfaro Puerta' position='Backend Developer' imageSrc={JuanDavidImage}/>
        <MemberCard name='Juan David Yara Cruz' position='Backend Developer' imageSrc={JuanDavidImage}/>
        <MemberCard name='Juan Manuel García' position='Frontend Developer'imageSrc={JuanDavidImage}/>
        <MemberCard name='Harol Guzmán Cartagena' position='Backend Developer' imageSrc={JuanDavidImage}/>
      </div>
    </section>
  )
}
