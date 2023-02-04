import * as Controller from './Controller';

describe('getImageCoords', () => {
  it('returns correct coordinate', () => {
    const e = {
      pageX: 100,
      target: { offsetX: 5 },
      pageY: 250,
      target: { offsetY: 23 },
    };
    const coords = Controller.getImageCoords(e);
    expect(coords.x).toBe(95);
    expect(coords.y).toBe(227);
  });
});
