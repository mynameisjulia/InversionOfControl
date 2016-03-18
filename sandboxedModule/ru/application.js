// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');

console.log(util.isArray([]));
console.log('Hello from the other side');

setTimeout(function () {
  console.log('2000ms timeout');
}, 2000);

setInterval(function () {
  console.log('1000ms passed');
}, 1000);

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};
