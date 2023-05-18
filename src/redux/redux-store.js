import {combineReducers, legacy_createStore} from "redux";
import { MainMenuReducer } from "./reducers/MainMenuReducer";
import {GameScreenReducer} from "./reducers/GameScreenReducer";


let reducers = combineReducers(
{
    main_menu : MainMenuReducer,
    game_screen : GameScreenReducer
})


let store = legacy_createStore(reducers);

export default store;