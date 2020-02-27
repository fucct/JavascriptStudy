function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.area = function(x, y, r) {
    return r * r * Math.PI;
  };
}

var c = new Circle(0, 0, 3);
console.log(c.area(0, 0, 3));
