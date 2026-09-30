// Set : Collection of unique Elements can't conatine duplicate items set does not support 
//       indexing
// How to make a set
// Hoe to make a set using new set()

var a = [10,20,30,40,50,60,70,80,90,100,10,10,10,20,20,20,30,30,30,30,40,40,40,40,40,50,60,30,30,40,40]
var b = new Set(a)
var c = Array.from(b)

// console.log(a)
// console.log(b)
// console.log(c)

//  add item to set 
// add() used to add an item in set, do nothing it them already exist,and if no argument is provide it add an undefined into set

// b.add()
// b.add()
// b.add()
// b.add(100)
// b.add(110)
// console.log(b)

// delete() used to delete any particular item from set 
// do nothing or remove indefined(if exist) from set if no argument is provided or item doesn't exist

// b.delete()
// b.delete()
// b.delete(500)
// b.delete(100)
// console.log(b)

// clear() remove all item from set

// b.clear()
// console.log(b)

// size return size of set 
// console.log(b.size)

// has() : return true if item exist inset else return false

// console.log(b.has(20))
// console.log(b.has(399))

/* values :  return an interator containing all item of set 
   keys   :  return an interator containing all item of set 
   entries:  return an interator in pair it value value contaning all items of set
   */

// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())

