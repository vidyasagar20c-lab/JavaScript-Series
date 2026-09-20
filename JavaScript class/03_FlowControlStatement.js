/*
Flow COntrol Statement or Decision Making Statements
1. Conditional Statement or Selection Statements:
    1. If Statement
    2. if else Satement
    3. Nested if else statement 
    4. if else if ledder Statement 
    5.switch case statement
2. Interation Statement or loops:
    1. for loop
    2. for in loop
    3. for of loop   
    4. while loop
    5. do while loop
    6. Nested loops
3. Jump Statements:
    1.break Statement
    2. Continue Statement

1. Conditional Statement or Selection Statements:

if statement: used when execution of a statement Block depend  on a condition syntax:
if(condition){
    ---------
    number of Statement
    ---------
    }
    Note: {} are optional if any we have only one statement in statement block

    */
   if(true) {
    console.log("hello World1")
    console.log("hello World2")
    console.log("hello World3")
    console.log("hello World4")
   }
   console.log("hello World5")
   console.log("hello World6")
   console.log("hello World7")
   console.log("hello World8")

   if(false) {
    console.log("hello World1")
    console.log("hello World2")
    console.log("hello World3")
    console.log("hello World4")
   }
   console.log("hello World5")
   console.log("hello World6")
   console.log("hello World7")
   console.log("hello World8")

  if (!true) 
    console.log("hello World1")
    console.log("hello World2")
    console.log("hello World3")
    console.log("hello World4")
   console.log("hello World5")
   console.log("hello World6")
   console.log("hello World7")
   console.log("hello World8")

/*
if else Statement: Used hen execution of one Statement Block out of two Block depend on a condition

syntax:
if(condition){
    ---------
    number the Statemnet block 1
    ----------
    }
   else{
    -----------
    number the statemnet block 2
    -----------
    }
    */
   if(false) {
    console.log("hello World1")
    console.log("hello World2")
    console.log("hello World3")
    console.log("hello World4")
   }
   else {
   console.log("hello World5")
   console.log("hello World6")
   console.log("hello World7")
   console.log("hello World8")
   }

   if(true) {
    console.log("hello World1")
    console.log("hello World2")
    console.log("hello World3")
    console.log("hello World4")
   }
   else{
   console.log("hello World5")
   console.log("hello World6")
   console.log("hello World7")
   console.log("hello World8")
   }

   var num = Number(prompt("Enter the Number"))
if(num%2==0)
    document.write(`${num} is Even`)
else
    document.write(`${num} is Odd`)
/*
   1. WAP to check Whether a two Number are equal or not
   */
  var a = 1;
  var b = 10;
  if(a===b){
    console.log("Two Number are Equal")
  } else {
    console.log("Two numbar are not equal")
  }
  /*
   2. WAP to check Whether a person can vote or not
   */
  var age =15;
  if(age>=18){
    console.log("you can vote")
  }else{
    console.log("you can not vote")
  }
  /*
   3. WAP to check Wheaater a number if perfact squar number of not
 */
var num = 25;
if(Math.sqrt(num)%1===0){
    console.log(`${num} is perfact square`)
}else{
    console.log(`${num} is not perfact square`)
}

/*
Nested if else : if else within if else Statement
syntax:
if(condition1){
    --------
    if(condition2){
    --------
    ---------
    }
    else{
        -------
        -----
    }
        ------
    }
    else
    {
        -------
        if(condition3){
            --------
            --------
            }
        else{
            -------
            ------
        }
        ------
    }
*/
// var a = Number(prompt("Enter the First Number"))
// var b = Number(prompt("Enter the Second Number"))
// var c = Number(prompt("Enter the thirs Number"))

if (a < b) {
    if (a < c)
        document.write(`${a} is Smallest`)
    else 
        document.write(`${c} is Smallest`)
    }
     else{
        if (b < c)
            document.write(`{b} is Smallest`)
        else
            document.write(`{c} is Smallest`)
    }
/*
1. WAP to check whether a year is leap or not
*/
let year = 2024;
if(year%400===0){
console.log(`${year} is leap`)
}
else if(year%100===0){
    console.log(`${year} is not leap`)
}
else if(year%4===0){
    console.log(`${year} isleap`)
}
else{
    console.log(`${year} is not leap`)
}

