/* eslint-disable radix */
const englishForNumbers = [
  "o'clock",
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quarter',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half',
];
// Same same, but the 0 will be midnight instead of o clock

// expecting time to be a string in the format like '8:15' or '12:30'
const timeStringToNumberPair = (timeString) => {
  const timeStringArr = timeString.split(':');
  const hourPart = parseInt(timeStringArr[0]);
  const minutePart = parseInt(timeStringArr[1]);
  return { hours: hourPart, minutes: minutePart };
};

// choose the comparsion timepoint -> //determine before or after

module.exports = {
  timeStringToNumberPair,
  determineHour,
  englishForNumbers,
};
