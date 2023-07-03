// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const date = new Date()
const getDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const getFirstDayOfMonth = new Date(date.getFullYear(), date.getMonth(),1)
const amountOfWeeks = Math.ceil(getDaysInMonth / 7)

const createData = () => {
const th = document.getElementsByTagName("th")
let i = 0
let value = "false"

document.querySelector('[data-title]').innerHTML = MONTHS[date.getMonth()] + ' ' + date.getFullYear()
do {
    if (th[i].innerHTML === String(date.getDate())){
        value = 'true'
        th[i].classList.add("table__cell_today")
    }
    i = i + 1
} while (value === 'false')

}

createData()