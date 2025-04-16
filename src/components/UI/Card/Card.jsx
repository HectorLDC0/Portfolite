import './Card.css';

function Card({ image }) {
    

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt="card-image" />
                </div>
            </div>
        </>
    )
}

export default Card;
