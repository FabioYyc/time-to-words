const {
  timeStringToNumberPair, 
  determineHour, 
} = require('./index');

describe('Helper tests', () => {
  it('reads the time string correctly', () => {
    const timeStr = '2:03';
    const { hours, minutes } = timeStringToNumberPair(timeStr);
    expect(hours).toBe(2);
    expect(minutes).toBe(3);
  });
  it('determine the hour correctly when is past', () => {
    const testTime = [2, 10];
    const [hour, joiningWord] = determineHour(testTime[0], testTime[1]);
    expect(hour).toBe(2);
    expect(joiningWord).toBe('past');
  });
  it('determine the hour correctly when is to', () => {
    const testTime = [2, 31];
    const [hour, joiningWord] = determineHour(testTime[0], testTime[1]);
    expect(hour).toBe(3);
    expect(joiningWord).toBe('to');
  });
});
