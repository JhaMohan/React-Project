import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

const Card = (props) => {
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;
    let clicked = false;

    function clickHnadler() {

        if (likedCourses.includes(course.id)) {
            // pehle se liked thi
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("liked removed");
        } else {

            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);

            } else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-90 rounded-md overflow-hidden ">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-5 flex justify-center items-center z-10">
                    <button onClick={clickHnadler}>
                        {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"></FcLike> : <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6"> {course.title}</p>
                <p className="text-white mt-2">
                    {
                        (course.description.length > 100) ? (course.description.substr(0, 100)) + "..." : (course.description)
                    }

                </p>

            </div>


        </div>);
}


export default Card;