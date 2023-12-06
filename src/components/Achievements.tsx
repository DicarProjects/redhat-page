import { useTranslation } from "react-i18next";

export const Achievements = () => {

    const { t } = useTranslation();

    return (
        <section className="bg-[url('./assets/img/map.png')] h-[500px] mt-10 relative overflow-hidden">
            <div className="w-full h-full bg-black py-20 opacity-30 absolute"></div>
            <div className="container mx-auto py-10 md:max-w-[700px] xl:max-w-[1200px] flex justify-between items-center absolute bottom-0 z-50">
                <h3 className="text-3xl md:text-5xl lg:w-4/12 text-white font-bold text-center mt-10">{t('Red Hat in numbers')}</h3>
                <div className="flex flex-col gap-5 text-white text-center md:text-right mt-5">
                    <div className="mt-1">
                        <p className="font-bold text-2xl">{t('10 Years')}</p>
                        <p className="capitalize text-lg">{t('Programmers experience')}</p>
                    </div>
                    <div className="mt-1">
                        <p className="font-bold text-2xl">{t('6 Projects')}</p>
                        <p className="capitalize text-lg">{t('Completed worldwide')}</p>
                    </div>
                    <div className="mt-1">
                        <p className="font-bold text-2xl">{t('4 Countries')}</p>
                        <p className="capitalize text-lg">{t('Active operations')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}