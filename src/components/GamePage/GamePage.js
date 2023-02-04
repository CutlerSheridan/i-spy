import './GamePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameHeader from './GameHeader';
import GameImg from './GameImg';
import Timer from '../../Timer';

// DATABASE FUNCS START
const getItems = (gameId) => {
  return [
    {
      name: 'octopus',
      xBounds: [306, 368],
      yBounds: [136, 247],
      iconImgPath: '#',
    },
    {
      name: 'purple crayon',
      xBounds: [852, 992],
      yBounds: [542, 711],
      iconImgPath: '#',
    },
  ];
};
// DATABASE FUNCS END

const GamePage = () => {
  const { gameId } = useParams();
  const [playerTime, setPlayerTime] = useState('0:00');
  const [timer, setTimer] = useState(Timer());
  const [gameItems, setGameItems] = useState(
    getItems(gameId).map((x) => ({ ...x, isFound: false }))
  );
  const updatePlayerTime = (newTime) => {
    setPlayerTime(newTime);
  };
  useEffect(() => {
    timer.start();
    setInterval(() => {
      updatePlayerTime(timer.getTimeString());
    }, 1000);
  }, []);

  return (
    <div className="gamePage-container">
      <GameHeader gameItems={gameItems} playerTime={playerTime} />
      <GameImg
        gameId={gameId}
        playerTime={playerTime}
        updatePlayerTime={updatePlayerTime}
        gameItems={gameItems}
      />
    </div>
  );
};

export default GamePage;
