import './Achievements.css';

function Achievements(props) {
    console.log(props);
    return(
        <>
        <div className="achievements_window_wrapper">

        <div className="achievements_window">

            <div className="achievements"></div>

            <div className="exit_btn btn" onClick={() => props.open_close_achievements_window(false)} ></div>

        </div>

        </div>
        
        </>
    )
}

export default Achievements;