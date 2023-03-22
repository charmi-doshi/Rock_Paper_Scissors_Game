import './App.css';
import {Switch, Typography} from 'antd';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Play from './Components/Play';
import Header from './Components/Header';
import Game from './Components/Game';

function App() {
  
  const [myChoice,setMyChoice]= useState("");
  const [score,setScore] = useState(0);

  return (
    <div className='container'>
      <Header score={score}/>  
          <Routes>
            <Route path="/" element={<Play setMyChoice={setMyChoice}/>}/>
            
          
            <Route path="/game"
              element={<Game myChoice={myChoice} score={score} setScore={setScore}/>}
            />
          </Routes>
    
    </div>
  );
}

export default App;
