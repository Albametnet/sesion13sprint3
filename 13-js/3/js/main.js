'use strict';

var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
var saludito = users.map (function (saludar){
  if (saludar.isPremium === true){
    return ('Bienvenida ' + saludar.name  + ', gracias por confiar en nosotros ');
  } else {
    return ('Bienvenida  ' + saludar.name );
  }
});
console.log(saludito);
