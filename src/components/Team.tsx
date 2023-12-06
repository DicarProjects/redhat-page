
import { MemberCard } from './MemberCard';
import { Title } from './Title';
import JuanDavidImage from '../assets/img/TeamMembers/JuanDavid.jpg'; 
import LeidyKatherinImage from '../assets/img/TeamMembers/LeidyKatherine.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Team = () => {

  AOS.init();

  return (
    <section className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-20 md:my-32">

      <Title text="Our team" center={true}/> 

      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 justify-center items-center pt-20">
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
