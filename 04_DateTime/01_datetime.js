// to set and time
// 1st Style :  new Date() : return current Date and time

console.log(new Date())
console.log(new Date().toString())
console.log(new Date().toDateString())
console.log(new Date().toTimeString())
console.log(new Date().toLocaleString())
console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleTimeString())

// 2nd Style : new Date [year, month, day, hour, mintues,second,milisecond]
// we have to spcifify atleast two items in Date 
// if we pass a single argument in date then it treat it as miliseconds

console.log(new Date(2026,9,12,15,30,30,2000).toLocaleString())
console.log(new Date(2026,9,12,15,30,30).toLocaleString())
console.log(new Date(2026,9,12,15,30).toLocaleString())
console.log(new Date(2026,9,12,15).toLocaleString())
console.log(new Date(2026,9,12).toLocaleString())
console.log(new Date(2026,9).toLocaleString())
console.log(new Date(2026).toLocaleString())

// 3rd Style : new Date (miliseconds)
console.log(new Date(123456987654).toLocaleDateString())

// 4th Style : new Date (date String)

console.log(new Date("12/10/2026").toLocaleString())
console.log(new Date("12/10/2026 03:30:30 pm".toLocaleString()))

// to get date and time

var a = new Date(2026,8,30,21)
console.log(a.getFullYearr());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getUTCDate());
console.log(a.getTime()); // miliseconds different 1 jan 1970 to current
console.log(a.getDay()); // week day
console.log(Date.now()) //miliseconds since 1 jan 1970 