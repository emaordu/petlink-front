import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Inicio from './pages/Inicio';
import './App.css';
import { NavBar } from './components/UI/NavBar';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;