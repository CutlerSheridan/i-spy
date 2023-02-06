import {
  getImageCoords,
  getDropdownCoords,
  getRenderedItemCoords,
  checkGuess,
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
describe('getRenderedItemCoords', () => {
  it("converts item object's % bounds into ints", () => {
    const item = {
      xBounds: { lowerPercent: 20, upperPercent: 25 },
      yBounds: { lowerPercent: 50, upperPercent: 75 },
    };
    const imageSize = { width: 1000, height: 800 };
    expect(getRenderedItemCoords(item, imageSize)).toEqual({
      xBounds: { lower: 200, upper: 250 },
      yBounds: { lower: 400, upper: 600 },
    });
  });
});
describe('checkGuess', () => {
  it('guess succeeds', () => {
    const guess = { x: 225, y: 500 };
    const item = {
      xBounds: { lowerPercent: 20, upperPercent: 25 },
      yBounds: { lowerPercent: 50, upperPercent: 75 },
    };
    const imageDimensions = {
      width: 1000,
      height: 800,
    };
    expect(checkGuess(guess, item, imageDimensions)).toBe(true);
  });
  it('guess fails because too far down on img', () => {
    const guess = { x: 225, y: 605 };
    const item = {
      xBounds: { lowerPercent: 20, upperPercent: 25 },
      yBounds: { lowerPercent: 50, upperPercent: 75 },
    };
    const imageDimensions = {
      width: 1000,
      height: 800,
    };
    expect(checkGuess(guess, item, imageDimensions)).toBe(false);
  });
  it('guess failse because too far left on img', () => {
    const guess = { x: 195, y: 500 };
    const item = {
      xBounds: { lowerPercent: 20, upperPercent: 25 },
      yBounds: { lowerPercent: 50, upperPercent: 75 },
    };
    const imageDimensions = {
      width: 1000,
      height: 800,
    };
    expect(checkGuess(guess, item, imageDimensions)).toBe(false);
  });
});
