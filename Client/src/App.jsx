import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Frontpage from './Components/Frontpage';
import Home from './Components/Home';
import EmergencyServices from './Components/EmergencyServices';
import Callus from './Components/Callus';
import { AuthProvider } from './Components/AuthContext';
import Vehicalservices from './Components2/Vehicalservices';
import Booknow from './Components2/Booknow';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AuthProvider> {/* Wrap the AuthProvider around your Routes */}
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EmergencyServices" element={<EmergencyServices />} />
          <Route path="/Callus" element={<Callus />} />
          <Route path="/Vehicalservices" element={<Vehicalservices />} />
          <Route path="/Booknow" element={<Booknow />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
