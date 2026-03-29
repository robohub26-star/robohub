import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './PortalModal.css';

const PortalModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="portal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="portal-left">
          <h2>Join RoboHub</h2>
          <p>
            Connect with the future of robotics. Whether you're a student
            building practical skills or a mentor guiding the next generation,
            our portal bridges the gap.
          </p>
        </div>
        <div className="portal-right">
          <div className="portal-tabs">
            <button
              className={`portal-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`portal-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'login' && <LoginForm onSwitchTab={() => setActiveTab('register')} onClose={onClose} />}
          {activeTab === 'register' && <RegisterForm onSwitchTab={() => setActiveTab('login')} onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

export default PortalModal;