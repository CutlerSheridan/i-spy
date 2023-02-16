import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <p>This is home</p>
      <Link to="/game/game1">Go to game 1</Link>
      <Link to="/game/game2">Go to game 2</Link>
    </div>
  );
};

export default Home;
