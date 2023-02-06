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
  // const dropdownElement = document.querySelector('.gameImg-dropdownContainer');
  const dropdownWidth = 150;
  let xCoord = pageCoords.x + selectionWidth / 2;
  if (xCoord + dropdownWidth >= imgWidth) {
    xCoord = pageCoords.x - selectionWidth / 2 - dropdownWidth;
  }
  console.log('clickedCoords');
  console.log(pageCoords);
  console.log('dropdown left start');
  console.log(xCoord);
  console.log('img width');
  console.log(imgWidth);
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

export { getImageCoords, getSelectionCoords, getDropdownCoords };
