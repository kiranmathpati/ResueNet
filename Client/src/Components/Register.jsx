
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      // Server request
      const response = await axios.post('http://localhost:4000/Register', { name, email, password });

      // Successful registration
      console.log(response.data); // Log the response for debugging
      navigate('/Login'); // Navigate to login page after successful registration
    } catch (err) {
      // Handle specific errors from the server
      if (err.response && err.response.status === 400) {
        setError(err.response.data.error); // Display specific error message from server
      } else {
        setError('Registration failed. Please try again later.'); // Fallback error message
      }
    }
  };

  return (
    <div className="parent">
      <div className="container" style={{ maxWidth: '400px',height: '450px' }}>
        <div className="menu">Register Here</div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">Enter Your Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Enter Your Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Enter Your Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" style={{width: '90px'}} className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
