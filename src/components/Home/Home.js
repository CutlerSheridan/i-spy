import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>I Spy</h1>
      <p className="home-intro">
        Choose a picture, then try to find all the hidden objects. When you're
        done, submit your time and see how you rank on the leaderboard!
      </p>
      <div className="home-gameLinks">
        <Link to="/game/game1">Objects in Void</Link>
        <Link to="/game/game2">Secret Laboratory</Link>
      </div>
    </div>
  );
};

export default Home;
