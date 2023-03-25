const ellipseArea = (width, height) => {
  return (width / 2) * (height / 2) * Math.PI
}

console.log(ellipseArea(1, 2));
console.log(ellipseArea(2, 2));

console.log(Math.round(ellipseArea(3, 2)));

