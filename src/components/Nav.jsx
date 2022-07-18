import React from 'react';
import '../assets/CSS/Nav.css';

function Nav({ minimal, authToken }) {
  return (
    <nav>
      <div className="logoContainer">
        <img className="logo" src="" alt="logo" />
        {console.log(minimal)}
      </div>

      {!authToken && !minimal && <button className="navButton">Log In</button> }

    </nav>
  );
}

export default Nav;
