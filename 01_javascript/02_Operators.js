// console.log(15+6);                      //21
// console.log(15+"6");                    //156
// console.log("15"+"6");                  //156
// console.log("15"+"Hello World");        //15Hello World
// console.log(true + true);               //2
// console.log(true + 0);                  //1
// console.log(0+0);                       //0
// console.log(null+ null);                //0
// console.log(null + undefined);          //NaN
// console.log(10+undefined);              //NaN

// console.log(15-6);                      //9
// console.log(15-"6");                    //9
// console.log("15"-"6");                  //9
// console.log("15"-"Hello World");        //NaN
// console.log(true - true);               //0
// console.log(true - 0);                  //1
// console.log(0-0);                       //0
// console.log(null- null);                //0
// console.log(null - undefined);          //NaN
// console.log(10-undefined);              //NaN

// console.log(15*6);                      //90
// console.log(15*"6");                    //90
// console.log("15"*"6");                  //90
// console.log("15"*"Hello World");        //NaN
// console.log(true * true);               //1
// console.log(true * 0);                  //0
// console.log(0*0);                       //0
// console.log(null* null);                //0
// console.log(null * undefined);          //NaN
// console.log(10*undefined);              //NaN

// console.log(15/6);                      //2.5
// console.log(15/"6");                    //2.5
// console.log("15"/"6");                  //2.5
// console.log("15"/"Hello World");        //NaN
// console.log(true / true);               //1
// console.log(true / 0);                  //infinity
// console.log(0/0);                       //NaN
// console.log(null/ null);                //NaN
// console.log(null / undefined);          //NaN
// console.log(10/undefined);              //NaN

// console.log(15%6);                      //3
// console.log(15%"6");                    //3
// console.log("15"%"6");                  //3
// console.log("15"%"Hello World");        //NaN
// console.log(true % true);               //0
// console.log(true % 0);                  //NaN
// console.log(0%0);                       //NaN
// console.log(null% null);                //NaN
// console.log(null % undefined);          //NaN
// console.log(10%undefined);              //NaN

// console.log(15**6);                      //11390625
// console.log(15**"6");                    //11390625
// console.log("15"**"6");                  //11390625
// console.log("15"**"Hello World");        //NaN
// console.log(true ** true);               //1
// console.log(true ** 0);                  //1
// console.log(0**0);                       //1
// console.log(null** null);                //1
// console.log(null ** undefined);          //NaN
// console.log(10**undefined);              //NaN

// // var a = 10 * 5 % 60 / 20 * 4 * 9 - 34 % 30 * 5 % 22 / 10 * 9 + 3 * (90 % 75 / 5 * 2 ** 5 % 20)
// // console.log(a)

// /* Assiment Opertator
// Used to assign value of RHS operand To LHS operand
// e.g     sum = a+b;    //valid
// e.g     a+b = sum     //Invaild
// e.g     a= b= c;      // valid

// catergory : Binary 
// precedence : R to L

// composite / compound / short hand Operator :
// combination of Assigment Operator with other opetators:

// a= a+b  =>      a+=b
// a= a-b  =>      a-=b
// a= a*b  =>      a*=b
// a= a/b  =>      a/=b
// a=a%b   =>      a%=b
// a=a**b  =>      a**=b
// */
// var a = 10
// var b = 20
// a+=b            //a= a+b
// console.log(a);


// /* Relation Oprerator
// used to compare tow opertarors
// <       less than
// <=      less than equal
// >       greater than
// >=      greater than equal
// !=      not Equal        (check only value)
// !==     Equal            (check only value)
// ===     Indetical        (check value and data type both)
// */
// console.log(15<122)         //true
// console.log(15<12)          //false
// console.log(15<"122")       //true
// console.log("15"<"122")     //false


// console.log(15>122)         //false
// console.log(15>12)          //true
// console.log(15>"122")       //false
// console.log("15">"122")     //true

// console.log(10<=10)             //ture
// console.log(10>=10)             //true


// console.log(10==10)             //true
// console.log(10==10.0)           //ture
// console.log(10=="10")           //true
// console.log(10==12)             //false

// console.log(10===10)             //true
// console.log(10===10.0)           //ture
// console.log(10==="10")           //false
// console.log(10===12)             //false

// console.log(10!=10)             //false
// console.log(10!=10.0)           //false
// console.log(10!="10")           //false
// console.log(10!=12)             //true

// console.log(10!==10)             //flase
// console.log(10!==10.0)           //false
// console.log(10!=="10")           //true
// console.log(10!==12)             //true

// /*
// Logical Operators 
// Used to make a compound condition:
// Operators        Symbol          Operation                       category                precedance
// LogicalAnd        &&        return true if all                     Binary                  L to R
//                             condotion are true
//                             else return false      
// LogicalOR         ||        return true if atleast                  binary                 L to R
//                             one condition is true                                               
// Logical Not        !        return true if condition
//                             is false and return false
//                             if condition is true                     unary                 R to L
                            
