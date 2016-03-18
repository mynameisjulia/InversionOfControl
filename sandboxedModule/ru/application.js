// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');
/*
setTimeout(function () {
  console.log('300ms timeout');
}, 300);

/*setInterval(function () {
  console.log('100ms passed');
}, 100);
*/
console.log(util.isArray([]));

console.log('Hello from the other side');


var util = require('util');
console.log("I must have called a thousand times");

 module.exports = function() {
  var a={a:3,b:5}
  console.log('From application exported function');
};
module.exports = {
    one:'hi',
    two :2
  }