/*
2. WAP to check whether a number is divisible by 2 and 3, 2 or 3, neither 2 nor 3
*/
let num = 14;
if(num%2===0 && num%3===0) {
    console.log(`${num} is divided by 2 and 3`)
}
else if(num%2===0 || num%3===0) {
     console.log(`${num} is divided by 2 but not divided by 3`)
}
else{
    console.log(`${num} is not divided by 2 and 3`)
}

/*
if else if leader : When we have n number of conditions
syntax:
if(condition1){
    -------
    ------
}
else if(condition2){
    -----
    -----
}
else if(condition3){
    ------
    ------
} 
else if(condition4){
    -----
    -----
}
--
---
---
else if(conditionn){
    -----
    -----
}
    else{
        ----
        -----
    }
*/
var a = Number(prompt("Enter the first Number"))
var b = Number(prompt("Enter the second Number"))
var c = Number(prompt("Enter the third Number"))
var d = Number(prompt("Enter the fourth Number"))
var e = Number(prompt("Enter the fifth Number"))
if (a >= b && a >= c && a >= d && a >= e)
    document.write(`${a} is Greatest`)
else if (b >= c && b >= d && b >= e)
    document.write(`${b} is Greatest`)
else if (c >= d && c >= e)
    document.write(`${c} is Greatest`)
else if (d >= e)
    document.write(`${d} is Greatest`)
else
    document.write(`${e} is Greatest`)
/*
1. WAP to print day name when user enetr a day number
// */
// // let day = Number(prompt("Enter the day Number: "));
// // if(day===1){
// //     document.write(`Monday`)
// // }
// // else if(day===2) {
// //     document.write(`Tuesday`)
// // }
// // else if(day===3) {
// //     document.write(`Wednesday`)
// // }
// // else if(day===4) {
// //     document.write(`Thursady`)
// // }
// // else if(day===5) {
// //     document.write(`Friday`)
// // }
// // else if(day===6) {
// //     document.write(`Saturaday`)
// // }
// // else if(day===7) {
// //     document.write(`Sunday`)
// // }
// // else {
// //     document.write(`Number is not valid day`)
// // }

/*
2. WAP to print number of days in a month ,when user enter a month number 
*/
let Month = Number(prompt("Enter the Month Number: "))
if(Month===1){
    document.write(`January`)
}
else if(Month===2) {
    document.write(`Febrauray`)
}
else if(Month===3) {
    document.write(`March`)
}
else if(Month===4) {
    document.write(`April`)
}
else if(Month===5) {
    document.write(`May`)
}
else if(Month===6) {
    document.write(`June`)
}
else if(Month===7) {
    document.write(`July`)
}
else if(Month===8) {
    document.write(`August`)
}
else if(Month===9) {
    document.write(`Septemeber`)
}
else if(Month===10) {
    document.write(`October`)
}
else if(Month===11) {
    document.write(`November`)
}
else if(Month===12) {
    document.write(`December`)
}

else {
    document.write(`Number is not valid Month`)
}
/*
3. WAP to make a simple calculator
*/
var a =Number(prompt("Enter the first Number :"))
var b =Number(prompt("Enter the Second Number :"))
var cal = prompt("Press+ for addition\n press - for substraction\n press * for Multiply\n press / for division\n press % for remender\n press ** for power")
if(cal==="-"){
    document.write(`${a}-${b} = ${a-b}`)
}
else if(cal==="+"){
    document.write(`${a}+${b} = ${a+b}`)
}
else if(cal==="*"){
    document.write(`${a}*${b} = ${a*b}`)
}
else if(cal==="/"){
    document.write(`${a}/${b} = ${a/b}`)
}
 else if(cal==="%"){
    document.write(`${a}%${b} = ${a%b}`)
}
 else if( cal==="**"){
    document.write(`${a}**${b} = ${a**b}`)
} else{
    document.write(`Operator is Invalid`)
}
/*
4. Wapto check whether an entered character is lower case vowel, lower case consonant, upper case vowel,
    upper case consonant,digit, space or any spacial charcter
    */
   var ch = prompt("Enter a single Character")
   if(ch.length!==1)
    document.write(`${ch} is Invalid Input,you have to Enter a single character`)
    else if(ch>="a" &&  ch<="z") {
        if(ch=="a" ||  ch=="e" || ch=="i" || ch=="o" || ch=="u")
            document.write(`"${ch}" is lower case vowel`)
        else 
            document.write (`"${ch}" is lower case constant`)
    }
   else if(ch>="A" &&  ch<="Z") {
        if(ch=="A" ||  ch=="E" || ch=="I" || ch=="O" || ch=="U")
            document.write(`"${ch}" is Upper case vowel`)
        else 
            document.write (`"${ch}" is Upper case constant`)
    }
    else if (ch>="0" &&  ch<="9")
        document.write(`"${ch} is Digit`)


