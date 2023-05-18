import './Card.css'

function Card(props) {
    let suit = props.suit;
    let index = props.index;
    return(
        <>
            <div className="card_container">
                <div className="card_field">
                    <div className={suit + " card_suit"}></div>
                    <div className="suit_and_index_container">
                        <div className="index text">{index}</div>
                        <div className={suit + "_mini" + " mini_suit"}></div>
                        <div className="index text upside_down_index">{index}</div>
                        <div className={suit + "_mini" + " mini_suit upside_down_suit"}></div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card;