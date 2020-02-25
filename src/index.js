module.exports = function toReadable (number) {
  const chars = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    'hundred': 'hundred',
  };

  const toArray = number.toString().split('');
  let toRead = '';

  let hundreds = 0;
  let tens = 0;
  let singles = 0;

  switch (toArray.length) {
    case 3:
      singles = toArray[2];
      tens = toArray[1] * 10;
      hundreds = toArray[0];
      console.log(tens)

      if (toArray[1] === '0' && toArray[2] === '0') {
        toRead = `${chars[hundreds]} ${chars['hundred']}`;
      } else if (toArray[1] === '0') {
        toRead = `${chars[hundreds]} ${chars['hundred']} ${chars[singles]}`;
      } else if (toArray[1] === '1') {
        tens = toArray[1] + toArray[2];
        toRead = `${chars[hundreds]} ${chars['hundred']} ${chars[tens]}`;
      } else if (toArray[2] === '0') {
        tens = toArray[1] + toArray[2];
        toRead = `${chars[hundreds]} ${chars['hundred']} ${chars[tens]}`;
      } else {
        toRead = `${chars[hundreds]} ${chars['hundred']} ${chars[tens]} ${chars[singles]}`;
      }

      break;
    case 2:
      singles = toArray[1];
      tens = toArray[0] * 10;
      if (toArray[0] === '1' || toArray[1] === '0') {
        toRead = `${chars[number]}`;
      } else {
        toRead = `${chars[tens]} ${chars[singles]}`;
      }
      break;
    case 1:
      toRead = `${chars[number]}`;
      break;
  }

  return toRead;
}
