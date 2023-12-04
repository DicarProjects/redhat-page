export const Card = ({titleCard, textCard, children, height}) => {
    return (
        <div className={`drop-shadow-md p-5 h-[${height}px] flex flex-col justify-between`}>
            <p className="text-md font-bold md:text-lg mb-5">{titleCard}</p>
            <p className="my-5 h-[100px]">{textCard}</p>
            <div className="mt-20">
                {children}
            </div>
        </div>
    )
}
