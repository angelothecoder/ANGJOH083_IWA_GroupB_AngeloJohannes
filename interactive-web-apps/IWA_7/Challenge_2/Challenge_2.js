const nickname= "Timmy"
const firstname = "Timothy"

if (nickname === null && firstname === null) {
    console.log("No names were entered")
  } else {
    if (nickname === null) {
        console.log("Good Morning ,", firstname) 
      } else {
        console.log("Good Morning ,", nickname) 
      }
  }