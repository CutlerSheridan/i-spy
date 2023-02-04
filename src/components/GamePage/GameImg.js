import { useEffect } from 'react';
import './GameImg.css';
import * as Controller from '../../Controller';

const GameImg = (props) => {
  const { gameId, gameItems, playerTime, updatePlayerTime } = props;
  useEffect(() => {
    const imageElement = document.querySelector('.gameImg');
    imageElement.addEventListener('click', imageClickListener);
  }, []);

  const imageClickListener = (e) => {
    const imageCoords = Controller.getImageCoords(e);
    const selectionElement = document.querySelector('.gameImg-selection');
    const selectionWidth = selectionElement.offsetWidth;
    const selectionCoords = Controller.getSelectionCoords(e, selectionWidth);
    selectionElement.style.top = selectionCoords.y + 'px';
    selectionElement.style.left = selectionCoords.x + 'px';
    const dropdownElement = document.querySelector(
      '.gameImg-dropdownContainer'
    );
    const dropdownCoords = Controller.getDropdownCoords(e, selectionWidth);
    dropdownElement.style.top = dropdownCoords.y + 'px';
    dropdownElement.style.left = dropdownCoords.x + 'px';
    selectionElement.classList.remove('hidden');
    dropdownElement.classList.remove('hidden');
    // add event listener to body that hides selection
    console.log(imageCoords);
  };

  const createImageElement = (gameId) => {
    const imageElement = getImage(gameId);
    return imageElement;
  };
  const createSelectionDropdown = () => {
    return (
      <div className="gameImg-dropdownContainer">
        {gameItems.map((item) => (
          <div className="gameImg-dropdownItem" key={item.name}>
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  // DATABASE FUNCS START
  const getImage = (gameId) => {
    return <img className="gameImg" src={require('../../images/pic1.jpg')} />;
  };
  // DATABASE FUNCS END

  return (
    <div className="gameImg-container">
      {createImageElement(gameId)}
      <div className="gameImg-selection"></div>
      {createSelectionDropdown()}
    </div>
  );
};

export default GameImg;
