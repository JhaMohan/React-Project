import data from '../data'
function NoTour({ setTours }) {
    return (
        <div className="refresh">
            <h2>No Tours Left</h2>
            <button className="ref-btn" onClick={() => setTours(data)}>
                Refresh
            </button>
        </div>
    )
}

export default NoTour;

