import { useState, useEffect, useLayoutEffect } from 'react';
import './GameImg.css';
import * as Controller from '../../Controller';

const GameImg = (props) => {
  const { gameId, gameItems, changeItemToFound, playerTime, updatePlayerTime } =
    props;
  const [imageDimensions, setImageDimensions] = useState({});
  const [spotGuessedOnImage, setSpotGuessedOnImage] = useState({});
  useEffect(() => {
    const imageElement = document.querySelector('.gameImg');
    imageElement.addEventListener('click', imageClickListener);
    setImageDimensions({
      width: imageElement.width,
      height: imageElement.height,
    });
  }, []);

  const imageClickListener = (e) => {
    setImageDimensions({ width: e.target.width, height: e.target.height });
    const selectionElement = document.querySelector('.gameImg-selection');
    const selectionWidth = selectionElement.offsetWidth;
    const selectionCoords = Controller.getSelectionCoords(e, selectionWidth);
    selectionElement.style.top = selectionCoords.y + 'px';
    selectionElement.style.left = selectionCoords.x + 'px';
    setSpotGuessedOnImage(Controller.getImageCoords(e));
    selectionElement.classList.toggle('hidden');

    const dropdownElement = document.querySelector(
      '.gameImg-dropdownContainer'
    );
    if (dropdownElement) {
      const dropdownCoords = Controller.getDropdownCoords(e, selectionWidth);
      dropdownElement.style.top = dropdownCoords.y + 'px';
      dropdownElement.style.left = dropdownCoords.x + 'px';
      dropdownElement.classList.toggle('hidden');
    }
  };
  const guess = (e) => {
    const guessedItem = gameItems.find((x) => x.id === e.target.dataset.id);
    const guessIsCorrect = Controller.checkGuess(
      spotGuessedOnImage,
      guessedItem,
      imageDimensions
    );
    if (guessIsCorrect) {
      changeItemToFound(guessedItem);
    }
  };

  const highlightFoundItem = () => {
    return (
      <div className="gameImg-itemBoxesContainer">
        {gameItems.map((x, index) => {
          if (x.isFound) {
            const bounds = Controller.getRenderedItemCoords(x, imageDimensions);
            const headerElement = document.querySelector(
              '.gameHeader-container'
            );
            bounds.yBounds.lower += headerElement.offsetHeight;
            bounds.yBounds.upper += headerElement.offsetHeight;
            return (
              <div
                className="gameImg-itemBox"
                key={index}
                style={{
                  left: bounds.xBounds.lower,
                  top: bounds.yBounds.lower,
                  width: `${bounds.xBounds.upper - bounds.xBounds.lower}px`,
                  height: `${bounds.yBounds.upper - bounds.yBounds.lower}px`,
                }}
              ></div>
            );
          }
        })}
      </div>
    );
  };

  const createImageElement = (gameId) => {
    const imageElement = getImage(gameId);
    return imageElement;
  };
  const createSelectionDropdown = () => {
    if (gameItems.some((x) => !x.isFound)) {
      return (
        <div className="gameImg-dropdownContainer hidden">
          {gameItems
            .filter((x) => !x.isFound)
            .map((item) => (
              <div
                className="gameImg-dropdownItem"
                data-id={item.id}
                onClick={guess}
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      );
    }
    return <></>;
  };

  // DATABASE FUNCS START
  const getImage = (gameId) => {
    return <img className="gameImg" src={require('../../images/pic1.jpg')} />;
  };
  // DATABASE FUNCS END

  return (
    <div className="gameImg-container">
      {createImageElement(gameId)}
      <div className="gameImg-selection hidden"></div>
      {createSelectionDropdown()}
      {highlightFoundItem()}
    </div>
  );
};

export default GameImg;
