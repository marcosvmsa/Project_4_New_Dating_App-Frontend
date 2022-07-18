import React from 'react';

function AuthModal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div onClick={handleClick}>X</div>
    </div>
  );
}

export default AuthModal;
