import './Deck.css';

function Deck(props) {
    // console.log(props)
    return(
        <>
        <div className="deck_n_trump_container">
            <div className="trump"></div>
            <div className="deck text"><h1>{props.deck_card_num}</h1></div>
        </div>
        </>
    )
}

export default Deck;