import './GameImg.css';

const GameImg = (props) => {
  const { gameId, playerTime, updatePlayerTime } = props;

  return (
    <div className="gameImg-container">
      <div>test - {gameId}</div>
    </div>
  );
};

export default GameImg;
