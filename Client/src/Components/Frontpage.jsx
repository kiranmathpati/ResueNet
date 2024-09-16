import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import '../App.css';
import '../Css/Frontpage.css';

function Frontpage() {
  const navigate = useNavigate();
  const [showmsg, setshowmsg] = useState(false);
  const { isLoggedIn, useremail, logout } = useAuth();

  const handleRegister = () => {
    navigate('/Register');
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleLogout = () => {
    logout();
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/EmergencyServices');
  };

  const clickonservice = () => {
    if (!isLoggedIn) {
      setshowmsg(true);
    } else {
      navigate('/vehicalservices');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand">RescueNet: Integrated Emergency Services for Vehicle Incidents</a>
          
        </div>
      </nav>
      <div id='login&signup'>
      <div className="d-flex justify-content-end">
            {isLoggedIn ? (
              <>
                <span id='username' className="navbar-text me-2">Welcome, {useremail}</span>
                <button className="btn btn-outline-secondary" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button id="signup" className="btn btn-outline-success me-2" type="button" onClick={handleRegister}>
                  SIGN UP
                </button>
                <button id="login" className="btn btn-outline-secondary" type="button" onClick={handleLogin}>
                  LOGIN
                </button>
                <button id='admin' type="button" onClick={handlesubmit}>ADMIN</button>
              </>
            )}
          </div>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://onlinefirstaid.com/wp-content/uploads/2019/11/Dollarphotoclub_64852647.jpg" className="d-block w-100" alt="Ambulance Services"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Ambulance Services</h5>
              <p>In case of an emergency</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://static.pbcdn.in/cdn/images/bu/motor/how-can-we-use-roadside-assistance-cover-in-car-insurance.jpg" className="d-block w-100" alt="Vehicle Services"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Vehicle Services</h5>
              <p>If vehicles are damaged & Tyres Damage</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://rodaindia.com/assets/img/van.png" className="d-block w-100" alt="Towing Service"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Towing Service</h5>
              <p>24/7 Availability: We offer round-the-clock towing services to ensure help is available whenever you need it.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlllxDqfQNQP2WcKDpOyO6HF2lthcyasMOw&s" className="card-img-top" alt="Placeholder"/>
            <div className="card-body" style={{backgroundColor:'#212529'}}>
              <h5 className="card-title text-white">Emergency services</h5>
              <p className="card-text text-white">Near Hospital, Police Station, Ambulance </p>
              <a href="#" className="btn btn-primary mt-3" onClick={handlesubmit}>Click Here</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNlgI1YJoGzf3xySx3VkNji8IbDjBjQdupA&s" className="card-img-top" alt="Placeholder"/>
            <div className="card-body" style={{backgroundColor:'#212529'}}>
              <h5 className="card-title text-white">Vehicle Services</h5>
              <p className="card-text text-white">All types of vehicle services</p>
              <a href="#" className="btn btn-primary mt-3" onClick={clickonservice}>Click Here</a>
              {showmsg && !isLoggedIn && (
                <div>
                  <p id='loginMessage'>Please Login First</p>
                  <button onClick={handleLogin} id='loginButton'>Login</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
