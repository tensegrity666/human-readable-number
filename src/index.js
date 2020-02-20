module.exports = function toReadable (number) {
  const chars = {
    ones: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    tens: ['eleven', 'twelve', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundreds: ['hundred'],
  };

  let toArray = number.toString().split('');
  let toRead = '';

  switch (toArray.length) {
    case 3:
      toRead = `${chars.ones[toArray[0]]} ${chars.hundreds} ${chars.tens[toArray[1]]} ${chars.ones[toArray[2]]}`;
      break;
    case 2:
      toRead = `${chars.tens[toArray[0]]} ${chars.ones[toArray[1]]}`;
      break;
    case 1:
      toRead = `${chars.ones[toArray[0]]}`;
      break;
  }

  return toRead;
}
