import React from 'react';
import '../assets/CSS/Nav.css';
// import img from '../assets/img/logo.png';

const Nav = ({minimal, authToken, setShowRegisterForm, showRegisterForm, setIsSignUp}) => {
  const handleClick = () => {
    setShowRegisterForm(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logoContainer">
        <img className="logo" src="../assets/img/logo.jpg" alt="logo" />
      </div>
      {!authToken && !minimal && <button
        className="navLoginBtn"
        onClick={handleClick}
        disabled={showRegisterForm}
      >Log In</button>}
    </nav>
  );
};

export default Nav;
