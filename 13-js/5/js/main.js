'use strict';

var pins = [2389, 2384, 2837, 5232, 8998];

var password = pins.filter (function (pares){
  return pares % 2 === 0;
});

console.log(password);
