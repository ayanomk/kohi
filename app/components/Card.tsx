type cardProps = {
    imgUrl: string,
    imgAlt: string,
    cardText?: string
}

export default function Card({imgUrl, imgAlt, cardText=""}: cardProps) {
    return (
        <div className="w-full p-4 rounded-lg shadow-md shadow-taupe-200 mb-5">
            <img src={imgUrl} alt={imgAlt} className="rounded-lg" />
            {cardText !== "" ? <p>{cardText}</p> : null}
        </div>
    );
}