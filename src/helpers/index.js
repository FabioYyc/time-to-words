/* eslint-disable radix */
const englishNumbersForMinutes = [
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
const englishNumberForHours = ['midnight', ...englishNumbersForMinutes.slice(1)];

// expecting time to be a string in the format like '8:15' or '12:30'
const interpretTimeString = (timeString) => {
  const timeStringArr = timeString.split(':');
  const hourPart = parseInt(timeStringArr[0]);
  const minutePart = parseInt(timeStringArr[1]);
  return { hours: hourPart, minutes: minutePart };
};

// choose the comparsion timepoint -> //determine before or after
const determineHour = (hours, minutes) => {
  // if minute pass hour is > 30, then we compare with next hour, return hour and (pass / to)
  if (minutes > 30) return [hours + 1, 'to'];
  // handle when minutes is 0
  return [hours, 'past'];
};

const convertNumberToEnglish = (minutes, numberArr) => numberArr[minutes];

// wording: o'clock, quarter, half, number of minutes
// eslint-disable-next-line arrow-body-style
const convertMinutesToEnglish = (minutes) => {
  return convertNumberToEnglish(minutes > 30 ? 60 - minutes : minutes, englishNumbersForMinutes);
};
const convertHoursToEnglish = (hours) => convertNumberToEnglish(
  hours === 24 ? 0 : hours, englishNumberForHours);

module.exports = {
  interpretTimeString,
  determineHour,
  convertMinutesToEnglish,
  convertNumberToEnglish,
  convertHoursToEnglish,
};
