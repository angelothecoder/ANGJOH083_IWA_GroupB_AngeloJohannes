const date = 2050;
var identify_roll = "student"
let count = 0

if (date = 2050) {
    console.log("January", " New Year’s Day");
    count = count + 1;
    console.log("March", " Human Rights Day");
    count = count + 1;
    console.log("April", " Family Day");
    count = count + 1;
	console.log("April", " Freedom Day");
    count = count + 1;

    if (identify_roll = "student") {
        console.log("June", " Youth Day");
		count = count + 1;
    }

    console.log("August", " Women’s Day");
    count = count + 1;
	console.log("September", " Heritage Day");
    count = count + 1;
    console.log("December", " Day of Reconciliation");
    count = count + 1;

    if (identify_roll = "parent"){
        console.log(date, " Christmas Day");
		count = count + 1;
    }

    console.log("December", " Day of Goodwill")
	count = count + 1;
}

console.log("Your status is: ",identify_roll);
console.log("The year is: ",date);
console.log("The total holidays is: ", count);