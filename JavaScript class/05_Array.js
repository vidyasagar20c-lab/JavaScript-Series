/*
Array:
-> collection of hetrogenious items arrangument in contigous order
-> can contain duplicate items
-> can contain different type value
-> multable data type i.e it support updation i.e insertion
,deletion etc

Note :Array index always start with zero

syntax:
var arrayObjct = [item1,item2,item3,...,itemN]
*/

//1st type to create an array using array literal style

var a = [10, 20, 30, 40, 50, 60,60, 60, 60 ,60 ,60, 70,90, 100, 80]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
//2nd type create an array using empty array

var a = []
a[0] = 10
a[1] = 20
a[2] = 30
a[3] = 40
a[4] = 50
a[100] = 1000
console.log(a.length)
console.log(a)

// 3rd type : Array constructor

var a = Array(10,20,30,40,50)
var a = Array(10)
a[100] = 1000
// console.log(a.length)
console.log(a)

// 4th type: Empty Array constructor

var a = Array()
a[1] = 20
a[2] = 30
a[3] = 40
a[4] = 50
a[100] = 1000
console.log(a.length)
console.log(a)