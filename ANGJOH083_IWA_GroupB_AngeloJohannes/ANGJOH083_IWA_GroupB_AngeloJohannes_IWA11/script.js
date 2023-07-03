// script.js

// use queryselector to get values
const root_1 = document.querySelector('[data-key="order1"]').getAttribute('data-key')
const biscuits_1 = document.querySelector('[data-biscuits="10"]').getAttribute('data-biscuits')
const donuts_1 = document.querySelector('[data-donuts="13"]').getAttribute('data-donuts')
const pancakes_1 = document.querySelector('[data-pancakes="0"]').getAttribute('data-pancakes')
const status_1 = document.querySelector('[data-delivered="false"]').getAttribute('data-delivered')

const root_2 = document.querySelector('[data-key="order2"]').getAttribute('data-key')
const biscuits_2 = document.querySelector('[data-biscuits="5"]').getAttribute('data-biscuits')
const donuts_2 = document.querySelector('[data-donuts="0"]').getAttribute('data-donuts')
const pancakes_2 = document.querySelector('[data-pancakes="2"]').getAttribute('data-pancakes')
const status_2 = document.querySelector('[data-delivered="false"]').getAttribute('data-delivered')

const root_3 = document.querySelector('[data-key="order3"]').getAttribute('data-key')
const biscuits_3 = document.querySelector('[data-biscuits="12"]').getAttribute('data-biscuits')
const donuts_3 = document.querySelector('[data-donuts="11"]').getAttribute('data-donuts')
const pancakes_3 = document.querySelector('[data-pancakes="15"]').getAttribute('data-pancakes')
const status_3 = document.querySelector('[data-delivered="true"]').getAttribute('data-delivered')

//change output in html
const count = document.getElementsByClassName('count')
count[0].innerHTML = biscuits_1
count[1].innerHTML = donuts_1
count[2].innerHTML = pancakes_1

count[3].innerHTML = biscuits_2
count[4].innerHTML = donuts_2
count[5].innerHTML = pancakes_2

count[6].innerHTML = biscuits_3
count[7].innerHTML = donuts_3
count[8].innerHTML = pancakes_3

//check  status
const deliveryStatus = document.getElementsByClassName('status')
if (status_1 === 'true'){
    deliveryStatus[0].innerText = 'Status: ' + 'Delivered'
} else {
    deliveryStatus[0].innerText = 'Status: ' + 'Pending'
}

if (status_2 === 'true'){
    deliveryStatus[1].innerText = 'Status: ' + 'Delivered'
} else {
    deliveryStatus[1].innerText = 'Status: ' + 'Pending'
}

if (status_3 === 'true'){
    deliveryStatus[2].innerText = 'Status: ' + 'Delivered'
} else {
    deliveryStatus[2].innerText = 'Status: ' + 'Pending'
}