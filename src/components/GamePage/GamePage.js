import './GamePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameHeader from './GameHeader';
import GameImg from './GameImg';
import Timer from '../../Timer';
import WinScreen from './WinScreen';
import { getItems } from '../../FirebaseController';

const GamePage = () => {
  const { gameId } = useParams();
  const [playerTime, setPlayerTime] = useState('0:00');
  const [timer, setTimer] = useState(Timer());
  const [gameItems, setGameItems] = useState([{ name: '', isFound: false }]);
  useEffect(() => {
    const fetchItems = async () => {
      const items = (await getItems(gameId)).map((x, index) => ({
        ...x,
        isFound: false,
        id: `${index}`,
      }));
      setGameItems(items);
    };
    fetchItems();
    timer.start();
    setInterval(() => {
      updatePlayerTime(timer.getTimeString());
    }, 100);
  }, []);
  useEffect(() => {
    if (gameItems.every((x) => x.isFound)) {
      timer.stop();
    }
  }, [gameItems]);
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
      {gameItems.every((x) => x.isFound) ? (
        <WinScreen playerTime={playerTime} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default GamePage;
