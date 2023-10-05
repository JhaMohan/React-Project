import React, { useState } from 'react'
import Card from './Card'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = (props) => {
    const reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }

    }

    function rightHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }

    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }



    return (
        <div className="w-[85vw] md:w-[700px] bg-white  flex flex-col md:relative justify-center items-center mt-10 pt-10 transition-all duration-700 shadow-md rounded-md">
            <Card review={reviews[index]} />

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                <button onClick={leftHandler} className="cursor-pointer hover:text-violet-600 ">
                    <FaArrowLeft />
                </button>
                <button onClick={rightHandler} className="cursor-pointer hover:text-violet-600">
                    <FaArrowRight />
                </button>
            </div>



            <div >
                <button onClick={surpriseHandler} className=" text-lg m-5 bg-violet-400 hover:bg-violet-500 font-bold px-10 py-2 cursor-pointer rounded-md text-white transition-all duration-200">Surprise Me</button>
            </div>

        </div >
    )
}

export default Testimonial