import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Politicians');
    };
    const handleSubmit1 = (e) => {
        e.preventDefault();
        navigate('/Cricketers');
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        navigate('/Cities');
    };

    return (
        <>   
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                <div className="container-md">
                    <a className="navbar-brand" href="#" style={{ color: '#ffffff' }}>INDIA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: '#ffffff' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#government" style={{ color: '#ffffff' }}>Government</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sports" style={{ color: '#ffffff' }}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cities" style={{ color: '#ffffff' }}>Cities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#symbols" style={{ color: '#ffffff' }}>National Symbols</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <form>
                <div className="card" id="government">
                    <div className="card-header">
                        INDIAN GOVERNMENT
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Cabinet Ministers</h5>
                        <p className="card-text">General Election to Parliamentary Constituencies</p>
                        <a href="#" className="btn btn-primary" onClick={handleSubmit}>Click To Know Candidates</a>
                    </div>
                </div>
                <div className="card" id="sports">
                    <div className="card-header">
                        SPORTS
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">INDIAN CRICKET TEAM</h5>
                        <p className="card-text">Players of Indian cricket</p>
                        <a href="#" className="btn btn-primary" onClick={handleSubmit1}>Click To Know</a>
                    </div>
                </div>
                <div className="card" id="cities">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">INDIAN CITIES</h5>
                        <p className="card-text">Indian Cities To Visit</p>
                        <a href="#" className="btn btn-primary" onClick={handleSubmit2}>Click To Know More</a>
                    </div>
                </div>
                <div className="card" id="symbols">
                    <div className="card-header">
                        NATIONAL SYMBOLS
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">National Symbols of India</h5>
                        <p className="card-text">Discover the national symbols that represent the rich heritage and culture of India.</p>
                        <ul>
                            <li><strong>National Flag:</strong> The Tiranga</li>
                            <li><strong>National Emblem:</strong> Lion Capital of Ashoka</li>
                            <li><strong>National Anthem:</strong> Jana Gana Mana</li>
                            <li><strong>National Song:</strong> Vande Mataram</li>
                            <li><strong>National Animal:</strong> Bengal Tiger</li>
                            <li><strong>National Bird:</strong> Indian Peacock</li>
                            <li><strong>National Flower:</strong> Lotus</li>
                            <li><strong>National Tree:</strong> Banyan</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </form>
        </>
    );
}
