var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var cInt = parseInt(c);
var dInt = parseInt(d);

var sum = a + b + cInt + dInt + e;

console.log(sum);



var f = '1';
var g = 15;
var h = 8;
var i = "1";

var fInt = parseInt(f);
var iInt = parseInt(i);

var sum2 = fInt * g * h * iInt;
console.log(sum2);

var sum3 = sum / sum2;
console.log(sum3);

document.write(sum3);

//Exercise 2

array = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

console.log(array[1][1], array[4][2], array[5][3], array[2][3], array[2][1]);