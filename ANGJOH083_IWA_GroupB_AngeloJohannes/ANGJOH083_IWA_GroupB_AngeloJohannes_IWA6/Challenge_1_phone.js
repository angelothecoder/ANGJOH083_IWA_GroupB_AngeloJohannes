const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

if (primaryValid == true){
    console.log('Primary phone is valid numerical string:', primaryValid);
}else{
    console.log('Primary phone is not valid numerical string:', primaryValid);
}

if (secondaryPhone == true){
    console.log('Secondary phone is valid numerical string: ', secondaryValid )
}else{
    console.log('Secondary phone is not valid numerical string: ', secondaryValid )
}