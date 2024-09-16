import React from 'react';
import '../Css/Vehicalservices.css';
import { useNavigate } from 'react-router-dom';

export default function VehicleServices() {
  const navigator = useNavigate();
  const handlebooknow = () => {
    navigator("/Booknow");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">RescueNet: Vehicle Services</a>
        </div>
      </nav>
      <div>
        <div className='services'>
        <div id='carservice'>
          <div id='img1'>
            <img src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif" className="card-img-top" alt="Placeholder" />
          </div>
          <h1>Car Services</h1>
          <p>We provide Car services. Includes repair, maintenance, and inspection, especially when a vehicle breaks down in the middle of the road.</p>
        <button onClick={handlebooknow}>Book Now</button>
        </div>
      </div>
      <div id='BikeService'>
        <div id='img2'>
        <img src="https://bromech.devakya.com/wp-content/uploads/2023/04/bike.gif" className="card-img-top" alt="Placeholder" />
        </div>
        <h1>Bike Services</h1>
        <p>We provide Bike services. Includes assistance when your bike won't start, encounters problems, runs out of fuel, or has a flat tire.</p>
        <button onClick={handlebooknow}>Book Now</button>
      </div>
      <div id='Towing'>
        <div id='img3'>
        <img src="https://i.pinimg.com/originals/2a/5d/be/2a5dbee9ff2391b61044c3b75c8c874e.gif" className="card-img-top" alt="Placeholder" />
        </div>
        <h1>Towing</h1>
        <p>We provide tow vehicles. Includes assistance when your bike won't start, encounters problems, runs out of fuel, or has a flat tire.</p>
        <button   onClick={handlebooknow}>Book Now</button>
      </div>
      </div>
    </div>
  );
}

// img1 : <img src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif" className="card-img-top" alt="Placeholder" />
// img2 : <img src="https://bromech.devakya.com/wp-content/uploads/2023/04/bike.gif" className="card-img-top" alt="Placeholder" />
// img3 : <img src="https://i.pinimg.com/originals/2a/5d/be/2a5dbee9ff2391b61044c3b75c8c874e.gif" className="card-img-top" alt="Placeholder" />
