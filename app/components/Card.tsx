type cardProps = {
    imgUrl: string,
    imgAlt: string,
    cardText?: string
}

export default function Card({imgUrl, imgAlt, cardText=""}: cardProps) {
    const hasText = cardText?.trim();
    return (
        <div className="w-full aspect-[5/3] p-4 rounded-lg shadow-md shadow-taupe-200 mb-5 flex">
            <img src={imgUrl} alt={imgAlt} className={`rounded-lg h-full object-cover ${hasText ? "w-2/3" : "w-full"}`} />
            {hasText ? <p className="flex justify-center items-center p-5">{cardText}</p> : null}
        </div>
    );
}