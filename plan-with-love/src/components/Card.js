import { useState } from "react";

function Card({ tour, removeTour }) {

    const [readmore, setReadMore] = useState(false);

    const description = readmore ? tour.info : `${(tour.info).substring(0, 200)}...`;

    function readmoreHandler() {

        setReadMore(!readmore);
    }

    return (<div className="card">
        <img src={tour.image} className="image"></img>
        <div className="tour-info ">
            <div className="tour-details">
                <h4 className="tour-price">₹ {tour.price}</h4>
                <h4 className="tour-name">{tour.name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
        </div>
        <button className="btn-red" onClick={() => removeTour(tour.id)}>Not Interested</button>
    </div >);
}

export default Card;