// /*
// function :
// function is a building on any program by which we can divide our large program into small parts 

// or 

// function is group of statemnet

// or

// function is a self contained statement block

// space Complexity:
// 1. Data Space : memory reqiured to store varialble and constants
// 2. Instruction Space : mermory required to store program instructions
// 3. Enviroment Space : memory required to store arugument and return values of function


// advantages of using a fuvtion;
// 1. dunction provide a faetures of a code resubility
// 2. function decreease instruction space of a program 
// 2. function decreade data pace of a program 4
// 4. function increase code readbility 
// Note  a fuction can't access variables defined in other function directly to do so we have to use concept
//  of arugument and ruturn value.
//  Note2: a fuction can access variable defines in global scope and vice verse not true.
//  type of function on basics of arugument and return values:- 
//  /*
// 1. function without return value whithout parameter
// 2. function with return value whitout parameter
// 3. Fuction whitout return value with parameter
// 4. function with return value with parameter
// */


// /*
// syntax:
// function functionname (parameter){
// ---------
// ---------
// number of statments
// -------
// --------
// return value
// }
// var variable = functionNmame()
// var variable = functionNmame()
// var variable = functionNmame()
// //sample function
// */

// function test(){
//     console.log("In test function")
// }
// console.log("back to outer scope")
// test()
// console.log("back to main outer scope")
// test()
// console.log("back to main outer scope")
// test()

// console.log("back to main outer scope")
// function fun1(){
//     console.log("in fun1 fuction")
//     fun2()
//     console.log("back to fun1 function")
// }
// function fun2(){
//     console.log("in fun2 fuction")
//     fun3()
//     console.log("back to fun2 function")
// }
// function fun3(){
//     console.log("in fun3 fuction")
    
// }
// console.log("in main outer scope")
// fun1()
// console.log("back to main outer scope")



// // 1. function without return value whithout parameter
// function add(){
//     var a =10 
//     var b =20 
//     var sum = a + b
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     add()
// }
// test()
// /*
// 2. function with return value whitout parameter
// */
// function add(){
//     var a = 10 
//     var b = 20 
//     var sum = a + b
//     return sum 
// }
// function test(){
//     let s = add()
//     console.log(`sum = ${s}`)
// }
// test()
// /*
// 3. Fuction whitout return value with parameter
// */
// function add(a,b){
//     let sum = a+b
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     var a = 10 
//     var b = 20
//     add(a,b)
// }
// test()
// /*
// 4. function whit return value whit parameter
// */
// function add(a,b){
//     let sum = a + b
//     return sum
// }
// function test(){
//     var a = 10 
//     var b = 20
//     add(a,b)
//     var s = add(a,b)
//     console.log(`sum = ${s}`)
// }
//  test()


// // or


// function add(a,b){
//     let sum = a + b
//     return sum
// }
// function test(){
//     console.log(`sum = ${add(10,20)}`)
// }
// test()

// // function sumDigit(num){
//     let sum = 0
//     while(num!=0){
//         let r = num %10
//          sum = sum + r
//         num = parseInt(num/10)
//     }
//     return sum

// console.log(`sum of 123345 = ${sumDigit(12345)}`)
// console.log(`sum of 87654321 = ${sumDigit(87654321)}`)
// console.log(`sum of 4321 = ${sumDigit(4321)}`)
// console.log(`sum of 123456789 = ${sumDigit(1213456789)}`)
// console.log(`sum of 564321 = ${sumDigit(654321)}`)
// console.log(`sum of 987654321 = ${sumDigit(9876543221)}`)
// console.log(`sum of 1111111= ${sumDigit(1111111)}`)


// // default parameters

// function test (a=0  ,b=0 , c=0 ){
//     console.log(`a = ${a} b = ${b} c = ${c}`)
// }
// test(10,20,30)
// test(10,20)
// test()
// test(10)


// //function returning an Array
// function test(){
//     return [10 , 20 , 30 , 40 , 50]
// }
// console.log(test())

// //Regular or normal function
// //function ithout return value without parameters
// function add(){
//     var a = 10 
//     var b = 20
//     console.log(`sum = ${a+b}`)
// }
// add()

// //function with Return value without parameters
// function add(){
//     var a = 10 
//     var b = 20
//     return a + b
// }
// console.log(`sim = ${add()}`)

