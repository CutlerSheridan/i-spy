import './GameHeader.css';
import { Link } from 'react-router-dom';

const GameHeader = (props) => {
  const { charactersFound, playerTime } = props;

  return (
    <div className="gameHeader-container">
      <Link to="/">{'<'} Home</Link>
      <div>{`${charactersFound}`}</div>
      <div className="timer">{playerTime}</div>
    </div>
  );
};

export default GameHeader;
