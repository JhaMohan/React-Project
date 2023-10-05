import Card from "./Card";
import React, { useState } from 'react';
const Cards = (props) => {

    const courses = props.courses;
    const category = props.category;

    let allCourse = [];

    const [likedCourses, setLikedCourses] = useState([]);

    const getCourse = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourse.push(course);
                })
            })
            return allCourse;
        } else {
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourse().map((course) => { return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}  ></Card> })}
        </div>
    )
}


export default Cards;