// // function without return value with parameters
// function add(a,b){
//     console.log(`sum = ${a + b}`)
// }
// add(10,20)

// // function with return value with parameter

// function add(a,b){
//     return a +b
// }
// console.log(`sum = ${10,20}`)

// // Annonymous function 
// // function without return value without parameters
// var add = function(){
//     var  a = 10
//     var b = 20
//     console.log(`sum = ${a + b}`)
// }
// add()

// //function with return value without parameters
// var add = function(){
//     var a = 10
//     var b = 20 
//     return a+b
// }
// console.log(`sum = ${add()}`)


// //function without return value with parameters
// var add = function(a,b){
//     console.log(`sum = ${a +b}`)
// }
// add(10,20)


// //function ith return value with parameters
// var add = function(a,b){
//     return a +b
// }
// console.log(`sum = ${10,20}`)

// // Arrow Function or fat Arrow function
// // function without return value without parameters
// var add = () => {
//     var a = 10
//     var b = 20
//     console.log(`sum = ${a + b}`)
// }
// add()

// // function with return value without parameters
// var add = () => {
//     var a = 10
//     var b = 20
//     return a + b
// }
// console.log(`sum = ${add()}`)


// // function without return value with parameters
// var add = (a, b)  =>  {
//     console.log(`sum = ${a + b}`)
// }

// var add = (a, b ) => console.log(`sum = ${a + b}`)
// add(10,20) 

// // function ith return value with parameters

// var add = (a,b) => {
//     return a +b
// }
// console.log(`sum = ${add(10,20)}`)


// var add = (a, b) => a + b 
// console.log(`sum = ${add(10,20)}`)

// // higher Orderrr Function and callback function
// //higher Order functions : a function is called hogher order function if itt takes another function as an argument

// // callback Function : a function is called callback function if it is passes as an argumnet into a higher order fumction 

// function test(fun){
//     console.log("In test function")
//     fun()
//     console.log("back to test function")
//     fun()
//     console.log("back to test function")
//     fun()
//     console.log("back to function")
// }
// function sample(){
//     console.log("in sample function")
// }
// test(sample)

// test(function sample() {
//     console.log("In sample function")
// })

// test(function(){
//     console.log("In sample function")
// })

// test(() => console.log("In sample function"))

// // keyword          type            life                scope
// // no keyword       global          all over program    all over program
// // var              function level  till function       within function
// //let               bloack level    till block          within block
// //const             bloack level    till block          whithin block

// // function test(){
//     if(true){
//     a =10
//     var b = 20
//     let c = 30
//     const d = 40
//     console.log(`In if block of test a = ${a} b = ${b} c = ${c} d = ${d}`)
//     }
//     console.log(`Outside if block of test a = ${a} b = ${b} `)

// test()
// console.log(` In mai outer scope a = ${a}`)

// function sample(){
//     console.log(`In sample function a =  ${a}`)
// }
// sample()



// a =  10 
// var  a = 10
// let a = 10
// const a = 10
// a++
// console.log(a)

// // In Case of var and global  variable declaration(without keyword) redeclaration is allowed, 
// // but in case of let and const redeclaration is not allowed
// var a = 10
// let a = 10
// console.log(a)
// let a = 20
// console.log(a)


// var a = 10 
// console.log(a)
// {
//     var a = 20 
//     console.log(a)
// }
// console.log(a)

// let a = 10 
// console.log(a)
// {
//     let a = 20
//     console.log(a)
// }
// console.log(a)


// //recursion : when function call itself



// var a = 0
// function fun() {
//     a++
//     console.log("In fun function")
//     if(a<5)
//         console.log("Back to fun function")
// } 
// console.log("In mai global scope")
// fun()
// console.log("back to main global scope")

// function fun(a) {
//     a++
//     console.log("In fun function")
//     fun(a)
//     console.log("Back to fun function")
// }
// console.log("In main global scope")
// fun(0)
// console.log("Back to main global scope")


// // self Involked Function or Immeditely Involked Functions Expression(IIFE)
// // Regular function

// (function test(){
//     console.log("In test function")
// })()

// // Anonymous Function
// (function (){
//     console.log("In test function")
// })()

// // Fat Arrow Function
// (()=>{
//     console.log("In test function")
// })()
// (()=>console.log("In test Function"))()



