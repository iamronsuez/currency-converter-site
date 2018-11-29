/**
 * Numbers to Roman converter
 */

const symbols = num =>
({
  4: "iv",
  5: "v",
  6: "vi",
  7: "vii",
  8: "viii",
  9: "ix",
  40: "xl",
  50: "l",
  60: "lx",
  70: "lxx",
  80: "lxxx",
  90: "xc",
  400: "cd",
  500: "d",
  600: "dc",
  700: "dcc",
  800: "dccc",
  900: "cm"
}[num]);

const includes = (hastle, needle) => hastle.indexOf(needle) >= 0;
const multipliers = [1, 10, 100, 1000];
const repeatables = ["i", "x", "c", "m"];

const numberToRoman = (num, fallbackValue) => {
  if (!num) return fallbackValue;
  const number = parseInt(num, 10);
  if (number >= 5000 || number <= 0) return fallbackValue;
  let arr = (number + "").split("").reverse();
  let i = arr.length;
  let result = "";
  do {
    const currentIndex = i - 1;
    const currentDigit = arr[currentIndex];
    const currentValue = currentDigit * multipliers[currentIndex];
    const resolvedSymbol = symbols(currentValue) || fallbackValue
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

 // https://stackoverflow.com/questions/267399/how-do-you-match-only-valid-roman-numerals-with-a-regular-expression
// https://www.codewars.com/kata/58334362c5637ad0bb0001c2
const syllabus = {
  i: 1,
  v: 5,
  x: 10, // xi xii xiii vx xv
  l: 50, // lx lxx lxx
  c: 100, // xc
  d: 500, // cd
  m: 1000 //cm
};

const ROMAN_REGEX_PATTERN = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gi
const replaceChar = str => syllabus[str];
const validExp = str => ROMAN_REGEX_PATTERN.test(str);

const compareNext = (a, b) => {
  return replaceChar(a) < replaceChar(b);
};

const romanToNumber = (chain, fallbackValue) => {
  if (!validExp(chain)) return fallbackValue;
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

export {
  numberToRoman,
  romanToNumber
}
