import { useTranslation } from "react-i18next";

interface Props {
    title: string,
    textExperience: string,
    children: JSX.Element
}

export const ExperienceItem = ({title, textExperience, children}:Props) => {

    const { t } = useTranslation();
    
    return (
        <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000" 
            className="bg-white rounded-lg p-5 max-w-[250px] h-[240px] flex flex-col justify-between drop-shadow-md"
        >
            <div className=" bg-red-200 h-16 w-16 rounded-full relative">
                {children}
            </div>
            <h4 className="text-left font-bold -mb-5 text-sm">{t(`${title}`)}</h4>
            <p className="text-sm mb-5 text-left">{t(`${textExperience}`)}</p>
        </div>
    )
}
