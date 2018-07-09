'use strict';

var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
var saludito = users.filter (function (premium){
  return premium.isPremium === true;
});
console.log(saludito);
