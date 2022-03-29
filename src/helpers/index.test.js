const {
  interpretTimeString, 
  determineHour, 
  convertMinutesToEnglish,
  convertHoursToEnglish,
} = require('./index');

describe('Helper tests', () => {
  it('reads the time string correctly', () => {
    const timeStr = '2:03';
    const { hours, minutes } = interpretTimeString(timeStr);
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
  it('convert minutes to english correctly', () => {
    expect(convertMinutesToEnglish(15)).toBe('quarter');
    expect(convertMinutesToEnglish(30)).toBe('half');
    expect(convertMinutesToEnglish(0)).toBe("o'clock");
    expect(convertMinutesToEnglish(5)).toBe('five');
    expect(convertMinutesToEnglish(31)).toBe('twenty nine');
  });
  it('converts hours to english correctly', () => {
    expect(convertHoursToEnglish(0)).toBe('midnight');
    expect(convertHoursToEnglish(11)).toBe('eleven');
    expect(convertHoursToEnglish(24)).toBe('midnight');
  });
});
