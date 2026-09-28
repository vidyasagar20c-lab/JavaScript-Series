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
//             this.tax = this.gross*10/100

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

var emp = {
    id  : 11000,
    name : "VidyaSagar ",
    dsg : "Tariner",
    salary : 3456789,
    city : "Noida",
    State : "UP"
}

// console.log(`
//     Employee Id  :    ${emp.id}
//     name         :    ${emp.name}
//     Desgination  :    ${emp.dsg}
//     City         :    ${emp.city}
//     State        :    ${emp.State}
//     `)

    var {id,name,dsg,city,State} = emp

    console.log(`
    Employee Id  :    ${id}
    name         :    ${name}
    Desgination  :    ${dsg}
    City         :    ${city}
    State        :    ${State}
    `)

