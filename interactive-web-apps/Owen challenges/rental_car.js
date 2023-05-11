const daysRent = 10;
const dailyCost = 40
let totalCost = daysRent  * dailyCost

if (daysRent >= 7) {
    totalCost = totalCost - 50
  }

  if (daysRent >= 3 && daysRent <7) {
    totalCost = totalCost - 20
  }

  console.log("Your total cost will be $" + totalCost)

