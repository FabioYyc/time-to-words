const {
  timeStringToNumberPair, 
} = require('./index');

describe('Helper tests', () => {
  it('reads the time string correctly', () => {
    const timeStr = '2:03';
    const { hours, minutes } = timeStringToNumberPair(timeStr);
    expect(hours).toBe(2);
    expect(minutes).toBe(3);
  });
});
