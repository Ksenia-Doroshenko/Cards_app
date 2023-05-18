import { connect } from "react-redux";
import GameScreen from "./GameScreen";
import { set_card_AC, update_deck_card_num_AC } from "../../redux/reducers/GameScreenReducer";

let mapStateToProps = (state) => {
    return {
        game_screen_state : state.game_screen,
        user_name : state.main_menu.user_name
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        set_card: (card) => {
            dispatch(set_card_AC(card));
        }, 
        
        update_deck_card_num: (a) => {
            dispatch(update_deck_card_num_AC(a));
        }, 
    }
}

const GameScreenContainer = connect(mapStateToProps, mapDispatchToProps)(GameScreen);

export default GameScreenContainer;