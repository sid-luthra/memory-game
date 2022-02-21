import './App.css';
import CardHandler from './components/CardHandler'
import Scoreboard from './components/Scoreboard'
import React, { useState } from "react";

let guesses = [];

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [data, setData] = useState([
      {id: 1, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/rottweiler-700x700.jpg", caption: "Rottweiler"},
      {id: 2, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/akita-700x700.jpg", caption: "Akita"},
      {id: 3, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_76839838-feature.jpg", caption: "Bernese Mountain Dog"},
      {id: 4, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/06/australian-shepherd-700x700.jpg", caption: "Australian Shephered"},
      {id: 5, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/boxer-700x700.jpg", caption: "Boxer"},
      {id: 6, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cane-corso-700x700.jpg", caption: "Cane Corso"},
      {id: 7, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/german-shepherd-700x700.jpg", caption: "German Shepherd"},
      {id: 8, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/golden-retriever-700x700.jpg", caption: "Golden Retriever"},
      {id: 9, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/great-dane-700x700.jpg", caption: "Great Dane"},
      {id: 10, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/chocolate-labrador-700x700.jpg", caption: "Labrador"},
      {id: 11, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/newfoundland-black-700x700.jpg", caption: "Newfoundland"},
      {id: 12, image: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/siberian-husky-sitting-isolated-700x700.jpg", caption: "Siberian Husky"}
    ]);

  const shuffleData = () => {
    setData(data.sort(()=>{return Math.random() - 0.5}))
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const clickedCard = e.target.id;
    if (guesses.includes(clickedCard)) {
      alert ("You already guessed that one!");
      checkHighScore();
      reset();
    } else {
      guesses.push(clickedCard);
      incrementScore();
      checkWin();
      shuffleData();
      console.table(data);
    }
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const checkHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
      alert("New high score!");
    }
  };

  const checkWin = () => {
    if (guesses.length === data.length) {
      alert("You win!");
      reset();
    };
  };

  const reset = () => {
    setScore(0);
    guesses = [];
    shuffleData();
  }

  return (
      <div 
        className="App"
        style={{
          width: "100%",
          height: "100vh",
          fontFamily: "sans-serif"
        }}
      >
        <Scoreboard score={score} highScore={highScore}/>
        <CardHandler data={data} cardClick={handleClick}/>
      </div>
    );
};

export default App;
