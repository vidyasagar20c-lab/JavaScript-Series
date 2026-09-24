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

var emp = new Object()
emp.id = 1001
emp.name = "Vidya Sagar"
emp.dsg  = "Student"
emp.Salary = 0
emp.City = "Noida"
emp.State = "U.P"
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

emp.email = "shukal2004official@gmail.com"
emp['Phone'] = "9311640783"
emp["Subject"] = "Mern Stack"
emp["address"] = "A 43, Sector-16, Noida"
console.log(emp)

// deleting object item 

delete emp.City
delete emp['State']
delete emp["dsg"]
delete emp[`Salary`]

console.log(emp)



