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
      // img width: 1225
      // img height: 812
      name: 'octopus',
      // xBounds: [246, 354],
      // yBounds: [134, 242],
      xBounds: { lowerPercent: 20, upperPercent: 29 },
      yBounds: { lowerPercent: 16, uppderPercent: 30 },
      iconImgPath: '#',
    },
    {
      name: 'sideways "n"',
      // xBounds: [1115, 1185],
      // yBounds: [396, 440],
      xBounds: { lowerPercent: 91, upperPercent: 97 },
      yBounds: { lowerPercent: 49, upperPercent: 54 },
      iconImgPath: '#',
    },
    // {
    //   name: 'pink button',
    //   // xBounds: [127, 161],
    //   // yBounds: [697, 734],
    //   xBounds: { lowerPercent: 10, upperPercent: 13 },
    //   yBounds: { lowerPercent: 86, upperPercent: 90 },
    //   iconImgPath: '#',
    // },
  ];
};
// DATABASE FUNCS END

const GamePage = () => {
  const { gameId } = useParams();
  const [playerTime, setPlayerTime] = useState('0:00');
  const [timer, setTimer] = useState(Timer());
  const [gameItems, setGameItems] = useState(
    getItems(gameId).map((x, index) => ({
      ...x,
      isFound: false,
      id: `${index}`,
    }))
  );
  useEffect(() => {
    timer.start();
    setInterval(() => {
      updatePlayerTime(timer.getTimeString());
    }, 1000);
  }, []);
  const updatePlayerTime = (newTime) => {
    setPlayerTime(newTime);
  };
  const changeItemToFound = (item) => {
    const newGameItemsArray = gameItems.map((x) =>
      x.id === item.id ? { ...x, isFound: true } : x
    );
    setGameItems(newGameItemsArray);
  };

  return (
    <div className="gamePage-container">
      <GameHeader gameItems={gameItems} playerTime={playerTime} />
      <GameImg
        gameId={gameId}
        playerTime={playerTime}
        updatePlayerTime={updatePlayerTime}
        gameItems={gameItems}
        changeItemToFound={changeItemToFound}
      />
    </div>
  );
};

export default GamePage;
