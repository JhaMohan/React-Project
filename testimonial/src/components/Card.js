import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    const review = props.review;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto left-5">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-5"
                    src={review.image} alt="user profile"></img>
                <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute left-[10px] top-[-6px] -z-20"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>

            <div className="text-center ">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-slate-500 text-center m-5">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>



        </div>
    )
}

export default Card