/*
Switch case Statemnet used to make a menu based program
syntax:
    Switch(input) {
    case Constant1:
    ----------
    ----------
    break
    case constant2:
    ---------
    -----
    -----
    break
    case constant3:
    -------
    -------
    case constantN:
    -------
    -------
    break
    default:
    ------
    ------
    }
*/
/*
1. WAP to print day name when user enetr a day number
*/
var day = Number(prompt("Enter the day Number :"))
switch(day){
        case 1:
        document.write(`${day} is Monday`)
        break
        case 2:
        document.write(`${day} is Tueday`)
        break
        case 3:
        document.write(`${day} is Wednesday`)
        break
        case 4:
        document.write(`${day} is Thursday`)
        break
        case 5:
        document.write(`${day} is Friday`)
        break
        case 6:
        document.write(`${day} is Saturday`)
        break
        case 7:
        document.write(`${day} is Sunday`)
        break
        default :
            document.write(`${day} is not valid`)

}
/*
2. WAP to print number of days in a month ,when user enter a month number 
*/
var month = Number(prompt("Enter the Month No :"))
    switch(month){
        case 1:
            document.write(`${month} is January`)
            break
            case 2:
            document.write(`${month} is Febuary`)
            break
            case 3:
            document.write(`${month} is March`)
            break
            case 4:
            document.write(`${month} is April`)
            break
            case 5:
            document.write(`${month} is May`)
            break
            case 6:
            document.write(`${month} is June`)
            break
            case 7:
            document.write(`${month} is July`)
            break
            case 8:
            document.write(`${month} is August`)
            break
            case 9:
            document.write(`${month} is September`)
            break
            case 10:
            document.write(`${month} is October`)
            break
            case 11:
            document.write(`${month} is November`)
            break
            case 12:
            document.write(`${month} is December`)
            break
            default:
                {document.write(`${month} is Invalid month`)}

    }
/*
4. Wapto check whether an entered character is lower case vowel, lower case consonant, upper case vowel,
    upper case consonant,digit, space or any spacial charcter
    */
   var ch = prompt("Enter the first latter :")
   switch(true){
    case ch.length!==1 :
    document.write(`${ch} is not valid`)
     break
     case ch==="a" || ch ==="e" || ch=== "i"  || ch===  "o" || ch===  "u" :
    document.write(`${ch}character is lower case Vowel`)
    break
    case ch>= "a"&& ch<="z":
        document.write(`${ch} is lower case consonant`)
        break
    case ch==="A" || ch==="E" || ch==="I"  || ch=== "O" || ch=== "U" :
    document.write(`${ch} character is Upper case Vowel`)
    break
    case ch>= "A"&& ch<="Z":
        document.write(`${ch} character is Upper case consonant`)
        break
    
    case ch >=0  && ch <=9:
        document.write(`${ch} is digit`)
        break
        default:
            document.write(`${ch} is Invalid`)
       }
/*
var a = Number(prompt("Enter the first Number"))
var b =Number(prompt("Enter the second Number"))
var ch = prompt("Press +for Addition\npress-for Subtration\npress*for Multiplicaton \npress/ for division\n press % for remender \n press** for power\n Enter your choice:")
switch(ch){
    case"+":
    document.write(`${a}+${b} = ${a+b}`)
    break
    case"-":
    document.write(`${a}-${b} = ${a-b}`)
    break
    case"*":
    document.write(`${a}*${b} = ${a*b}`)
    break
    case"/":
    document.write(`${a}/${b} = ${a/b}`)
    break
    case"%":
    document.write(`${a}%${b} = ${a%b}`)
    break
    case"**":
    document.write(`${a}**${b} = ${a**b}`)
    break
    default:
        document.write(`Invalid choice`)    

}

/*
Intraction Statement or loops:
used to make itrate or repeat number of Statement N times
1. for loops : use when we know number of iteraction
syntax:
for(initialization: condition:updatation){
    --------
    ---------
    number of Statemnet
    ---------
    ---------}
 */
