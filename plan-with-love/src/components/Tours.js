import Card from './Card';
function Tours({ tours, removeTour }) {
    return (<div className="container">
        <div className="title">Plan With Love</div>
        <div className="cards">
            {tours.map((tour) => { return <Card key={tour.id} tour={tour} removeTour={removeTour}></Card> })}
        </div>
    </div>);
}

export default Tours;