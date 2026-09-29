/*
Obeject  -> Stroe information in pair of key and value
         -> Key must be unique
         -> value may be dulicate
         -> mutable data type i.e e can updation an object

*/
// Object literal

// var emp = {
//     id : 1001,
//     name : "Vidya Sagar",
//     dsg : "Student",
//     Salary : 0,
//     City : "Noida",
//     State : "U.P"
// }
// console.log(emp)

//  Empty object litreral

// var emp = {}
// emp.id = 1001
// emp.name = "Vidya Sagar"
// emp.dsg  = "Student"
// emp.Salary = 0
// emp.City = "Noida"
// emp.State = "U.P"
// console.log(emp)

// var emp = new Object()
// emp.id = 1001
// emp.name = "Vidya Sagar"
// emp.dsg  = "Student"
// emp.Salary = 0
// emp.City = "Noida"
// emp.State = "U.P"
// console.log(emp)

// Accessing obeject value with help of keys
// console.log(emp)
// console.log(emp.id)
// console.log(emp['name'])
// console.log(emp["Salary"])
// console.log(emp[`dsg`])

// Accessing object value throw loop

// For(let  in emp) 
//     console.log(`${key} = ${emp[key]}`)

// Adding an item to existing object

// emp.email = "shukal2004official@gmail.com"
// emp['Phone'] = "9311640783"
// emp["Subject"] = "Mern Stack"
// emp["address"] = "A 43, Sector-16, Noida"
// console.log(emp)

// deleting object item 

// delete emp.City
// delete emp['State']
// delete emp["dsg"]
// delete emp[`Salary`]

// console.log(emp)

// Nesting of objects

// var emp = {
//     id : 1001,
//     name : "Vidya Sagar",
//     dsg : "Student",
//     salary: 0,
//     addres:{
//         addressline1:{
//             houseNumber : 5,
//             locality : "ABC,village,Sector 89",
//             nearby : "Near Shiv Public School"
//         },
//         addressline2:{
//             pin : 122002,
//             city : "Faridabad",
//             Satet : "UP"
//         }
    // }
// }
// console.log(emp)
// console.log(emp.addres)
// console.log(emp.addres.addressline1)
// console.log(emp.addres.addressline1.locality)


// Function in object : Function defined inside an object or class also called methods

// var obj = {
//     a : 10,
//     b : 20,
//     display1(){
//         console.log(` In Regluar method display1 a= ${obj.a} and b = ${obj.b}`)
//     },
//     display2(){
//         console.log(` In Regluar method display2 a= ${this.a} and ${this.b}`)
//     },
//     display3:function(){
//         console.log(` In Anouymous method display3 a= ${obj.a} and ${obj.b}`)
//     },
//     display4:function(){
//         console.log(` In Anouymous method display1 a= ${this.a} and ${this.b}`)
//     },
//     display5:()=>console.log(` In Fat Arrow method display1 a= ${obj.a} and ${obj.b}`),
        
//     display6:()=>console.log(` In Fat Arrow method display1 a= ${this.a} and ${this.b}`)
//  }
// obj.display1()
// obj.display2()
// obj.display3()
// obj.display4()
// obj.display5()
// obj.display6()

// In object we can use either object name or this to access or difine object properties
// Note : Never use this inside far arrow method to represet current object because this represent global object

// var emp = {
//     id : 10001,
//     name : "vidya sAhaar",
//     dsg : "Student",
//     city : "Noida",
//     State : "UP",
//     basicSlaray : 90567,
//     calculate(){
//         this.ta = this.basicSlaray*5/100
//         this.da = this.basicSlaray*50/100
//         this.hra = this.basicSlaray*16/100
//         this.ma = 1000
//     this.gross = this.ta + this.da + this.hra + this.ma
//         if(this.gross>100000)
//             this.itax = this.gross*10/100

//         else
//             itax =0 
//             this.net = this.gross - this.itax
// },
// display(){
//     console.log(`
//         Employee id          :      ${this.id}
//         Name                 :      ${this.name}
//         Desgination          :      ${this.dsg}
//         City                 :      ${this.city}
//         State                :      ${this.State}
//         Basic Salary         :      ${this.basicSlaray}
//         Ta                   :      ${this.ta}
//         Da                   :      ${this.da}
//         HRA                  :      ${this.hra}
//         Ma                   :      ${this.ma}
//         Gross Salary         :      ${this.gross}
//         Income Tax           :      ${this.itax} 
//         Net Salary           :      ${this.net}
//         `)
// }
// }
// emp.calculate()
// emp.display()


/* Getter and setter proprety are used to overcome function method call overhead problem function
call overhead problem : When actual execution time of a function is less than function switching time is 
called function call overhead problem.
*/

