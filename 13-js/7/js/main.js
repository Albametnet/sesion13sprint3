'use strict';
var times = [56, 9, 45, 28, 35];

var result = times.reduce(function(acc, number){
  return acc + number;
}, 0);
console.log(result/times.length);