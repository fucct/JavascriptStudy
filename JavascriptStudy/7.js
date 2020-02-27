var array = [1, 2, 3];
array[5] = 5;

for (var i = 0; i < array.length; i++) {
  console.log(array.hasOwnProperty(i));
}
