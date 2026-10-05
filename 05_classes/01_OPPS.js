/*
OOPS:
-> designed by bjarne Stroustroup(C++ Founder)
-> Object oriented programming structure 
OPPS is a computer science form which defines a well structured series or step to construct
a computer application which handle data. get and transfer message to each other, 
since object are not dependent on each other oops is seen as being more flexible 
them produce approach 

        or
oops is programming concept which helps us to achieve following approach from programming

oops approachs:
1. Abraction : Data hiding
2. Encapsulation : Binding data and function in a single unit
3. Polymorphison : many forms of single Entry
4. Inheritance : code revsability.

class is required to implement OOPS

class : class is a technique by which can define a new data type as we required 

class is a blue print of objects.

class is a collection of properties and behivour where properties means variable of different- different data type 
and behavour means various functions.

class is a logical activity only , that mean class doesn't have physical exitance in name of 
intance is called object

we can define object of a classes, each other object having same properties and behivour but their value may be different 
synatax:
class className{
 constructor(){
 --------
 }
 method1(){
 --------
 }
 method2(){
 ------}
 ------
 }
*/

// class without constructor
// class test{
//     show(){
//         console.log("In Show() of test class")
//     }
//     display(){
//         console.log("In display() of test class")
//     }
// } 
// var obj = new test()

// obj.show()
// obj.display()

// class Add{
//     setData(a,b){
//         this.a = a
//         this.b = b
//         this.sum = a + b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add()
// var obj2 = new Add()
// var obj3 = new Add()

// obj1.setData(10,20)
// obj2.setData(100,200)

// obj1.display()
// obj2.display()
// obj3.display()

// 1. Abstraction : Data hinding i.e hiding complexity showing functionality, we can hide members 
// using access specifices like public, private, and protcted . (javascript doesn't support Abstraction).

// 2. Encapulation : Building Data members with member functions methods 
        // or
    // wrapping-up data member with member function

// 3. Polymorphison : Many forms of single enting 
            // 1. method Overloading : if we define more than are function in a class with same 
            // name but with diffrent signature(either number of argument muust be different)
            // (JavaScript doesn't support method overloading)
            // 2.Construtor and distructor
            // we can define user different constructor in javascript but
            // we can't define user defined destructor javascript 
            // 3. method overriding if both perent class and child having same named 
            // member then child can in harit only those member from parent 
            // which child doesn't have JavaScript support this concept.
            // 4. Operator Overlaoding 
            // if we  provided user defined defination to an existing operator 
            // then this concept is called operator overloading JS doesn't 
            // support this feature 

// 4.Interite fance: it we reuse member of any existing class in a  new class is 
// called in heritance
// JS support this concept 

// class with constructor 

// construtctor : 
// -> a special member method of class which provide memory intilization to a 
// class object 
// -> there is no need to call constractor it called automatically when object 
// is decleared  with help
// of now 

// -> it can't be paramaterised 
// -> if we not provided defination to a constructor in class than compiler 
// (JIT) provided defination to constructor 
// -> we can't return a user defined  value from a comstructor 

// class test{
//     constructor(){
//         console.log("constructor class Test")
//     }
//     show(){
//         console.log("In show() of Test class")
//     }
//     display(){
//         console.log("In display() of Test class")
//     }
// }

// var obj1 = new test()
// var obj2 = new test()
// var obj3 = new test()

// obj1.show()
// obj1.display()


// class test{
//     show(){
//         console.log("In Show() of test class")
//     }
//     display(){
//         console.log("In display() of test class")
//     }
// } 
// var obj = new test()

// obj.show()
// obj.display()

// class Add{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//         this.sum = a + b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add(10,20)
// var obj2 = new Add(100,200)
// var obj3 = new Add()

// obj1.display()
// obj2.display()
// obj3.display()

/* Inheritance 
oops aproach provide a features to reuse all members of any
 previous existing class in a new class.
 
 eg if a class named a inherit class a then class a can 
 reuse all member of class  a to class a is called child class derinting
  class or subclass and class a is called perent class super class or base class
  
  types: 
  1. Single Inheritance 
  2. Miltilevel Inheritance 
  3. Micrachical Inheritance
  
  Syantax:
  class parent {
            -------------
            ------------
  }
    class child extends parent {
            -----------
            ----------
    }
            
    Note : a child can acessing these member of class parent which child doesn't here */

//     class test {
//     show(){
//         console.log("In show() in test class")
//     }
//     display(){
//         console.log("In display() in Test class")
//     }
// }

// class Child extends test{
//     show2(){
//         console.log("In show2 In child class")
//     }
//     display(){
//         console.log("In display() child class")
//     }
// }

// var child = new Child()

// child.show()
// child.show2()
// child.display()

// Accessing overroidden method
// class test{
//     display(){
//         console.log("In display() of test accessing")
//     }
// }
// class Child extends test{
//     display(){
//         super.display()
//         console.log("In display() of child")
//     }
// }
//  var child = new Child()

//  child.display()

// constructor in parent class

// class parent{
//     constructor(){
//         console.log("constructor class test")
//     }
//     show(){
//         console.log("In show() of test class")
//     }
// }
// class Child extends parent{
//     display(){
//         console.log("In display() of child class")
//     }
// }
// var child = new Child()
// child.show()
// child.display()

// constructor in child class

// class parent{
    
//     show(){
//         console.log("In show() of test class")
//     }
// }
// class Child extends parent{
//     constructor(){
//         super()
//         console.log("constructor child test")
//     }
//     display(){
//         console.log("In display() of child class")
//     }
// }
// var child = new Child()
// child.show()
// child.display()


// single  Inheritance P : when a single child class inferit a single parent class

// class prarent{
// constructor(a,b){
//         this.a = a
//         this.b = b
// }
// }
// class Child extends prarent{
//         display(){
//             console.log(`In display of child class a = ${this.a} and b = ${this.b}`)
//         }
// }

// var child = new Child(10,50)

// child.display()

// multilevel Inheritance : when a child class inherit another child class
// class parent {
//     constructor(){
//         this.a = [10,20,30,40,50]
//     }
// }
// class Child extends parent{
//     display(){
//     console.log(this.a)
// }
// }
// class GrandChild extends Child{
//     reverse(){
//         this.a.reverse()
//     }
// }

// var obj = new GrandChild()
// console.log("Orginal array of a ")
// obj.display()
// obj.reverse()
// console.log("reverse array is a")
// obj.display()

// Merirchical Inheritance : when a single parent class inherit by more than add child class


class parent{
        constructor(a,b){
                this.a = a
                this.b = b
        }
}
class Add extends parent{
        display(){
                
        }
}