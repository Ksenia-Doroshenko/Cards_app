import './SelfLayout.css';
import shortid from 'shortid';
import Card from '../../Card/Card';


function SelfLayout(props) {
    
    // let cards = [];

    // for(let i = 0; i < props.cards_count; i++){
    //     cards.push(<div className="self_card" key={shortid.generate()}></div>)
    // }
    // console.log(props.cards);

    let self_layout_cards = props.cards.map( card => <Card
         suit={card.suit} index={card.index} key={shortid.generate()}>
        </Card>)

    
    return(
        <>
        <div className="self_cards_wrapper">
            {self_layout_cards}
        </div>   
        </>
    )
}

export default SelfLayout;