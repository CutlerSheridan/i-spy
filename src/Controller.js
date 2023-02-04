const getImageCoords = (e) => {
  return {
    x: e.pageX - e.target.offsetLeft,
    y: e.pageY - e.target.offsetTop,
  };
};
const getSelectionCoords = (e, width) => {
  const pageCoords = getPageCoords(e);
  return {
    x: pageCoords.x - width / 2,
    y: pageCoords.y - width / 2,
  };
};
const getDropdownCoords = (e, width) => {
  const pageCoords = getPageCoords(e);
  // check if too far to one edge
  return {
    x: pageCoords.x + width / 2,
    y: pageCoords.y - width / 2,
  };
};
const getPageCoords = (e) => {
  return {
    x: e.pageX,
    y: e.pageY,
  };
};

export { getImageCoords, getSelectionCoords, getDropdownCoords };
