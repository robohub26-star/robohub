import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onSwitchTab, onClose }) => {
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality coming soon!');
    onClose();
  };

  return (
    <div className="form-view active">
      <div className="role-toggle">
        <button
          className={`role-btn ${role === 'student' ? 'active' : ''}`}
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button
          className={`role-btn ${role === 'mentor' ? 'active' : ''}`}
          onClick={() => setRole('mentor')}
        >
          Mentor
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="portal-btn">Sign In</button>
      </form>
      <div className="switch-text">
        Don't have an account? <button onClick={onSwitchTab} className="link-btn">Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;