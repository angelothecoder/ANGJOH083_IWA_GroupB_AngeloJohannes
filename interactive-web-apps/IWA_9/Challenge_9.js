const salary = 4000;
const lodging = 'apartment';
const size = 'large';

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport:  10.2,
}

const tax = {
  734: '3%',
  234: '20%',
  913: '12%',
  415: '38%',
  502: '42%',
}

const rent = {
  'none': 0,
  'small-room': 200,
  'large-room': 300,
  'small-apartment': 400,
  'large-apartment': 800,
  'small-house': 1200,
  'large-house': 2400,
}

// You can change below however you want
const taxPercentageNumber = tax[913];
let taxAsDecimal = 0;

switch (taxPercentageNumber) {
  case '3%': taxAsDecimal = 3 / 100;
  break;
  case '20%': taxAsDecimal = 20 / 100;
  break;
  case '12%': taxAsDecimal = 12 / 100;
  break;
  case '38%': taxAsDecimal = 38 / 100;
  break;
  case '42%': taxAsDecimal = 42 / 100;
}

const startingAfterTax = salary - salary * taxAsDecimal;
const type = size + '-' + lodging;
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type];
console.log(balance.toFixed(2));