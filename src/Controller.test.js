import {
  getImageCoords,
  getSelectionCoords,
  getDropdownCoords,
} from './Controller';

describe('getImageCoords', () => {
  it('returns correct coordinate', () => {
    const e = {
      pageX: 100,
      target: { offsetLeft: 5, offsetTop: 23 },
      pageY: 250,
    };
    expect(getImageCoords(e)).toEqual({ x: 95, y: 227 });
  });
});
describe('getDropdownCoords', () => {
  it('returns coord on right side', () => {
    const e = {
      pageX: 500,
      pageY: 200,
      target: { width: 1000 },
    };
    const selectionWidth = 100;
    expect(getDropdownCoords(e, selectionWidth)).toEqual({ x: 550, y: 150 });
  });
  it('returns coord when forced to left side', () => {
    const e = {
      pageX: 900,
      pageY: 200,
      target: { width: 1000 },
    };
    const selectionWidth = 100;
    expect(getDropdownCoords(e, selectionWidth)).toEqual({ x: 700, y: 150 });
  });
});
