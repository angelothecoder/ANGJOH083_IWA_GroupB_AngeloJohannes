const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9
//Don't change code above

const holidaysCopied = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

// cheching if key exists
if (holidaysCopied[futureId] === undefined){
    console.log('ID 9 not created yet')
} else {
    console.log(holidays[futureId].name)
}

//set time to midnight
const copied = holidaysCopied[christmas]
if (copied.date.getHours() > 0 && copied.date.getMinutes() > 0){
    copied.date.setHours(00 , 00)
}

//change name
if (copied.date.getHours() < holidays[christmas].date.getHours() && copied.date.getMinutes() < holidays[christmas].date.getMinutes()){
    console.log('New date is earlier: ',copied.date.getHours() < holidays[christmas].date.getHours() && copied.date.getMinutes() < holidays[christmas].date.getMinutes())
    copied.name = 'X-mas'
}

if (copied.id === holidays[christmas].id){
    console.log('Id change: false')
} else {
   console.log('Id change: ',copied.id) 
}

if (copied.name === holidays[christmas].name){
    console.log('Name change: false')
} else {
   console.log('Name change: ',copied.name) 
}

if (copied.date === holidays[christmas].date){
    console.log('Date change: false')
} else {
   console.log('Date change: ',copied.date.getDate(),'/',copied.date.getMonth()+1,'/',currentYear) 
   holidays[christmas].date.setHours(00,00)
}

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
    )
    
    const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth()+1
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()+1
console.log(firstDay,'/',firstMonth,'/',currentYear)
console.log(lastDay,'/',lastMonth,'/',currentYear)

const randomHoliday = holidays[Math.floor(Math.random()*8)+1].date
const randomDay = randomHoliday.getDate()
const randomMonth = randomHoliday.getMonth()+1
console.log(randomDay,'/',randomMonth,'/',currentYear)