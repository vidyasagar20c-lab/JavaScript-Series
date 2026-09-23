/* 
string : collection of charcters
            or
        sequance of charcters
            or
        Array of charcters
        eg. email, name, username, passord,etc
    ->  Immutable Date type
    ->  Index start with 0
    */
   // String Constant 
//    var a = "Ducat Education Noida"
//    var b = `Ducat Education Noida`
//    var c = 'Ducat Education Noida'

//    console.log(a)
//    console.log(b)
//    console.log(c)

   // string use for loops
//    string  use for loop
var a = "Ducat Education Noida"
    // for(let i=0;i<=a.length;i++){
    //     console.log(a[i])
    // }

    // string use while loop
    // let i = 0
    // while(i<=a.length){ 
    //    console.log(a[i])
    //    i++
    // }

    //String use do while loop
    // let i = 0
    // do{
    //     console.log(a[i])
    //     i++
    // }while(i<=a.length)

    // string use for in loop

    // for(let i in a){
    //     console.log(a[i])
    // }

    // string use for of loop
    // for(let i of a){
    //     console.log(i)
    // }


    /*
    String Method
    charAT() : return characters at any specific index
    at()     : return characters at any specific index, we can also use -ve index
*/
    // var a = "Ducat"
    // console.log(a)
    // console.log(a.charAt(0))
    // console.log(a.at(0))

    // console.log(a[-3])
    // console.log(a.charAt(-3))
    // console.log(a.at(-4))

    // chartCodeAt() : return unicode of first cahrcter of string it no argument is provide, else return
    //  unicode of that particular indexed value

    // var a = "Ducat"
    // console.log(a.charCodeAt(0))
    // console.log(a.charCodeAt(1))
    // console.log(a.charCodeAt(2))
    // console.log(a.charCodeAt(3))
    // console.log(a.charCodeAt(4))
    // console.log(a.charCodeAt(5))

    /* uni code 
    A = 65          a = 97          0 = 48
    B = 66          b = 98          1 = 49
    -               -               -
    Z = 90          z = 122         9 = 57
    */

    // fromCharCode() : convert a unicode into charcters

    // console.log(String.fromCharCode(99))
    // console.log(String.fromCharCode(76))
    // console.log(String.fromCharCode(86))
    // console.log(String.fromCharCode(990))
    // console.log(String.fromCharCode(567))
    // console.log(String.fromCharCode(56))
    // console.log(String.fromCharCode(99))
    // console.log(String.fromCharCode(8377))


    /* 
    index of() :  return first of index any subString and return -1 it them not found string
    lastIndexof(): return last of index any subString and return -1 it them not found string
    Search(): return first index of any subString in String and return -1 it them not found in string
    includes(): check whether a subString is exist in string or not it return true of false
    */
   
    var a = "JavaScript is a high level Scripting langauge"
    // var b = "JavaScript is a  level Scripting langauge"

    // console.log(a.includes("Script"))
    // console.log(a.search("Script"))
    // console.log(a.lastIndexOf("Script"))
    // console.log(a.indexOf("Script"))

    // console.log(a.includes("js"))
    // console.log(a.search("js"))
    // console.log(a.lastIndexOf("js"))
    // console.log(a.indexOf("js"))

    // Copy a string into another
    // var b = a
    // console.log(`Original string is "${a}"`)
    // console.log(`Copy string is "${b}"`)


    //concat : concat one or more string in a string

//     var a = "Ducat"
//     var b = "Education"
//     var c = "Noida"
//     var d = a + b + c
//     var e = a.concat(b,c)
// console.log(d)
// console.log(e)

// startswith() : check wheather a string start with specific Substring or not
// endswith() : check wheather a string  last with specifi substring or not

 var a = prompt("Enter the username,website,name")

if(a.startsWith("www."))
    document.write(`"${a}" is a Domain Number`)
else if(a.endsWith("@gmail.com"))
    document.write(`"${a}" is a email Address`)
else 
    document.write(`"${a} is a normal Message`)