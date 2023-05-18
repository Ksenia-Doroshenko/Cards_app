const OPEN_CLOSE_SETTINGS_WINDOW = "OPEN_CLOSE_SETTINGS_WINDOW";
const OPEN_CLOSE_GAME_RULES_WINDOW = "OPEN_CLOSE_GAME_RULES_WINDOW";
const OPEN_CLOSE_ACHIEVEMENTS_WINDOW = "OPEN_CLOSE_ACHIEVEMENTS_WINDOW";
const OPEN_CLOSE_PROFILE_WINDOW = "OPEN_CLOSE_PROFILE_WINDOW";
const UPDATE_USER_STATISTIC = "UPDATE_USER_STATISTIC";
const SET_USER_NAME = "SET_USER_NAME";

let intial_state = {
    is_settings_window_visible : false,
    is_game_rules_window_visible : false,
    is_achievements_window_visible : false,
    is_profile_window_visible : false,
    user_statistic : {
        wins_count : 0,
        losses_count: 0,
        rank: 0
    },
    user_name: "User_name"

    
};

export const MainMenuReducer = (state=intial_state, action) => {
    switch(action.type){
        case OPEN_CLOSE_SETTINGS_WINDOW:{
            return {
                ...state, is_settings_window_visible: action.is_visible
            }
        }

        case OPEN_CLOSE_GAME_RULES_WINDOW:{
            return {
                ...state, is_game_rules_window_visible: action.is_visible
            }
        }
        
        case OPEN_CLOSE_ACHIEVEMENTS_WINDOW:{
            return {
                ...state, is_achievements_window_visible: action.is_visible
            }
        }

        case OPEN_CLOSE_PROFILE_WINDOW:{
            return {
                ...state, is_profile_window_visible: action.is_visible
            }
        }

        case UPDATE_USER_STATISTIC:{
            return {
                ...state, user_statistic: action.user_statistic
            }
        }

        case SET_USER_NAME:{
            return {
                ...state, user_name: action.user_name
            }
        }

        default:
            return state;
    }
};
 
export const open_close_settings_window_AC = (is_visible) => {
    return {
        type: OPEN_CLOSE_SETTINGS_WINDOW,
        is_visible
    }
}

export const open_close_game_rules_window_AC = (is_visible) => {
    return {
        type: OPEN_CLOSE_GAME_RULES_WINDOW,
        is_visible
    }
}

export const open_close_achievements_window_AC = (is_visible) => {
    return {
        type: OPEN_CLOSE_ACHIEVEMENTS_WINDOW,
        is_visible
    }
}

export const open_close_ptofile_window_AC = (is_visible) => {
    return {
        type: OPEN_CLOSE_PROFILE_WINDOW,
        is_visible
    }
}

export const update_wins_count_AC = (user_statistic) => {
    return {
        type: UPDATE_USER_STATISTIC,
        user_statistic
    }
}

export const set_user_name_AC = (user_name) => {
    return {
        type: SET_USER_NAME,
        user_name
    }
}