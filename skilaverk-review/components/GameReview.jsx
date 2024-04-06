import Image from "next/image";

export default function GameReview({ name, desc, review, image }) {
    return (
        <>
            <h2>
                Name: <span style={{ fontSize: "19px" }}>{name}</span>
            </h2>
            <p>
                Desc: <span style={{ fontSize: "14px" }}>{desc}</span>
            </p>
            <p>
                Review: <span style={{ fontSize: "14px" }}>{review}</span>
            </p>
            <Image src={image} alt={image} width={150} height={150} />
        </>
    );
}
