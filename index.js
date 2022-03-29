const {
  interpretTimeString,
  determineHour,
  convertMinutesToEnglish,
  convertHoursToEnglish,
} = require('./src/helpers');

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  const { hours, minutes } = interpretTimeString(time);
  const [hourBase, joiningWord] = determineHour(hours, minutes);
  const minutesInEnglish = convertMinutesToEnglish(minutes);
  const hourInEnglish = convertHoursToEnglish(hourBase);
  // three past two (when minutes is not zero) = number in english + joiningWord  +hour
  if (minutes !== 0) { return [minutesInEnglish, joiningWord, hourInEnglish].join(' '); }

  return [hourInEnglish, minutesInEnglish].join(' ');
}

module.exports = {
  convertTimeToWords,
};
