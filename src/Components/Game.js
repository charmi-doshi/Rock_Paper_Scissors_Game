import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Game({score,myChoice,setScore}) {
    const [house,setHouse] = useState("");
    const [playerWin,setPlayerWin] = useState("");
    const [counter,setCounter] = useState(3);

    const newHousePick = () =>{
        const choices=["rock","scissors","paper"];
        setHouse(choices[Math.floor(Math.random() * 3)])
    };
    useEffect(
        ()=>{
            newHousePick()
        },[])

    const Result = () =>{
        if(myChoice === "rock" && house === "scissors"){
            setPlayerWin("win")
            setScore(score + 1)
            console.log(score + 1);
        }else if(myChoice === "rock" && house === "paper"){
            setPlayerWin("lose")
            setScore(score - 1)
        }else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1);
          } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("lose");
            setScore(score - 1);
          } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("win");
            setScore(score + 1);
          } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("lose");
            setScore(score - 1);
          } else {
            setPlayerWin("draw");
          }


    }    

    useEffect(
        ()=>{
            Result()
        },[house])

    return (  <div className='game'>

        <h3>My choice:{myChoice} </h3>
        <h3>House choice:{house}</h3>

        <div className='result'>
        <h2> Result:</h2>
        {playerWin == "win" && <h2>You win !!</h2>}
        {playerWin == "lose" && <h2>You lose ' _ '</h2>}
        {playerWin == "draw" && <h2>Draw</h2>}
        </div>

        <Link to="/" className="play-again" onClick={()=> setHouse()}>Play Again</Link>
    </div>);
}

export default Game;