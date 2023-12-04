import { useTranslation } from "react-i18next";

export const Maintext = ({text}) => {

    const { t } = useTranslation();

    return (
        <section id="maintext" className="container mx-auto md:max-w-[700px] xl:max-w-[1200px] my-16 p-5 md:p-0 md:my-32">
            <h2 className="font-bold text-xl md:text-3xl text-left mb-10">{t('About us')}</h2>
            <p className="text-md md:text-[16px]">{t(`${text}`)}</p>
        </section>
    )
}
