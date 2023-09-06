import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

function Dashboard() {
  const [win, setWin] = useState(0);
  // let defaultWin;

  useEffect(() => {
    const getWins = async () => {
      const storedWins = localStorage.getItem("win");
      if (storedWins) {
        setWin(parseInt(storedWins));
      } else {
        try {
          const response = await fetch("https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json");
          const data = await response.json();
          setWin(parseInt(data.score));
          // defaultWin = data.score;
          // localStorage.setItem("win", data.score);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getWins();
  }, []);
  
  // console.log(localStorage.getItem("win"))
  function resetWins() {
    setWin(2);
    localStorage.getItem("win", 2);
  }

  if ((localStorage.getItem("win")) === 0) {
    alert("Congratulations!")
    resetWins()
  }

  return (
    <>
      <NavBar></NavBar>
      <div id="main-body">
        <p id="g-count">Wins to achieve: {win}</p>
        <button onClick={resetWins}>(reset)</button>
        <p id="choose">Let's go!</p>
      </div>
      <Footer></Footer>

    </>
  );
}

export default Dashboard;