import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
    title: string,
    textService: string,
    children: JSX.Element
}


export const ServiceItem = ({title, textService, children}: Props) => {

    const { t } = useTranslation();

    return (
        <div
            data-aos="fade-up"
            data-aos-easing="linear" 
            data-aos-duration="1000" 
            className="bg-white rounded-lg mx-10 h-full md:max-w-[250px] lg:max-w-[300px] flex flex-col justify-between shadow-md"
        >
            <div>
                {children}
            </div>
            <div className="my-10 px-5">
                <h4 className="text-left font-bold capitalize text-lg mb-5 font-serif">{t(`${title}`)}</h4>
                <p className="text-sm mb-5 font-serif">{t(`${textService}`)}</p>
                <Link className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 w-6/12 mx-auto md:mx-0 lg:w-12/12 font-serif" to='/services'>
                    {t('Read more')}
                </Link>
            </div>
        </div>
    )
}
