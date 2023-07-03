// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const color_status = document.getElementsByClassName('status')

const status_books = document.getElementsByClassName('status')
const reserve_books = document.getElementsByClassName('reserve')
const checkout_books = document.getElementsByClassName('checkout')
const checkin_books = document.getElementsByClassName('checkin')

const status_book1 = status_books[0].innerHTML
const reserve_book1 = reserve_books[0]
const checkout_book1 = checkout_books[0]
const checkin_book1 = checkin_books[0]
//checkin_books[0].style.color = 'grey'

const status_book2 = status_books[1].innerHTML
const reserve_book2 = reserve_books[1]
const checkout_book2 = checkout_books[1]
const checkin_book2 = checkin_books[1]
//checkin_books[1].style.color = 'grey'

const status_book3 = status_books[2].innerHTML
const reserve_book3 = reserve_books[2]
const checkout_book3 = checkout_books[2]
const checkin_book3 = checkin_books[2]
//checkin_books[2].style.color = 'grey'

//book1
if (STATUS_MAP[status_book1].canReserve === false){
    reserve_book1.disabled = true
} else {
    reserve_book1.disabled = false
}

if (STATUS_MAP[status_book1].canCheckout === false){
    checkout_book1.disabled = true
} else {
    checkout_book1.disabled = false
}

if (STATUS_MAP[status_book1].canCheckIn === false){
    checkin_book1.disabled = true
} else {
    checkin_book1.disabled = false
}

color_status[0].style.color = STATUS_MAP[status_book1].color


//book2
if (STATUS_MAP[status_book2].canReserve === false){
    reserve_book2.disabled = true
} else {
    reserve_book2.disabled = false
}

if (STATUS_MAP[status_book2].canCheckout === false){
    checkout_book2.disabled = true
} else {
    checkout_book2.disabled = false
}

if (STATUS_MAP[status_book2].canCheckIn === false){
    checkin_book2.disabled = true
} else {
    checkin_book2.disabled = false
}

color_status[1].style.color = STATUS_MAP[status_book2].color

//book3
if (STATUS_MAP[status_book3].canReserve === false){
    reserve_book3.disabled = true
} else {
    reserve_book3.disabled = false
}

if (STATUS_MAP[status_book3].canCheckout === false){
    checkout_book3.disabled = true
} else {
    checkout_book3.disabled = false
}

if (STATUS_MAP[status_book3].canCheckIn === false){
    checkin_book3.disabled = true
} else {
    checkin_book3.disabled = false
}

color_status[2].style.color = STATUS_MAP[status_book3].color