module.exports = function toReadable (number) {
  function toReadable(number) {
    const chars = {
      ones: ['zero', 'one', 'two, three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      tens: ['eleven', 'twelve', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      hundreds: ['hundred'],
    };
    let toArray = number.toString().split('');

    switch (toArray.length) {
      case 3:

      case 2:

      case 1:
    }

    return toArray;
  }
}
