const {
  convertTimeToWords,
} = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles after half hour - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins and is quarter - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles times after 30 mins and is not quarter - 2:44', () => {
    const timeInWords = convertTimeToWords('2:44');
    expect(timeInWords).toBe('sixteen to three');
  });
  it('Handles times before 30 mins and is quarter - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });
  it('Handles times before 30 mins and is not quarter - 2:14', () => {
    const timeInWords = convertTimeToWords('2:14');
    expect(timeInWords).toBe('fourteen past two');
  });
  it('Handles times when right on the hour - 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });
  it('Handles times before midnight within 30 minutes - 11:45', () => {
    const timeInWords = convertTimeToWords('23:45');
    expect(timeInWords).toBe('quarter to midnight');
  });
  it('Handles times after midnight within 30 minutes - 0:10', () => {
    const timeInWords = convertTimeToWords('00:10');
    expect(timeInWords).toBe('ten past midnight');
  });
});
