const readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,
  read: function() {
    this.a = parseFloat(readlineSync.question('Какое первое значение?: '));
    this.b = parseFloat(readlineSync.question('Какое второе значение?: '));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

calculator.read(); 
console.log('Сумма: ' + calculator.sum()); 
console.log('Произведение: ' + calculator.mul()); 

module.exports = calculator;