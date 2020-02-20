module.exports = function toReadable (number) {
  const chars = {
    tens: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundreds: ['hundred'],
  };

  let toArray = number.toString().split('');
  let toRead = '';
  let tens = [];

  switch (toArray.length) {
    case 3:
      tens = toArray[1].concat(toArray[2]);
      toRead = `${chars.ones[toArray[0]]} ${chars.hundreds} ${chars.tens[toArray[1]]} ${chars.ones[toArray[2]]}`;
      break;
    case 2:
      tens = toArray[0].concat(toArray[1]);
      toRead = `${chars.tens[number]}`;
      break;
    case 1:
      toRead = `${chars.tens[number]}`;
      break;
  }

  return toRead;
}
