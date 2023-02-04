import './GameHeader.css';
import { Link } from 'react-router-dom';

const GameHeader = (props) => {
  const { gameItems, playerTime } = props;

  return (
    <div className="gameHeader-container">
      <Link to="/">{'<'} Home</Link>
      <div className="gameHeader-itemsContainer">
        {gameItems.map((item) => (
          <div className="gameHeader-item" key={item.name}>
            {item.name}, {`${item.isFound}`}
          </div>
        ))}
      </div>
      <div className="timer">{playerTime}</div>
    </div>
  );
};

export default GameHeader;
