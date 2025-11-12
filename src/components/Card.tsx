interface ICard {
    image: string,
    title: string,
    dateTime: string,
    area: string,
    description: string
}

export default function Card({image, title, dateTime, area, description} : ICard) {
    return (
        <div className="bg-components bold max-w-[282px] m-3 rounded-lg flex flex-col items-start">
            <img src={image} alt=""/>

            <div className="p-4 flex flex-col gap-3 items-start">
                <div className="bg-amber-50/20 p-2">
                    <h3 className="orbitron-font ">{area.toUpperCase()}</h3>
                </div>

                {/* It needs to convert the Date to String, because React JSX ONLY renders valid ReactNode types and Date is not one of them */}
                {/* <p>{dateTime.toDateString()}</p> */}
                <p>{dateTime}</p>

                <h2 className="orbitron-font ">{title}</h2>

                <p>{description}</p>
            </div>

        </div>
    )
}