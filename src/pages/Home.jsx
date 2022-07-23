import React, {useState} from 'react';
import '../assets/CSS/Home.css';
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';
import {Button} from '@mantine/core';

const Home = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const authToken = false;

  const handleClick = () => {
    setShowRegisterForm(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav minimal={false}
        authToken={authToken}
        setShowRegisterForm={setShowRegisterForm}
        showRegisterForm={showRegisterForm}
        setIsSignUp={setIsSignUp}
      />

      <div className="home">
        <h1 className="title" >Next Date</h1>


        <Button className="firstButton"
          disabled={showRegisterForm}
          variant="outline"
          onClick={handleClick}>
          {authToken ? 'Singnout' : 'Create Account'}
        </Button>

        {showRegisterForm && <AuthModal
          onClick={handleClick}
          setShowRegisterForm={setShowRegisterForm}
          setIsSignUp={setIsSignUp}
          isSignUp={isSignUp}
        />}

      </div>
    </div>
  );
};

export default Home;
