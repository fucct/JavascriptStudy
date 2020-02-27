var concat = function(param) {
  var p = "";
  for (var i = 0; i < arguments.length; i++) {
    p += arguments[i];
  }
  return p;
};

console.log(concat("I", "hate", "you", "!"));
