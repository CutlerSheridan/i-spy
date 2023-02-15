const getImageCoords = (e) => {
  return {
    x: e.pageX - e.target.offsetLeft,
    y: e.pageY - e.target.offsetTop,
  };
};
const getSelectionCoords = (e, selectionWidth) => {
  const pageCoords = getPageCoords(e);
  return {
    x: pageCoords.x - selectionWidth / 2,
    y: pageCoords.y - selectionWidth / 2,
  };
};
const getDropdownCoords = (e, selectionWidth) => {
  const pageCoords = getPageCoords(e);
  const imgWidth = e.target.width;
  const dropdownWidth = 150;
  let xCoord = pageCoords.x + selectionWidth / 2;
  if (xCoord + dropdownWidth >= imgWidth) {
    xCoord = pageCoords.x - selectionWidth / 2 - dropdownWidth;
  }
  // console.log('image spot clicked', getImageCoords(e));
  // console.log('img width', imgWidth);
  // console.log('img height', e.target.height);
  return {
    x: xCoord,
    y: pageCoords.y - selectionWidth / 2,
  };
};
const getPageCoords = (e) => {
  return {
    x: e.pageX,
    y: e.pageY,
  };
};
const checkGuess = (guess, item, imageSize) => {
  const itemBounds = getRenderedItemCoords(item, imageSize);
  if (
    guess.x < itemBounds.xBounds.lower ||
    guess.y < itemBounds.yBounds.lower ||
    guess.x > itemBounds.xBounds.upper ||
    guess.y > itemBounds.yBounds.upper
  ) {
    return false;
  }
  return true;
};
const getRenderedItemCoords = (item, imageSize) => {
  const { width, height } = imageSize;
  return {
    xBounds: {
      lower: (item.xBounds.lowerPercent * width) / 100,
      upper: (item.xBounds.upperPercent * width) / 100,
    },
    yBounds: {
      lower: (item.yBounds.lowerPercent * height) / 100,
      upper: (item.yBounds.upperPercent * height) / 100,
    },
  };
};

export {
  getImageCoords,
  getSelectionCoords,
  getDropdownCoords,
  getRenderedItemCoords,
  checkGuess,
};
