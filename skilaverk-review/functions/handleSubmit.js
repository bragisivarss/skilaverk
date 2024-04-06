import { useState } from "react";

export const Submit = (e) => {
        const [formInput, setFormInput] = useState({
        inputName: "",
        inputDesc: "",
        inputReview: "",
        inputImage: "",
    });

   const [reviews, setReviews] = useState([]); 

        e.preventDefault();
        const newReview = {
            name: formInput.inputName,
            desc: formInput.inputDesc,
            review: formInput.inputReview,
            image: formInput.inputImage
        };
        setReviews([...reviews, newReview]);
        setFormInput({
            inputName: "",
            inputDesc: "",
            inputReview: "",
            inputImage: "",
        });
    }
