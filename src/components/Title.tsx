import { useTranslation } from 'react-i18next';

interface Props {
    text: string,
    center: boolean
}

export const Title = ({text, center}:Props) => {

    const { t } = useTranslation();

    return (
        <h2 className={`mb-10 text-2xl lg:text-4xl font-sans font-black capitalize w-full mx-auto ${center ? 'text-center' : 'text-left'}`}>
            {t(`${text}`)}
            <hr className={`w-3/12 border-b-8 border-b-red-400 -mt-[0.65rem] ${center ? 'mx-auto' : 'ml-3'}`}/>
        </h2>
    )
}
