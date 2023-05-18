import './CardsOnTable.css';
import Card from '../../Card/Card';
import shortid from 'shortid';

function CardsOnTable(props) {
    // console.log(props);

    // let test_card = [
    //     {suit: "hurt", index: 9}
    // ];

    // let cards_on_table = props.cards.map( card => <Card
    //      suit={card.suit} index={card.index} key={shortid.generate()}>
    //         suit={card.suit} index={card.index}
    //     </Card>)

    let table_layout = props.cards.map(card_array => 
        <div className="first_pair pair">
             {card_array.map(card => <Card suit={card.suit} index={card.index}/>)}
        </div>)
    

    return(
        <>
        <div className="cards_on_table_wrapper">
            
            <div className="row">

                {table_layout}
                {/* <div className="first_pair pair">
                    <Card suit={"hurt"} index={"A"}/>
                    <Card suit={"clubs"} index={"K"}/>
                    
                </div>

                <div className="second_pair pair">
                    <Card/>
                    <Card />
                </div>

                <div className="third_pair pair">
                    <Card/>
                    <Card />
                </div> */}

            </div>

            {/* <div className="row">
                
                <div className="fourth_pair pair">
                    <Card/>
                    <Card />
                </div>

                <div className="fifth_pair pair">
                    <Card/>
                    <Card />
                </div>

                <div className="sixth_pair pair">
                    <Card/>
                    <Card />
                </div>

            </div> */}

            {/* { covered_cards } */}
            {/* <div className="covered_card" card={props.card}></div>
            <div className="coverind_card"></div> */}
        </div>
        </>
    )
}

export default CardsOnTable;