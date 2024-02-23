import { Link } from 'react-router-dom';
import './Home.css';
import magnifyingGlass from '../../images/magnifying-glass.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-splashContainer">
        <img
          className="home-splash"
          // src="https://upload.wikimedia.org/wikipedia/commons/2/2f/COVID19_illustrationPack_035.png"
          src={magnifyingGlass}
        />
      </div>
      <h1>I Spy!</h1>
      <p className="home-intro">
        Choose a picture, then try to find all the hidden objects. When you're
        done, submit your time and see how you rank on the leaderboard!
      </p>
      <div className="home-gameLinks">
        <Link to="/game/game1">Objects in Void</Link>
        <Link to="/game/game2">Secret Laboratory</Link>
      </div>
      <div className="credit-container">
        <div className="credit">Made by Cutler Sheridan.</div>
        <div className="credit">
          See more <a href="https://cutlersheridan.github.io/portfolio">here</a>
          .
        </div>
      </div>
    </div>
  );
};

export default Home;
