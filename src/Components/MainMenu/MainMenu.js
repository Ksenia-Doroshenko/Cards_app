import './MainMenu.css';
import SettingsWindow from '../SettingsWindow/SettingsWindow';
import GameRules from '../GameRules/GameRules';
import Achievements from '../Achievements/Achievements';
import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';
import React from 'react';

class MainMenu extends React.Component {
    render(){
        // console.log(this.props);
        return (
        <>
        {this.props.main_menu_state.is_profile_window_visible ? 
            <Profile open_close_profile_window={this.props.open_close_profile_window} 
            user_statistic={this.props.main_menu_state.user_statistic} 
            user_name={this.props.main_menu_state.user_name}/> : <></>}

        {this.props.main_menu_state.is_game_rules_window_visible ? 
            <GameRules open_close_game_rules_window={this.props.open_close_game_rules_window} /> : <></>}
            
        {this.props.main_menu_state.is_settings_window_visible ? 
            <SettingsWindow open_close_settings_window={this.props.open_close_settings_window} /> : <></>}

        {this.props.main_menu_state.is_achievements_window_visible ? 
            <Achievements open_close_achievements_window={this.props.open_close_achievements_window} /> : <></>}
        

        <div className="logo"></div>
        
        <Link to='/play-game'>
            <div className="play_btn"></div>
        </Link>
        
        <div className="hand_of_cards"></div>

        <div className="down_group">
            <div className="left_down_group">
                <div className="achievements_btn btn" onClick={() => this.props.open_close_achievements_window(true)}></div>
                <div className="profile_btn btn" onClick={() => this.props.open_close_profile_window(true)}></div>
            </div>
            

            <div className="right_down_group">
                <div className="game_rules_btn btn" onClick={() => this.props.open_close_game_rules_window(true)}></div>
                <div className="settings_btn btn" onClick={() => this.props.open_close_settings_window(true)}></div>
                <div className="mute_btn btn"></div>
            </div>
        </div>
        </> 
         )
    }
}

export default MainMenu;