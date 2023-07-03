const free_warning = "Free shipping only applies to single customer orders";
const banned_warning = "Unfortunately we do not ship to your country of residence";
const none_selected = 0;

const location = "RSA";
const customers = 1;
let shipping = 0;
let currency = "null";

if (location === "RSA") {

    currency = "R";
    shipping = 400;
}

else if (location === "NAM") {

    currency = "$";
    shipping = 600;

    } 
    
    else {

    currency = "$";
    shipping = 800;
    }

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * none_selected;
const batteries = 35 * 2;
const pens = 5 * none_selected; 

if ( (shoes + batteries + pens + shirts > 1000) && (location === "NAM") && (customers < 2) && (customers > 0)){
    shipping = 0
} 

else if ( (shoes + batteries + pens + shirts > 1000) && (location === "RSA") && (customers < 2) && (customers > 0)){
    shipping = 0;
} 

else if (customers>2) {
    console.log(free_warning);
} 
else if (location === "NK"){
    console.log(banned_warning);
}

console.log('Price: ', currency, shoes + toys + shirts + batteries + pens + shipping);
