const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let leoOwe = null
let sarahOwe = null

if (parseFloat(leoBalance) < 0) {
    leoOwe = leoBalance * -1;
  }

  if (parseFloat(sarahBalance) < 0) {
    sarahOwe = sarahBalance * -1;
  }


const totalAmountOwed = leoOwe + sarahOwe

const leo = leoName + " " + leoSurname + " (Owed: R " + leoOwe.toFixed(2).toString() + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: R " + sarahOwe.toFixed(2).toString() + ")"
const total = "Total amount owed: R " + totalAmountOwed.toFixed(2).toString()

console.log(leo, "\n", sarah, "\n", divider, "\n", total, "\n", divider)