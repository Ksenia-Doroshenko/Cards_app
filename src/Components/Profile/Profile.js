import './Profile.css';

function Profile(props) {
    console.log(props)
    return(
        <>
            <div className="profile_window_wrapper">

                <div className="profile_window">

                    <div className="exit_btn btn" onClick={() => props.open_close_profile_window(false)}></div>

                    <div className="profile_pic_n_nickname_container">

                        <div className="profile_picture"></div>
                        <div className="nickname text">{props.user_name}</div>

                    </div>
                    <div className="user_statistics">

                        <div className="wins_count text " >Wins : {props.user_statistic.wins_count}</div>
                        <div className="losses_count text">Losses: : {props.user_statistic.losses_count}</div>
                        <div className="rank text">Rank: : {props.user_statistic.rank}</div>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Profile;