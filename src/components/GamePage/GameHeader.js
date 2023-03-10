import './GameHeader.css';
import { Link } from 'react-router-dom';

const GameHeader = (props) => {
  const { gameItems, playerTime } = props;

  return (
    <div className="gameHeader-container">
      <Link className="gameHeader-link" to="/">
        {'<'} Home
      </Link>
      <div className="gameHeader-itemsContainer">
        {gameItems.map((item, index) => (
          <div className="gameHeader-itemGroup" key={item.name}>
            <div
              className={`gameHeader-item ${
                item.isFound
                  ? 'gameHeader-item-found'
                  : 'gameHeader-item-unfound'
              }`}
            >
              {item.name}
            </div>
            <div>{index === gameItems.length - 1 ? '' : ', '}</div>
          </div>
        ))}
      </div>
      <div className="gameHeader-timer">
        Timer:{'  '}
        {playerTime}
      </div>
    </div>
  );
};

export default GameHeader;
