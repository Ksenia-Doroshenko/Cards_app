import './CardsOnTable.css';
import Card from '../../Card/Card';
import shortid from 'shortid';

function CardsOnTable(props) {
    console.log(props);

    // let test_card = [
    //     {suit: "hurt", index: 9}
    // ];

    let covered_cards = props.cards.map( card => <Card
         suit={card.suit} index={card.index} key={shortid.generate()}>
            suit={card.suit} index={card.index}
        </Card>)

    return(
        <>
        <div className="cards_on_table_wrapper">
            
            { covered_cards }
            {/* <div className="covered_card" card={props.card}></div>
            <div className="coverind_card"></div> */}
        </div>
        </>
    )
}

export default CardsOnTable;