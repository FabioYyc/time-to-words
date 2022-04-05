const {
  timeStringToNumberPair,
  englishForNumbers,
} = require('./src/helpers');

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  const { minutes } = timeStringToNumberPair(time);
  let { hours } = timeStringToNumberPair(time)
  let joiningWord = 'past';
  if (minutes > 30) {
    hours += 1;
    joiningWord = 'to';
  }
  const hoursInEnglish = hours % 24 === 0 ? 'midnight' : englishForNumbers[hours];

  if (minutes === 0) return `${hoursInEnglish} o'clock`;

  const minutesInEnglish = englishForNumbers[minutes > 30 ? 60 - minutes : minutes];

  return `${minutesInEnglish} ${joiningWord} ${hoursInEnglish}`;
}

module.exports = {
  convertTimeToWords,
};
