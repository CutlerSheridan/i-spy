import './GameHeader.css';
import { Link } from 'react-router-dom';

const GameHeader = (props) => {
  const { gameItems, playerTime } = props;

  return (
    <div className="gameHeader-container">
      <Link to="/">{'<'} Home</Link>
      <div className="gameHeader-itemsContainer">
        {gameItems.map((item) => (
          <div
            className={`gameHeader-item ${
              item.isFound ? 'gameHeader-item-found' : 'gameHeader-item-unfound'
            }`}
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="timer">{playerTime}</div>
    </div>
  );
};

export default GameHeader;
