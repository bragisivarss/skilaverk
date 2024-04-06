import { useState } from "react";
import GameReview from "@/../components/GameReview";

export default function Form() {
    const [formInput, setFormInput] = useState({
        inputName: "",
        inputDesc: "",
        inputReview: "",
        inputImage: "",
    });

    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            name: formInput.inputName,
            desc: formInput.inputDesc,
            review: formInput.inputReview,
            image: formInput.inputImage,
        };

        setReviews([...reviews, newReview]);
        setFormInput({
            inputName: "",
            inputDesc: "",
            inputReview: "",
            inputImage: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        placeholder="Fifa"
                        name="name"
                        id="name"
                        style={{ border: "1px solid #eee" }}
                        type="text"
                        value={formInput.inputName}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputName: e.target.value,
                            })
                        }
                    />

                    <label htmlFor="desc">Desc:</label>
                    <input
                        placeholder="Pretty good"
                        name="desc"
                        id="desc"
                        style={{ border: "1px solid #eee" }}
                        type="text"
                        value={formInput.inputDesc}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputDesc: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="review">Score:</label>
                    <input
                        placeholder="Rating: 0-10"
                        name="review"
                        id="review"
                        style={{ border: "1px solid #eee" }}
                        type="number"
                        value={formInput.inputReview}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputReview: e.target.value,
                            })
                        }
                    />

                    <label htmlFor="image">Image link :</label>
                    <input
                        placeholder="https://image.com/img1"
                        name="image"
                        id="image"
                        style={{ border: "1px solid #eee" }}
                        type="text"
                        value={formInput.inputImage}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputImage: e.target.value,
                            })
                        }
                    />
                </div>

                <button type="submit" style={{padding: "4px 6px", marginLeft: "18rem"}}>Submit</button>

            </form>

            {reviews.map((review, index) => (
                <GameReview key={index} {...review} />
            ))}
        </>
    );
}
