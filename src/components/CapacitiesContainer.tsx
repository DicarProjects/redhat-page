import { useTranslation } from "react-i18next";
import { Card } from "./Card";
import csharp from '../assets/img/csharp.svg';
import go from '../assets/img/go.svg';
import jenkins from '../assets/img/jenkins.svg';
import dotnet from '../assets/img/dotnet.svg';
import vue from '../assets/img/vue.svg';
import react from '../assets/img/react.svg';
import angular from '../assets/img/angular.svg';
import knockout from '../assets/img/knockout.svg';
import git from '../assets/img/git.svg';
import docker from '../assets/img/docker.svg';
import kubernets from '../assets/img/kubernets.svg';
import aws from '../assets/img/aws.svg';
import azure from '../assets/img/azure.svg';
import gcp from '../assets/img/gcp.svg';
import flutter from '../assets/img/flutter.svg';
import selenium from '../assets/img/selenium.svg';
import sketch from '../assets/img/sketch.svg';
import figma from '../assets/img/figma.svg';

export const CapacitiesContainer = () => {
    
    const { t } = useTranslation();

    return (
        <section className="flex flex-col md:flex-row">
            <div className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-20 md:my-32">
                <div 
                    className="border-b-2 border-red-500 w-6/12 md:w-3/12 mx-auto text-center pb-2 mb-10"
                >
                    <h2 className="font-bold text-xl md:text-3xl mb-5">{t('Capabilities')}</h2>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
                    <Card height={'300'} titleCard={t('Back-end development')} textCard={t('Development of managed/unmanaged applications, Windows Forms, ASP.NET, MVC & Web API, Razor/Blazor, SPA (JavaScript). Solid experience in Go (Golang) for the development of efficient and highly concurrent solutions.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={csharp} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={go} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={dotnet} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('Front-end development')} textCard={t('Design and development of responsive web applications for exceptional user experiences. Implementation of recognized frameworks such as Vue, React, Angular, and Knockout for modern and high-performance interfaces.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={vue} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={react} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={angular} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={knockout} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('Devops expertise')} textCard={t('Design and implementation of DevOps culture through CI/CD automation. Management of source code repositories, infrastructure cost optimization, monitoring, and quality gates.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={jenkins} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={git} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={docker} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={kubernets} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('Cloud solutions')} textCard={t('Implementation of application servers, domain Capacitys, database/file/storage solutions, IaaS, backup and recovery. Resource monitoring, information security strategies, ITSM integration, IaaC.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={aws} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={azure} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={gcp} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('Mobile solutions')} textCard={t('Development of hybrid apps for increased productivity and lower maintenance costs. Development of native apps for faster execution and full utilization of device features.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={react} />
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={flutter} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('QA automation & performance testing')} textCard={t('Automation of non-functional and performance testing, recording and management of test cases, automation of business workflow.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-4/12" alt="Capacity Image" src={selenium} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('User centric experience design')} textCard={t('Creation of digital products focused on maximizing usability through accessibility, ease, and attractive design.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <img className="cursor-pointer w-2/12" alt="Capacity Image" src={sketch} />
                            <img className="cursor-pointer w-3/12" alt="Capacity Image" src={figma} />
                        </div>
                    </Card>
                    <Card height={'300'} titleCard={t('Agile frameworks implementation')} textCard={t('Extensive experience in executing agile initiatives under different frameworks, facilitating efficient and high-productivity workflows.')}> 
                        <div className="flex flex-wrap -mt-10 gap-5">
                            <p className="cursor-pointer text-xl w-2/12">Scrum</p>
                            <p className="cursor-pointer text-xl w-2/12">Kanban</p>
                            <p className="cursor-pointer text-xl w-2/12">Agile</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
