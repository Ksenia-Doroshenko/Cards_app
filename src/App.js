import { Route, Routes } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css';
import MainMenu from './Components/MainMenu/MainMenuContainer';
import GameScreen from './Components/GameScreen/GameScreenContainer';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<MainMenu/>}/>
          <Route path='/play-game' element={<GameScreen/>}/>
        </Routes> 
    </div>
  );
}

export default App;