for(var i=1;i<=10;i++) {
console.log(`"hello world"${i}`)
}
for(var i=10;i>=1;i--) {
console.log(`"hello world"${i}`)
}
for(var i=10;i;i++) {
    console.log(`"hello world"${i}`)
}
for(var i=10;i;i-2) {
    console.log(`"hello world"${i}`)
}
for(var i=10;i;i-3) {
    console.log(`"hello world"${i}`)
}
for(var i=1;i<=10;++i) {
    console.log(`"hello world"${i}`)
}
for(var i=1;i<=10;i=++i) {
    console.log(`"hello world"${i}`)
}
for(var i=1;i<=10;i=i++) {
    console.log(`"hello world"${i}`)
}
for(var i=1;i<=10;i++);
 {
    console.log(`"hello world"${i}`)
}
for(let i=1;i<=10;i++) {
    console.log(`"hello world"${i}`)
}
for(let i=1;i<=10;i++) {
    console.log(`"hello world"${i}`)
}

var num = Number(prompt("Enter the Number :"))
    for(let i=1;i<=10;i++){
        document.write(`${num}*${i} = ${num*i}<br>`)
    }


var start = Number(prompt("Enter range in short from :"))
var end = Number(prompt("To"))
var sum = 0 
for(let i= start;i<=end;i++){
sum = sum+i
}       
document.write (`sum of Numbers from ${start} to ${end}  = ${sum}`)
/*
describe
start = 1       end = 10
i =     1       2       3       4       ...     10
sum=    0+1=1   1+2=3   3+3=6   6+4     ...     55
 */
/*
for Loops Questions
1. WAP to print sum of Even and odd Numbers in specific Range
*/
var start = 0
var end =100
var sumEven = 0
var sumOdd = 0
for(i =start;i<=end;i++){
    if(i%2===0){
        sumEven = sumEven+i
    }else{
        sumOdd =sumOdd+i
    }
}
console.log(`value of the sumEven ${sumEven}`)
console.log(`value of the SumOdd ${sumOdd}`)
    /*
2. WAP to print factorial of any specific number
*/
var fac = 1
for(i=1;i<=20;i++){
fac = fac*i
}
console.log(fac)
/*
3. WAP to check Wheather a number is perfact number or not 
*/
var num =6
var sum =0
for(i=1;i<=num;i++){
   if(num%i==0){
    sum = sum + i
   }
}
if(sum ==num){
    console.log(` is perfact nuber`)
}else{
    console.log(` is not perfact number`)
}
/*
4. WAP to check wheather a number is prime number or not  
*/
num = 28;
if(num<=1){
        console.log(`${num} is not prime number`)
}
for(i=1;i<=Math.sqrt(num);i++){
    if(num%i===0){
        console.log(`${num} is not prime number`)
    }
    } 


/*while loop:
Used When we does not have a fix idea of number of iterations:
syntax:
Initialization
while(condition) {
-----------
------------
number Statements
---------------
--------------
updation:
}
*/
// var i = 1
// while (i <= 10) {
//     console.log(`Hello World ${i}`)
//     i++
// }
// var a = 0
// var b = 1
// var sum = Number(Prompt("Enter the last term Range of febonicci Series :"))
// document.write(`${a} ${b}`)
// while (sum <= num) {
//     document.write(`${sum}`)
//     a = b
//     b = sum
//     sum = a + b
// }
 
/*
num = 100
a       0           1           1           3           5       8           13          21          34      55
b       1           1           2           5           8       13          21          34          55      89 
sum     1           2           3           8           13      21          34          55          89      144
op=0    1           2           3           8           21       21         34          55          89
*/


var num = prompt(Number("Enter the Number : "))

var sum = 0
while(num != 0){        //1729      172      17         1       0
    let r= sum%10       //9         2       7           1
    sum = sum+r         //0+9=9     9+2=11  11+7=18     18+1=19
    num = parseInt(num/10)//172     17      1           0
}
document.write(`Sum of Digit = ${sum}`)

var num = prompt(Number("Enter the Number : "))

var rev = 0
while(num != 0){        //1729          172         17              1                0
let r= sum%10          //9              2           7               1
rev =rev*10+r          //0*10+9=8       9*10+2=92   92*10+7=927     927*10+1=9271
num = parseInt(num/10)//172             17          1                0
}
document.write(`Reverse = ${rev}`)


/*
1.WAP to calculate sum of even and odd digits of a specific number
*/
var start =0;
var end= 50;
var sumEven =0
var sumOdd = 0
for(i =start;i<=end;i++){
    if(i%2===0){
        sumEven= sumEven+i
    }else{
        sumOdd=sumOdd+i 
    }
}
console.log(`${sumEven}`)
console.log(`${sumOdd}`)

