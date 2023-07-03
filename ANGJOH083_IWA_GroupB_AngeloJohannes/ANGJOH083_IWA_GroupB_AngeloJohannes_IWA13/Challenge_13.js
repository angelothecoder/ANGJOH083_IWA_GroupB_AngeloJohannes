let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below
const logCalc = () => { 
  const isString = (typeof calculated === 'string')  && (typeof parseInt(calculated) === 'number')
  if (isString === true) {
    const calculatedAsNumber = parseInt(calculated)
    calculated = calculatedAsNumber
  }
}

const calcUser = () => {
  if (calculated > 3) {
    user = 'John'
    state = 'requesting'
  } else {
    user = null
    state = 'idle'
    calculated = (calculated + 1)
  }
}

const checkUser = () => {
  if (state === 'requesting') {
    console.log('User: ' + user + ' (' + (calculated-1) + ')')
  } 
	}

logCalc()

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()