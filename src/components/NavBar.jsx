import React from "react";
import popcat from './popcat.png'

function NavBar() {
  return (
    <nav>
        <div id="nav-container" className="full-screen">
          <div id="nav-logo">
            <img id="logo" alt="logo" src={popcat} />
          </div>
          <div id="nav-links">
            <a href="/">Home</a>
            <a href="/wordcolour">Wordcolour</a>
            <a href="/frogger">Frogger</a>
          </div>
        </div>

        <div id="nav-container" className="mobile-screen">
          <div id="nav-logo">
            <img id="logo" alt="logo" src={popcat} />
          </div>
          <div id="nav-links">
            <a href="/">H</a>
            <a href="/wordcolour">W</a>
            <a href="/frogger">Fr</a>
          </div>
        </div>

        <div id="nav-container" className="tiny-screen">
          {/* <div id="nav-logo">
            <img id="logo" alt="logo" src={process.env.PUBLIC_URL + '/logo192.png'} />
          </div> */}
          <div id="nav-links">
            <a href="/">H</a>
            <a href="/wordcolour">W</a>
            <a href="/frogger">Fr</a>
            <a href="/findaword">Fi</a>
          </div>
        </div>

    </nav>
  )
}

export default NavBar;