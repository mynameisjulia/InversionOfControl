// Файл, демонстрирующий то, как фреймворк создает среду (песочницу) для
// исполнения приложения, загружает приложение, передает ему песочницу в
// качестве глобального контекста и получает ссылу на экспортируемый
// приложением интерфейс. Читайте README.md в нем задания.

// Фреймворк может явно зависеть от библиотек через dependency lookup
var fs = require('fs'),
    vm = require('vm'),
    util = require('util');


var fileName = './application.js';
if (process.argv[2] !== undefined) {
  fileName = process.argv[2];
}

var logfile = 'awesome.log';

function writeToFile(message) {
  fs.appendFile(logfile, `${message}\n`, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

function createFile() {
  fs.writeFile(logfile, '', (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// Создаем контекст-песочницу, которая станет глобальным контекстом приложения
var context = {
  module: {},
  console: {
    log: (message) => {
      const date = new Date();
      const text = `${fileName} ${date.toUTCString()} ${message}`;
      console.log(text);
      writeToFile(text);
    }
  },
setTimeout: setTimeout,
    setInterval: setInterval,
    util: util,
     require: (module) => {
    const date = new Date();
    const text = `${date.toUTCString()} ${module}\n`;
    writeToFile(text);
    return require(module);
  }
};

context.global = context;
var sandbox = vm.createContext(context);

function printHashParams(hash) {
  Object.keys(hash).forEach((item) => {
    if (typeof hash[item] === 'object') {
      printHashParams(hash[item]);
    } else {
      console.log(`${typeof hash[item]} ${hash[item]}`);
    }
  });
}
function printFunctionParams(text){
  console.log(text.toString());

}


fs.readFile(fileName, function(err, src) {
  if (err) {
    return console.log(err);
  }


  createFile();


  var script = vm.createScript(src, fileName);
  script.runInNewContext(sandbox);
// sandbox.module.exports();
 printHashParams(sandbox.module.exports);
 printFunctionParams(sandbox.module.exports);
});
