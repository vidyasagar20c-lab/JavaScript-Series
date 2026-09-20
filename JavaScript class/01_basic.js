var a = 10;
var b = 20.5;
var c = true;
var d = false;
var e = "Hello World";
var f = 'Hello World';
var g = `Hello World`;
var h = '123';
var i = 'true'


console.log(a,typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d,typeof d);
console.log(e,typeof e);
console.log(f,typeof f);
console.log(g,typeof g);
console.log(h, typeof h);
console.log(i, typeof i);

var a = 10;
var b = 20;
var sum = a+b;
console.log(a,"+",b,"=",sum);
console.log(a+ "+" + b + "=" +sum);
console.log($(a)+ $(b) +"=" +$(sum));
console.log(
    $(a)
    +$(b)
   + "="+$(sum));


var p = 625123;
var r = 12.36;
var t = 4;
var si = p*r*t/100;
var total = p+si;
var emi = total/(t*12);

console.log(`
    Principle Amount        :       ${p}
    Rate                    :       ${r}
    Time                    :       ${t}
    Simple Interest         :       ${si.toFixed(0)}
    Total Amount            :       ${total.toFixed(0)}
    EMI Amount              :       ${emi.toFixed(0)}
    `)


//Question 1

var r = 5;
var pi = 3.14;
var area = pi*r*r;

console.log(`
    Radius          :       ${r}
    Value of (pi)   :       ${pi}
    Total Area      :       ${area}
    `)


//     //Question 2

    var l = 10;
    var b = 5;
    var a = l*b;

    console.log(`
        Length              :       ${l}
        Breadth             :       ${b}
        Total Area          :       ${a}`)

//         //Question 3

        var l = 10;
        var b = 5;
        var h = 3;
        var area = 2*((l*b + b*h +  h*l));

        console.log(`
            Length              :       ${l}
            Breadth             :       ${b}
            Heigth              :       ${h}
            Total Sarface Area  :       ${area}`)


//             // question 4

            var  s = 5;
            var area = s*s;

            console.log(`
               Side         :       ${s}
               Total Area   :       ${area} `)


//                // Question 5

               var b = 5;
               var h = 3;
               var area = (b*h)/2;

               console.log(`
                Base            :       ${b}
                Height          :       ${h}
                Total Area      :       ${area}`)


//             //Question 6 

            var c = 34;
            var f = c*9/5+32;

            console.log(`
                temrature in Celcius        :       ${c}
                Temrapture in Fehrenheit    :       ${f}`)

            //Question 7

            var f = 92;
            var c = (f-32)*5/9;

            console.log(`
                temrature in Fehrenheit     :       ${f}
                Temprature in Celcius       :       ${c.toFixed(0)}`)

                var a = 10;
                var b = 20; 
                console.log(`Before Swapping a =${a} and b = ${b}`)
                let c= a                  //a = 10 b = 20 c =10
                a = b                    // a = 20 b = 20 c =10
                b = c                   // a =20 b =0 c =10
                console.log(`after Swaping = ${a}and b = ${b}`)

                var a = 10;
                var b = 20
                console.log(`Before Swapping a =${a} and b = ${b}`)

                a = a+b              //a=30 b= 20
                b = a-b              //a=30 b= 10
                a = a-b              //a=20 b= 10
                console.log(`after Swapping a =${a} and b = ${b}`)

/*
Input Instraction 
    prompt() : used to take input from user
            : it return inputvalue in string format

    Number (): It convert and retrn agument value into a number type
    parseInt(): It convert and return argumentvalue into a number type (integer)
    parasefloat (): It convert and retrn agument value into a number type(float)
 */
 var a = Number (prompt("enter your first Number"))
 var b = Number (prompt("Enter your second"))
 var sum= a+b
 document.write(`${a}+ ${b} = ${sum}`)