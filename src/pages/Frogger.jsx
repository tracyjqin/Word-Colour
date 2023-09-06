import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { frog, car } from "../components/base64";

function Frogger() {
  return (
    <>
      <NavBar></NavBar>
      <div id="main-body">
        <div id="grid">
          {Array.from(Array(11), (_, colIdx) => (
            Array.from(Array(11), (_, rowIdx) => (
              <div
                id="cell"
                key={`cell-${rowIdx}-${colIdx}`}
                style={{
                  backgroundImage: rowIdx === 1 && colIdx === 0 
                  ? `url(${car})` 
                  : rowIdx === 4 && colIdx === 4 
                  ? `url(${car})` 
                  : rowIdx === 7 && colIdx === 8 
                  ? `url(${car})` 
                  : rowIdx === 2 && colIdx === 1 
                  ? `url(${car})` 
                  : rowIdx === 5 && colIdx === 5 
                  ? `url(${car})`
                  : rowIdx === 8 && colIdx === 9 
                  ? `url(${car})`
                  : rowIdx === 3 && colIdx === 2 
                  ? `url(${car})`
                  : rowIdx === 6 && colIdx === 6
                  ? `url(${car})`
                  : rowIdx === 9 && colIdx === 10
                  ? `url(${car})`
                  : rowIdx === 5 && colIdx === 10
                  ? `url(${frog})`
                  : "none"
                }}
              ></div>
            ))
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
} 

export default Frogger;