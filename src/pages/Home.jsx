import React, { useState } from 'react';
import '../assets/CSS/Home.css';
import Nav from '../components/Nav.jsx';
import AuthModal from '../components/AuthModal.jsx';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} />
      <div className="home">
        <h1>Next Dating</h1>
        <button type="button" className="firstButton" onClick={handleClick}>
          {authToken ? 'Singn out' : 'Create Account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}

      </div>
    </div>
  );
}

export default Home;
