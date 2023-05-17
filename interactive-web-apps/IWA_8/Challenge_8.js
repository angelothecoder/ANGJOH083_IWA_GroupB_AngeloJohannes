const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	fullName : leoName,
  age : 24,
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',

	address : {
		streetNumber : leoNumber,
		streetName : leoStreet,
		postalCode : leoPostal,
	}
}

const sarah = {
	fullName : sarahName + ' ' + sarahSurname,
	age : 62,
  balance : sarahBalance,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',

	address : {
		streetNumber : sarahNumber,
		streetName : sarahStreet,
		postalCode : sarahPostal,
	}
}

console.log(leo.fullName,'\n',leo.age,' years old','\n','Balance: ', leo.balance,'\n','AccessId: ',leo.accessId,'\n','Street: ', leo.address.streetNumber,' ',leo.address.streetName,'\n','Postal code: ',leo.address.postalCode,'\n');
console.log(sarah.fullName,'\n',sarah.age,' years old','\n','Balance: ', sarah.balance,'\n','AccessId: ',sarah.accessId,'\n','Street: ', sarah.address.streetNumber,' ',sarah.address.streetName,'\n','Postal code: ',sarah.address.postalCode);