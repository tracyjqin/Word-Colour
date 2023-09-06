import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

function WordColour() {
  const [show, setShow] = useState(false);
  const [colourGrid, setColourGrid] = useState([]);
  const [selectColour, setSelectColour] = useState([]);
  const colours = ["red", "blue", "orange", "yellow", "green", "purple", "pink"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getColour = () => {
    const randomColour = colours.sort(() => 0.5 - Math.random());
    const newColours = randomColour.slice(0, 4);
    setSelectColour(newColours[Math.floor(Math.random() * newColours.length)]);
    setColourGrid(newColours);
  };

  useEffect(() => {
    getColour();
  }, []);

  const randomiseColour = (userColour) => {
      // console.log(userColour);
      // console.log(selectColour);
      // console.log(count)
    if (userColour === selectColour) {
      // winCount = winCount + 1;
      // console.log(userColour);
      // console.log(correctColour);
      setCount(count + 1);
      getColour();

      console.log(localStorage.getItem("wins"));
      if (count === 2) {
        alert("You have won!");
        setCount(0);
        const newWins = localStorage.getItem("win");
        console.log(newWins);
        localStorage.setItem("win", (newWins - 1));
        // console.log(localStorage.getItem("win"));
      }
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div id="main-body">
        <div id="wc-container">
          <div id="left">
            {show && (
              <p>{selectColour}</p>
            )}
          </div>
          <div id="right">
            {show &&
              colourGrid.map((colour, idx) => (
                <button
                  key={idx}
                  style={{
                    backgroundColor: colour,
                    width: "50%",
                    height: "50%",
                  }}
                  onClick={() => randomiseColour(colour)}
                ></button>
              ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default WordColour;