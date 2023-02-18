import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import GamePage from './components/GamePage/GamePage';

const App = () => {
  return (
    <Router basename="/i-spy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