/*
2. WAP to count even and odd digits in a number
*/
var num = 65366471
var numStr= num.toString()
var countEven=0
var countOdd = 0
for(i=0;i<numStr.length;i++){
    var digit =Number(numStr[i])
    if(digit%2===0){
        countEven =countEven+1
        
    }else{
        countOdd = countOdd+1
        
    }
}
document.write(`Even digit: ${countEven}`)
document.write(`odd digit :  ${countOdd}`)
console.log(`${countOdd}`)
console.log(`${countEven}`)

/* 
3. WAP to revese a Number
*/
var num = 1234;
sum =0
while(num!=0){
    let r = num%10  //1234 =4  123 =3 12= 2 1
    sum = sum*10+r    // 0+4=4  1+3 =4  2+2=4 3+1 =4
    num = parseInt(num/10) 
}
console.log(`sum = ${sum}`)

 /*
4. WAP to Check Wheather a number is NEON number or not
(1,0)
*/
let num = 18;
let squ = num*num
let sum  = 0
while(squ>0){
    sum += squ %10;
    squ = Math.floor(squ/10)
}
if(sum===num){
    console.log("Number is NEON")
}
else{
    console.log("number is not NEON")
}
console.log(squ)

/*
5. WAP to check Wheather a number is Armstrong number or not 
(1,153,379,371,407)
*/
var n = 153
var sum = 0 
var num = n
while(num!=0){
    let r = num%10
    sum = sum +r**3
    num = parseInt(num/10)
}
if(n===sum){
    console.log(`${n} is Armstrong Number`)
}else{
    console.log(`${n} is not Armstrong number`)
}
/*
6. WAP to check Wheather a number is palicdrome Number
*/
/*
7. WAP to check wheather a number us Magical number or not
*/
for(let i=1;i<=2000;i++){
    let sum =0
    let num = i
    while(num!=0){
        r = num%10
        sum = sum + r
        num = parseInt(num/10)
    }
    num=sum
    let rev = 0
    while(num!=0) {
        let r = num%10
        rev = rev*10 + r
        num = parseInt(num/10)
    }
    if(sum*rev===i){
        console.log(i)
    }
}
/*
do While loop:
used When we have to excute number of statement atleast one time Wheather condition is false

Note: for and While loops are entry controlled loops and do while loop is exit controlled
syntax:
        Inilializtion:
        do{
        ---------
        --------
        number of Satement 
        ---------
        ---------
        updation
        }while(condition);
        */
    //    var i =1
    //    do{
    //     console.log(`Hello world ${i}`)
    //     i++
    //    }while(i<=10)

    // do{
    //     var a = Number(prompt("enter the first Number: "))
    //     var b = Number(prompt("enetr the second Number : "))
    //     var ch = prompt("Press +for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPess % for Reminder \nPress ** for Power\nEnetr your choice :")
    //     switch(ch) {
    //         case "+":
    //             alert(`${a} + ${b} = ${a+b}`)
    //             break
    //             case "-":
    //             alert(`${a} - ${b} = ${a-b}`)
    //             break
    //             case "*":
    //             alert(`${a} * ${b} = ${a*b}`)
    //             break
    //             case "/":
    //             alert(`${a} / ${b} = ${a/b}`)
    //             break
    //             case "%":
    //             alert(`${a} % ${b} = ${a%b}`)
    //             break
    //             case "+":
    //             alert(`${a} + ${b} = ${a+b}`)
    //             break
    //             case "+":
    //             alert(`${a} + ${b} = ${a+b}`)
    //             break
    //     }
    
    //         ch = prompt("press n to Exit \npress other key to contiune")
    
    // for(num = 1; num<=20;num++)
    //     document.write(`table of ${num} is <br>`)
    //     for(var i = 1; i<=20;i++){
    //         document.write(`${num} * ${i} = ${num*i} <br>`)
    //     }

    //         document.write("<br>")
    // }
    
    


   //1.WAP to print all perfact numbers(6,28.496,8128)
   //2.WAP to print and count all palidrome numbers in a range
   //3.WAP to print and count all Armstrong numbers(153,370,271,407)
   //4.WAP to print all magical number (1,81,1458,1729)
   //5.WAP to count and print all prime number in a range 



   