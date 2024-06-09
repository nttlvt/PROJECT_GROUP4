// ModalAuth.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Login from '../Login/Login';
import './modal.css'
import { Register } from '../Register/Register';

export const ModalAuth = ({ isOpen, onRequestClose, initialMode }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  const handleCloseModal = () => {
    setIsLogin(false);
  };

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <div className="relative p-6 rounded-lg">
        <button
          className="absolute top-2 right-2 text-black bg-gray-200 rounded-md font-bold"
          style={{width: '30px', height: '30px'}}
          onClick={onRequestClose}
        >
          X
        </button>
        {isLogin ? (
          <Login onSwitchToRegister={switchToRegister} onClose={handleCloseModal}/>
        ) : (
          <Register onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </Modal>
  );
};


