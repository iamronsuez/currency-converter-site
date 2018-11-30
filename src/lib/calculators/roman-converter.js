/**
 * Numbers to Roman converter
 */


const numberToRoman = (symbols, repeatables) => (num, fallbackValue) => {
  if (!num) return fallbackValue;
  // utilities
  const includes = (hastle, needle) => hastle.indexOf(needle) >= 0;
  const multipliers = [1, 10, 100, 1000];

  const number = parseInt(num, 10);
  if (number >= 5000 || number <= 0) return fallbackValue;
  let arr = (number + "").split("").reverse();
  let i = arr.length;
  let result = "";
  do {
    const currentIndex = i - 1;
    const currentDigit = arr[currentIndex];
    const currentValue = currentDigit * multipliers[currentIndex];
    const resolvedSymbol = symbols(currentValue)
    result += resolvedSymbol
      ? resolvedSymbol
      : includes(repeatables, repeatables[currentIndex])
      ? repeatables[currentIndex].repeat(arr[currentIndex])
      : repeatables[currentIndex];
    i -= 1;
  } while (i > 0);

  return result.toUpperCase();
};



/**
 * Romans to Number Converter
 */



const romanToNumber = (validator, replaceChar) => (chain, fallbackValue) => {

  const compareNext = (a, b) => {
    return replaceChar(a) < replaceChar(b);
  };

  if (!validator(chain)) return fallbackValue;
  const result = chain
    .toLowerCase()
    .split("")
    .reduce((acc, curr, index, str) => {
      const value = replaceChar(curr);
      if (compareNext(curr, str[index + 1])) return acc - value;
      return acc + value;
    }, 0);
  return result;
};


export default ({validator, symbols, replaceChar, repeatables}) => {
  return {
    numberToRoman: numberToRoman(symbols, repeatables),
    romanToNumber: romanToNumber(validator, replaceChar)
  }
}
