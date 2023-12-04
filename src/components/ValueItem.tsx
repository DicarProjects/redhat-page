import AOS from 'aos';
import 'aos/dist/aos.css';

interface ValueProps {
    iconTitle: string,
    iconPara: string,
    children: JSX.Element
}

export const ValueItem = ({iconTitle, iconPara, children}: ValueProps) => {

    AOS.init();

    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800" 
            className='flex flex-col justify-between items-center w-[200px] h-[250px]'
        >
            <div className="text-3xl text-center">
                {children}
            </div>
            <p className="py-5 text-center font-bold text-md h-92">{iconTitle}</p>
            <p className="h-full">{iconPara}</p>
        </div>
    )
}
