import './GamePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameHeader from './GameHeader';
import GameImg from './GameImg';
import Timer from '../../Timer';

const GamePage = () => {
  const { gameId } = useParams();
  const [charactersFound, setCharactersFound] = useState([false, false, false]);
  const [playerTime, setPlayerTime] = useState('0:00');
  const [timer, setTimer] = useState(Timer());
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
      <GameHeader charactersFound={charactersFound} playerTime={playerTime} />
      <GameImg
        gameId={gameId}
        playerTime={playerTime}
        updatePlayerTime={updatePlayerTime}
      />
    </div>
  );
};

export default GamePage;
