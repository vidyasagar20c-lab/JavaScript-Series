/* Map:     collection of items but in pair of key and values keys may be dulicate it
 we use duplicate key in a map then only last key will used  */

//  How to make a map

var emp   = new Map([
    ['id', '1001'],
    ['name','vidya sagar'],
    ['dsg','student'],
    ['salary','34567'],
    ['city','noida'],
    ['state','UP']
])
// console.log(emp)

// set() : set of ,ap insert an item in map and if ket already exist than set() update value of 
// particular key
// emp.set('email','shukla2004official@gmail.com')
// emp.set('salary','2345678')
// console.log(emp)

// delete() used to delete any particular key from map as nothing in case of empty or unvolled key

// emp.delete()
// emp.delete('address')
// emp.delete('city')

// console.log(emp)

// clear() used to delete all item from map 
emp.clear()
console.log(emp)

// size return number of items of map 
console.log(emp.size)

// has return true is map has an item else return false
console.log(emp.has('city'))
console.log(emp.has('address'))

// get()
