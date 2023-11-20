interface ValueProps {
    iconTitle: string,
    iconPara: string,
    children: JSX.Element
}

export const ValueItem = ({iconTitle, iconPara, children}: ValueProps) => {
    return (
        <div>
            <div className="text-3xl text-center">
                {children}
            </div>
            <p className="py-5 text-center font-bold text-md">{iconTitle}</p>
            <p>{iconPara}</p>
        </div>
    )
}
