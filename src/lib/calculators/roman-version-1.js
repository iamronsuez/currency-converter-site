const syllabus = {
  i: 1,
  v: 5,
  x: 10, // xi xii xiii vx xv
  l: 50, // lx lxx lxx
  c: 100, // xc
  d: 500, // cd
  m: 1000 //cm
};


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

const validExp = str => /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/gi.test(str);

const repeatables = ["i", "x", "c", "m"];

const replaceChar = str => syllabus[str];

export default {
  validExp,
  symbols,
  syllabus,
  repeatables,
  replaceChar
}
