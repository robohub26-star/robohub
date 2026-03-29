import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = ({ onSwitchTab, onClose }) => {
  const [role, setRole] = useState('student');

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    alert('Student registration successful!');
    onClose();
  };

  const handleMentorSubmit = (e) => {
    e.preventDefault();
    alert('Mentor registration successful!');
    onClose();
  };

  return (
    <div className="form-view">
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

      {role === 'student' && (
        <form onSubmit={handleStudentSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="form-group">
              <label>Course Enrollment</label>
              <select required>
                <option disabled selected>Select a Course</option>
                <option>Applied AI & CV Bootcamp</option>
                <option>ROS2 Fundamentals</option>
                <option>ROS2 Advanced</option>
                <option>Drone Technology</option>
                <option>Semi-Autonomous Wheeled Robots</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Academic Year</label>
              <input type="text" placeholder="e.g. 3rd Year" />
            </div>
            <div className="form-group">
              <label>Mentor Name</label>
              <input type="text" placeholder="Assigned Mentor (Optional)" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Profile Photo</label>
              <input type="file" accept="image/*" />
            </div>
            <div className="form-group">
              <label>Upload Resume</label>
              <input type="file" accept=".pdf,.doc,.docx" />
            </div>
          </div>
          <button type="submit" className="portal-btn">Create Student Account</button>
        </form>
      )}

      {role === 'mentor' && (
        <form onSubmit={handleMentorSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Dr. Jane Smith" required />
          </div>
          <div className="form-group">
            <label>Professional Email</label>
            <input type="email" placeholder="jane@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          <div className="form-group">
            <label>Profile Photo</label>
            <input type="file" accept="image/*" required />
          </div>
          <button type="submit" className="portal-btn">Register as Mentor</button>
        </form>
      )}

      <div className="switch-text">
        Already have an account? <button onClick={onSwitchTab} className="link-btn">Log in</button>
      </div>
    </div>
  );
};

export default RegisterForm;