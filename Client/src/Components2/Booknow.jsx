import React, { useState } from 'react';
import '../Css/Booknow.css';

export default function Booknow() {
  const [alertmsg, setAlertmsg] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    location: '',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertmsg(true);
    setTimeout(() => setAlertmsg(false), 5000); 
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      location: '',
      photo: ''
    });
  };

  return (
    <div>
      <div className='Navbarr'>
        <h1>Book Your Services</h1>
      </div>
      <div id='userdetails'>
        <div id='fillform'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="address">Permanent Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label htmlFor="service">Service:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              <option value="service1">Emergency Services</option>
              <option value="service2">Vehicle Services</option>
            </select>

            <label htmlFor="location">Send Your Current Location Url:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id='p'
              onClick={() => window.open("https://www.google.com/maps", "_blank")}
            >
              Location
            </button>

            <label htmlFor="photo">Drop some Live photos:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleFileChange}
              required
            />

            <button type="submit" id='submit'>Submit</button>

            {alertmsg && (
              <div>
                <p id='submitsuccess'>Form submitted Successfully</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
