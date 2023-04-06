
/*ZADANI 1. */
const ellipseArea = (width, height) => {
  return (width / 2) * (height / 2) * Math.PI
}

console.log(ellipseArea(1, 2));
console.log(ellipseArea(2, 2));

console.log(Math.round(ellipseArea(3, 2)));

/*ZADANI 2. */

const max2 = (cislo1, cislo2) => {
  if (cislo1 > cislo2) {
    return "je vetsi"
  }
  return "je mensi"
}

console.log(max2(2, 5))

/*
const max2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
*/
