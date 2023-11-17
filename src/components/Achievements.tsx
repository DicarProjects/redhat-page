import { useTranslation } from "react-i18next";

export const Achievements = () => {

    const { t } = useTranslation();

    return (
    <section className="bg-[url('./assets/img/map.png')] h-[500px] mt-10 relative overflow-hidden">
        <div className="w-full h-full bg-black py-20 opacity-30 absolute">
        </div>
        <div className="container mx-auto py-5 md:max-w-[700px] xl:max-w-[1200px] flex justify-center absolute bottom-0 z-50">
            <h3 className="text-2xl md:text-5xl text-white font-bold">{t('Redhat in numbers')}</h3>
        </div>
        <div className="container mx-auto py-5 md:max-w-[700px] xl:max-w-[1200px] flex justify-center absolute bottom-28  md:-right-32 z-50">

            <div className="flex flex-col gap-5 text-white">
                <div>
                    <p className="font-bold text-2xl">{t('20 years')}</p>
                    <p className="capitalize">{t('programmers experience')}</p>
                </div>
                <div>
                    <p className="font-bold text-2xl">{t('20 projects')}</p>
                    <p className="capitalize">{t('completed worldwide')}</p>
                </div>
                <div>
                    <p className="font-bold text-2xl">{t('4 countries')}</p>
                    <p className="capitalize">{t('for software development')}</p>
                </div>
            </div>
        </div>
    </section>
    )
}
