import './SettingsWindow.css';

function SettingsWindow(props) {
    // console.log(props);
    return (
        <>
            <div className="setting_window_wrapper">

                <div className="settingsWindow">
                    
                    <div className="topContainer">
                        <div className="imgVolumeSettings"></div>
                        <div className="rangeSliderSettings">
                            <div className="thumb btn"></div>
                        </div>
                        <div className="exitBtn btn" onClick={() => props.open_close_settings_window(false)}></div>
                    </div>
                    
                    <div className="sort text">Sort by:</div>

                    <div className="sortByContainer">
                        <div className="sortBySuits btn"></div>
                        <div className="sortByNumber text btn">6789</div>
                    </div>
                </div>

               

            </div>
        </>
    )
}

export default SettingsWindow;