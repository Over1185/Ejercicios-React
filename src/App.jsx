import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CurrencyConverter from './pages/CurrencyConverter';
import TemperatureConverter from './pages/TemperatureConverter';
import RectangleCalculator from './pages/RectangleCalculator';
import TravelCalculator from './pages/TravelCalculator';
import PostsManager from './pages/PostsManager';
import Teleprompter from './pages/Teleprompter';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/converter" element={<CurrencyConverter />} />
            <Route path="/temperature" element={<TemperatureConverter />} />
            <Route path="/rectangle" element={<RectangleCalculator />} />
            <Route path="/travel" element={<TravelCalculator />} />
            <Route path="/posts" element={<PostsManager />} />
            <Route path="/teleprompter" element={<Teleprompter />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
