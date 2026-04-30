type cardProps = {
    imgUrl: string,
    imgAlt: string,
    cardText?: string
}

export default function Card({imgUrl, imgAlt, cardText=""}: cardProps) {
    const hasText = cardText?.trim();
    return (
        <div className="w-full aspect-[5/3] p-4 rounded-lg shadow-md shadow-taupe-200 mb-5 flex md:flex-col">
            <img src={imgUrl} alt={imgAlt} className={`rounded-lg h-full object-cover ${hasText ? "w-3/5 md:w-full" : "w-full"}`} />
            {hasText ? <div className="w-2/5 md:w-full flex flex-col md:flex-row justify-center items-center text-center p-5"><p>{cardText}</p></div> : null}
        </div>
    );
}