//         Note : false, null , undefined, empty string and 0 are false values rest all other valur are truthy.
// */
// console.log(10&&20)                 //true          20
// console.log(0&&20)                  //false         0
// console.log(10&&0)                  //false         0
// console.log(0&&0)                   //false         0
// console.log(false&&0)               //false         false
// console.log(0&&false)               //false         0


// console.log(10||20)                 //true          10
// console.log(0||20)                  //true          20
// console.log(10||0)                  //true          10
// console.log(0||0)                   //false         0
// console.log(false||0)               //false         0
// console.log(0||false)               //false         false

// // console.log(10!20)                 //false          20
// // console.log(0!20)                  //true           0
// // console.log(10!0)                  //true           0
// // console.log(0!0)                   //true           0
// // console.log(false!0)               //true           false
// // console.log(0!false)               //true           0

// /*
// Bitwise opertaor:
// Operators               Symbols         categaroy       precedene
// 1.Bitise and            &               Binary          L to R
// 2.Bitwise or            |               Bibary          L to R
// 3.Bitwise Xor           ^               Binary          L to R
// 4.Bitwise left shift    <<              Binary          L to R
// 5.Bitwise right Shift   >>              Binary          L to R
// 6.Bitwise Negation     `,-              Unary           R to L

// a       b       a&b     1|b     a^b(a|b-a&b)
// 0       0       0       0       0
// 0       1       0       1       1
// 1       0       0       1       1
// 1       1       1       1       0        
// */
// var a = 58   
// var b = 17
// var c = a&b 
// var d= a|b 
// var e = a^b 
// console.log(c,d,e)   

// /*
// a =58   :       1      1       1       0       1       0       
// b = 17  :       0      1       0       0       0       1
// --------------------------------------------------------------------------------------
// C = a&b :       0      1       0       0       0       0       
//                 32    16       8       4       2       1
//                 ----------------------------------------------------------------------
//                  0     16      0      0       0        0  =>16
// --------------------------------------------------------------------------------------
// d = a/b :       1       1       1       0       1       1       
//                 32      16      8       4       2       1
//                 ----------------------------------------------------------------------
//                 32       16     8       0       2       1       =>59

//  e = a^b :      1       0       1       0       1       1       
//                 32      16      8       4       2       1
//                 ----------------------------------------------------------------------
//                 32      0       8       0       2       1      =>43
//                    */            
// /*
// Bitise Negation operator:
//                         ~x
//         +ve 20                        -ve -30

//         -ve -20                        +ve 30
//         -1   1                          -1 -1
//         --------------------------------------
//            21                               29
//                  -x
//                 (-x)
//         +ve 20                          -ve -30
        
//         -ve -20                         +ve  30
//         ------------------------------------------
//             -20                               30    
//         */

//             /*
//             Conditional Operatoror teranary(?:)
//             used hn e have to execute a statement out of two 
//             statements according to a condition
//             syntax: 
//         condition? statement1:statement2;
//                 true    false
//         */
// //        var num = Number(prompt("enetr the Number :"))
// //        num%2==0 ? document.write(`${num} is even `) : document.write(`${num} is odd`)


//        /*
//        1. WAP to check Whether a two Number are equal or not
//        2. WAP to check Whether a person can vote or not
//        3. WAP to check Wheaater a number if perfact squar number of not
//        */
//         // var a = Number(prompt("Enterthe first Number"))
//         // var b = Number(prompt("Enter the second number"))
//         // a=b ? document.write(`${a=b} is equal`):document.write(`${a!=b} is not equal`)

//         // var age = Number(prompt("Enter the Numbar"))
//         // a>= 18 ? document.write(`${a >=18} can vote`):document.write(`${a} not`)


//         // var num= Number(prompt("Enter the Number"))
//         // var n = parseInt(num ** 0.5)
//         // n*n== num ? document.write(`${num} is perfact Square`):document.write(`${num} is not a perfact Square`)
//        /*
//                 increment(++) i.e x=x+1
//         Pre-Increment           Post-Increment
//         (++oprand)              (operand++)
//         ----------              ------------
//         first Increment         first Assigment 
//         then Assigment          then Increment 

//                 Decrement(--) i.ex=x-1
//         Pre-Decrment            Post -Decrement 
//         (--oprand)              (operand--)
//         ------------            -----------------
//         first Decrement         first Assigment 
//         then Assigment          then Decrement
//         */
// //       var a =   10 
// //       var b =   a++     //b = 10 a=11
// //       var c =   ++a     //a =12 c =11
// //       var d =   a--     //d= 12 e =10
// //       var e =   --a     //a =10 e = 10
// //       a--               //a = 9
// //       --a               //a = 8
// //       console.log(a,b,c,d,e)


// var a =  10
// var b = a++ + ++a
// console.log(a,b)
// var a =  10
// var b = --a - a--
// var c = a-- + a-- +b-- - b--
// console.log(a,b,c)