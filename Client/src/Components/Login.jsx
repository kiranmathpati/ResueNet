import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/Login", { email, password });
      console.log(response.data);
      login(response.data.username); // Assuming the response contains the username
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.error);
      } else {
        setError("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="parent" style={{backgroundColor:"#212529"}}>
      <div className="container1 " style={{backgroundColor:"#1b263b"}}>
        <div className="menu text-white">Login Here</div>
        <form onSubmit={handleSubmit}>
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
          {error && <p className="error">{error}</p>}
          <button type="submit" style={{marginLeft:"120px"}} className="">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
