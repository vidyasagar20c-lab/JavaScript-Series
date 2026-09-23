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

// var a = [10, 20, 30, 40, 50, 60,60, 60, 60 ,60 ,60, 70,90, 100, 80]
// console.log(a)
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
//2nd type create an array using empty array

// var a = []
// a[0] = 10
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a[4] = 50
// a[100] = 1000
// console.log(a.length)
// console.log(a)

// 3rd type : Array constructor

// var a = Array(10,20,30,40,50)
// var a = Array(10)
// a[100] = 1000
// // console.log(a.length)
// console.log(a)

// 4th type: Empty Array constructor

// var a = Array()
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a[4] = 50
// a[100] = 1000
// console.log(a.length)
// console.log(a)
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// accessing array element using normal for loop
// for(i=0;i<array.length;i++){
//     console.log(array[i])
// }
// accessing array element using while loop
// i=0;
// while(i<array.length){
//     console.log(array[i])
//     i++
// }
// accessing array element using do while loop
// i=0;
// do{
//     console.log(array[i])
//     i++
// }
//    while(i<array.length)


// accessing array element using for in loop
// for(let i in array){
//     console.log(array[i])
// }
// accessing array element using for of loop
// for(let i of array){
//     console.log(i)
// }

/*
toString convert an array into and use , as separator join() convert an array into string and you can specify
separator bydefault join function use , as seperator
*/
// console.log(array)
// console.log(array.toString())
// console.log(array.join())
// console.log(array.join(" "))
// console.log(array.join(" * "))

/*
array: push() pop() unshift() shift() splice() delete
puch() : insert one and more than one element in last of an array and return update lenght of array

pop():delete an element from last of an array and return deleted array element 

unshift(): insert one and more than one element in starting of an array and return update of array

shift(): deleted one element form first position of an array and return deleted array element

splice(): used to insert or delete element form any specific position of array and return array of deleted elements

deleted : it  deleted an  item  from array and leave empty space
*/
// var array = [10,20,30,40,50,60,70,80,90,100]
// array.push(110)
// console.log(array)
// array.push(120)
// console.log(array)
// array.push(130)
// console.log(array)

// array.pop()
// console.log(array)
// array.pop()
// console.log(array)
// array.pop()
// console.log(array)

// array.unshift(5)
// console.log(array)
// array.unshift(4)
// console.log(array)
// array.unshift(3)
// console.log(array)
// array.unshift(2)
// console.log(array)
// array.unshift(1)
// console.log(array)

// array.shift()
// console.log(array)
// array.shift()
// console.log(array)
// array.shift()
// console.log(array)
// array.shift()
// console.log(array)
// array.shift()
// console.log(array)
// array.shift()
// console.log(array)

// array.splice(2,1,31,32,33,34)
// console.log(array)

// delete array[1]
// delete array[4]
// delete array[5]
// delete array[8]
// delete array[9]

// console.log(array)

// slice() Return a copy  of a section of array. For both start  and end, a negative
// index can be used to indicate an offset from the end of the  array. For example,
// -2 refers to the last two element of the array.

// var array = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
// console.log(array.slice(5,16)) // return 5th index to 16 index
// console.log(array.slice(16)) // return 16index to 20th intex
// console.log(array.slice(0,16))//return 0 index to 16th index
// console.log(array.slice(-5,-3))// return 16 index to 18 index

// concat() : combines two or more arrays. This method return a new array without modifying any existing arrays.

// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["vidya","sagar","shukla","ishwar chandra", "krishna"]
// var e = [true,false,true,false,false,false]
// var f = a.concat(b,c,d,e)

// console.log(f)

// entries() generate an iterator which containskey (index) and value of items
// accessing    array element using entries()
// let arr = [1,2,3,4,5,6]
// for(let i of arr.entries()){
//     console.log(i)
// }
// includes(): return true if array contains an  item else return flase
// var array = [10,20,30,40,50,60,70,80,90,100]
// console.log(array.includes(40)) 
// console.log(array.includes(400)) 

//indexof(): return Lowest index of item from array and return -1 if item not found in array 
// var array = [10,20,30,40,50,60,70,80,90,100]
// console.log(array.indexOf(40)) 
// console.log(array.indexOf(400)) 

//lastIndexOf(): return last index of item from array and return -1 if item not found in array
// var array = [10,20,30,40,50,60,70,80,90,100]
// console.log(array.lastIndexOf(60)) 
// console.log(array.lastIndexOf(400)) 


// reverse
// console.log(array)
// array.reverse()
// console.log(array)


// find() : return the first item from array which pass a test, otherwise return undefined
// findlast(): return the last item from array which pass a test , otherwise return undefined
//findindex(): return the first index of item from array which pass a test, else return-1
// find lastindex(): return the last index of item from array which pass a test, else return-1
//map()     : return an array of containg result for all element of array
// filter() : return an array of item that pass a test

// var array = [10, 11, 12, 13, 14, 15, 15, 15, 15, 16, 17, 17, 17, 17, 18, 18, 19, 19, 20, 20, 20, 25, 25, 30, 30, 30]

// function check(items){
//     return items
    // return items %3
// }
// console.log(array.find(check))
// console.log(array.findLast(check))
// console.log(array.findIndex(check))
// console.log(array.findLastIndex(check))
// console.log(array.filter(check))
// console.log(array.map(check))

// console.log(array.find((items)=>items%2==0))
// console.log(array.findLast((items)=>items%2==0))
// console.log(array.findIndex((items)=>items%2==0))
// console.log(array.findLastIndex((items)=>items%2==0))
// console.log(array.filter((items)=>items%2==0))
// console.log(array.map((items)=>items%2==0))

// var array = [109, 191, 122, 183, 143, 155, 315, 195, 185, 176, 167, 17, 157, 179, 118, 138, 149, 169, 270, 230, 250, 295, 255, 350, 350, 307]
// forEach : call callback function for each element,doesn't return anything
    // array.forEach((x,index) => console.log(index,x))
// var sum = 0
// array.forEach((x =>sum = sum + x))
// console.log(sum)

// reduce : calls the specified callabck function for all elements in an array. The return value of the 
// callback function is the accumlated result, and is provide as an argument in the next call to the
//  callback function
// console.log(array.reduce((prevoiu ,current) => prevoiu + current))
// some() : return true if least one item pass the test.
// console.log(array.some(a => a%20==0))
// console.log(array.some(a => a%200==0))

// sort()
// var a = ["Vidya","Sagar", "Shukla", "Ishwar", "Chandra","Krishna","Bihari","Shivansh","Sonal","Joyti","Kajal","Gudiya","Sneha"]
// console.log(a)
// a.sort()
// array.sort((x,y)=> x-y)
// array.sort((x,y)=> y-x)
// console.log(a)

// Array Destructing i.e unpacking array element into variales

// var data = [1001,"Vidya Sagar", "Student",156700,"Noida","U.P"]
// console.log(`
//     id            : ${data[0]}
//     name          : ${data[1]}
//     Degination    : ${data[2]}
//     salary        : ${data[3]}
//     Address       : ${data[4]}
//     State         : ${data[5]}
    
// `)

// var [id,name, dsg,salary,addess,state] = data
// console.log(`
//     id            : ${id}
//     name          : ${name}
//     Degination    : ${dsg}
//     salary        : ${salary}
//     Address       : ${addess}
//     State         : ${state}
    
// `)
    