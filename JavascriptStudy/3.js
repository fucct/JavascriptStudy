square = function sq(x) {
  if (x <= 1) return 1;
  else return x * sq(x - 1);
};
console.log(square(5));
