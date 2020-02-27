var p1 = { x: 1, y: 2 };
var p2 = { x: 2, y: 5 };

console.log(dist(p1, p2));

function dist(a, b) {
  var xx = Math.pow(a.x - b.x, 2);
  var yy = Math.pow(a.y - b.y, 2);

  return Math.sqrt(xx + yy);
}
