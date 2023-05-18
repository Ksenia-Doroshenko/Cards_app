import MainMenu from "./MainMenu";
import { connect } from "react-redux";
import { open_close_settings_window_AC, open_close_game_rules_window_AC, 
    open_close_achievements_window_AC, open_close_ptofile_window_AC, update_wins_count_AC, set_user_name_AC } from "../../redux/reducers/MainMenuReducer";

let mapStateToProps = (state) => {
    return {
        main_menu_state : state.main_menu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        open_close_settings_window: (is_visible) => {
            dispatch(open_close_settings_window_AC(is_visible));
        }, 

        open_close_game_rules_window: (is_visible) => {
            dispatch(open_close_game_rules_window_AC(is_visible));
        },

        open_close_achievements_window: (is_visible) => {
            dispatch(open_close_achievements_window_AC(is_visible));
        },

        open_close_profile_window: (is_visible) => {
            dispatch(open_close_ptofile_window_AC(is_visible));
        },

        update_wins_count: (user_statistic) => {
            dispatch(update_wins_count_AC(user_statistic))
        },

        set_user_name: (user_name) => {
            dispatch(set_user_name_AC(user_name))
        },
        
    }
}

const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu);

export default MainMenuContainer;