// var emp = {
//     id: 2001,
//     name : "Vidya Sagar ",
//     dsg : "Tariner",
//     city : "Noida",
//     State : "UP",
//     set setSalary(num){
//         this.salary = num     
//     },
//     get dispaly(){
//         console.log(`
//             Employee id    :        ${this.id}
//             name           :        ${this.name}
//             desgination    :        ${this.dsg}
//             City           :        ${this.city}
//             State          :        ${this.State}
//             salary         :        ${this.salary}
//             `)
//     }
// }

// emp.setSalary =34567
// emp.dispaly  

// Object destrctuing

// var emp = {
//     id  : 11000,
//     name : "VidyaSagar ",
//     dsg : "Tariner",
//     salary : 3456789,
//     city : "Noida",
//     State : "UP"
// }

// console.log(`
//     Employee Id  :    ${emp.id}
//     name         :    ${emp.name}
//     Desgination  :    ${emp.dsg}
//     City         :    ${emp.city}
//     State        :    ${emp.State}
//     `)

    // var {id,name,dsg,city,State} = emp

    // console.log(`
    // Employee Id  :    ${id}
    // name         :    ${name}
    // Desgination  :    ${dsg}
    // City         :    ${city}
    // State        :    ${State}
    // `)

    // Object constructor

    // var Employee = function(id,name, dsg,salary,city, state){
    //     this.id = id
    //     this.name = name
    //     this.dsg = dsg
    //     this.salary = salary
    //     this.city = city
    //     this.state = state
    // }
    // var emp1 = new Employee(10001, "Vidya Sagar","Trainer",56788,"Noida","UP")
    // var emp2 = new Employee(10002,"Aditya Saini","Trainer",45678,"Azamgrah","UP")
    // var emp3 = new Employee(10003,"Ankush Gupta","Trainer",4567812345678,"mau","UP")

    // console.log(emp1)
    // console.log(emp2)
    // console.log(emp3)

// Prototype:-
/* Object prototype : Every object in JavaScript has a built-in property, which is
 called its prototype .The prototype is itself are not direct propertities of object of itself and we prototype 
 is shareble with other object so basically prototype element are common to objects. */


//  var Employee = function(id,name, dsg,salary,city, state){
//         this.id = id
//         this.name = name
//         this.dsg = dsg
//         this.salary = salary
//         this.city = city
//         this.state = state
//     }
//     Employee.prototype.cmp = "Ducat"
//     Employee.prototype.display = function(){
//         console.log(`
//             Employee ID         :       ${this.id}
//             Name                :       ${this.name}
//             Desgination         :       ${this.dsg}
//             Salary              :       ${this.salary}
//             City                :       ${this.city}
//             State               :       ${this.state}
//             `)
//     }
//     var emp1 = new Employee(10001, "Vidya Sagar","Trainer",56788,"Noida","UP")
//     var emp2 = new Employee(10002,"Aditya Saini","Trainer",45678,"Azamgrah","UP")
//     var emp3 = new Employee(10003,"Ankush Gupta","Trainer",4567812345678,"mau","UP")

//     emp1.display()
//     emp2.display()
//     emp3.display()

// object Built-in Method 
// 1. Object.keys() : return an array containining all keys of objects.
// 2. Object.value() : return an array containint all value of objects.
// 3. Object.entries() : return an array containig key value of objects.

var emp = {
    id : 1001,
    name : "Vidya Sagar",
    dsg : "Trainer",
    salary : "456789",
    city : "Noida",
    state : "UP"
}
// console.log(Object.values(emp))
// console.log(Object.keys(emp))
// console.log(Object.entries(emp))

// 4. objects.assign() : used to copy an object elemets into other

// var obj = {}'
// Object.assign(obj,emp)
// console.log(obj)

// 5. objectl.create() : used to create a new objects, it makes already existing object as prototype of newly create object

// var obj = Object.create(emp)
// console.log(obj)
// console.log(Object.getPrototypeOf(obj))
// console.log(obj.id)
// console.log(obj.city)

// 6.Object isFrezes() : Check whether  an object is freeze or not 
// 7. Object freezes() : freezes an object present propreties to be add,delete or update

// Object.freeze(emp)
// console.log(Object.isFrozen(emp))
// emp.email = "abc@gmail.com"
// emp.city = "Faridabad",
// delete emp.state
// console.log(emp)

// 8. isCalled() : check whether an object is sealed or not
// 9. seal() : seal an object present proprties to be used added or delete or but updation can possible.

Object.seal(emp)
console.log(Object.isSealed(emp))
emp.email = "abc@gamail.com"
emp.city = "Faridabad"
delete emp.state
console.log(emp)

// 10 Object 
