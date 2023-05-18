import { Link } from 'react-router-dom';
import './GameScreen.css'
import OpponentsLayout from './OpponentsLayout/OpponentsLayout';
import SelfLayout from './SelfLayout/SelfLayout';
import Deck from './Deck/Deck';
import CardsOnTable from './CardsOnTable/CardsOnTable';
import React from 'react';

class GameScreen extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <>
            <div className="game_screen_wrapper">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='back_to_main_menu_button btn text'>
                        <p className='back_to_main_menu_text_button'>Back to Main Menu</p>
                    </div>
                </Link>
                <div className="table_wrapper">
                    <div className="table">
                        <Deck deck_card_num={this.props.game_screen_state.deck_card_num}/>
                        <CardsOnTable cards={this.props.game_screen_state.cards_on_table}/>
                    </div>
                </div>
                <OpponentsLayout cards_count={6}/>
                <div className="self_layout_container">
                    <div className="user_name_and_profile_picture">
                        <div className="profile_picture"></div>
                        <div className="user_name text">{this.props.user_name}</div>
                    </div>
                    <SelfLayout cards={this.props.game_screen_state.self_layout_list}/>
                </div>
                
            </div>
            </>
        )
    }
}

export default GameScreen;