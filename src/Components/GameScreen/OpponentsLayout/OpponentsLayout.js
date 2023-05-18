import './OpponentsLayout.css';
import shortid from 'shortid';


function OpponentsLayout(props) {
    
    let cards = [];

    for(let i = 0; i < props.cards_count; i++){
        cards.push(<div className="opponent_card" key={shortid.generate()}></div>)
    }
    
    return(
        <>
        <div className="opponents_cards_wrapper">
            {cards}
        </div>   
        </>
    )
}

export default OpponentsLayout;