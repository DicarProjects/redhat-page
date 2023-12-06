interface Props {
    titleCard: string,
    textCard: string,
    children: JSX.Element,
    height: string
}

export const Card = ({titleCard, textCard, children, height}:Props) => {
    return (
        <div className={`drop-shadow-md p-5 h-[${height}px] flex flex-col justify-between bg-white mt-10 p-10 rounded transition-transform transform hover:-translate-y-2 cursor-pointer`}>
            <p className="text-md font-bold md:text-lg mb-5 text-md text-[16px] font-serif">{titleCard}</p>
            <p className="my-5 h-[100px] text-md text-[16px] font-serif">{textCard}</p>
            <div className="mt-20">
                {children}
            </div>
        </div>
    )
}
