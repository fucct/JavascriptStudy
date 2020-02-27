x = 10;
eval("x++");
console.log(x);

var equation = "return x*x*Math.PI;";
var y = "function f(x) { " + equation + "}";
eval(y);
console.log(f(3));
