//! Chapter 26-30

//? Question 1

// var number = +prompt("Enter a number: ");


// if (number > 0) {
//     document.write(`The number is ${number} <br> `)
//     document.write(`round off value ${Math.round(number)} <br> `);
//     document.write(`floor value ${Math.floor(number)} <br> `);
//     document.write(`ceil value ${Math.ceil(number)} <br> `);
// }
// else {
//     document.write("plz Insert the positive value");
// }

//? Question 2


// var number = parseFloat(prompt("Enter a number: "));

// if (number < 0){
//     document.write(`The number is ${number} <br> `)
//     document.write(`round off value ${Math.round(number)} <br> `);
//     document.write(`floor value ${Math.floor(number)} <br> `);
//     document.write(`ceil value ${Math.ceil(number)} <br> `);
// }


// else{
//     document.write ("plz Insert the negative and float value");
// }


//? Question 3

// var number = +prompt("Enter a number"); 

// document.write(`The absolute value of ${number} is ${Math.abs(number)}`);


//? Question 4

// var number = Math.round(Math.random()*6);
// if (number === 0){
//     number++;
//     document.write(`The random value of dice is ${number}`);
// }else{
//     document.write(`The random value of dice is ${number}`);
// }

//? Question 5

// var number = Math.round(Math.random())+1;
// if (number === 1){
//     document.write(`The random coin value is Tail ${number}`);
// }

// else{
//     document.write(`The random coin value is Head ${number}`);
// }

//? Question 6

// document.write(`The random number between 1-100 is ${Math.round(Math.random()*10**2)+1}`)

//? Question 7

// var weight = parseInt(prompt("Enter weight in kgs: "));

// document.write(`The weight of the user is ${weight} kilograms`);

//? Question 8

// var snumber = Math.round(Math.random()*10)+1;
// console.log(snumber);

// var number = +prompt("Try to guess the number");


// if (number === snumber){
//     alert("Congratulations, You have guessed correct !!!!!")
// }
// else{
//     alert("Try again you guess is incorrect");
// }





//! Chapter 31-34





//? Question 1

// document.write(new Date);

//? Question 2

// date = new Date();

// var arr = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

// document.write(`Current month: ${arr[date.getMonth()]}`);

//? Question 3

// date = new Date()
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// var day = date.getDay()

// for (var i = 0; i<arr.length;i++){
//     if (i === day){
//         document.write(`Today is ${arr[i].slice(0,3)}`);
//     }
// }


//? Question 4

// date = new Date();

// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// var day = date.getDay();

// if((day === arr.indexOf("Sunday")) || ((day === arr.indexOf("Saturday")))){
//     document.write(`Its fun day`);
// }
// else{
//     document.write(`Its day other than fun day`);
// }


//? Question 5

// date = new Date();

// var day = date.getDay()

// if (day <16){
//     document.write(`First fifteen days of the day`);
// }
// else{
//     document.write(`Last days of the month`);
// }

//? Question 6

// var date = new Date();

// document.write(`Current Date: ${date} <br><br> `);
// document.write(`Elapsed milliseconds since January 1, 1970: ${date.getTime()} <br> <br>`);
// document.write(`Elapsed Seconds since January 1, 1970: ${(date.getTime()) / 1000} <br><br>    `);

//? Question 7

// var date = new Date();
// var hour = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// console.log(hour,minutes,seconds);
// var hour = 23;

// if(0<=hour && hour<=23){
//     if (hour >= 12 ){
//        alert("Its PM")
//     }
//     else{
//         alert("Its AM")
//     }    
// }
// else{
//     document.write("plz do write correct time");
// }

//? Question 8

// var date = new Date(2020,11,31,0,0,0);

// document.write(date);

//? Question 9

// var ramdanDate = new Date("June 18, 2015");

// debugger;

// var ramdanDate = ramdanDate.getTime();

// var date = new Date().getTime();

// var calculatedTime = Math.round((date - ramdanDate)/1000*60*60*24);

// document.write(`${calculatedTime} days have passed since 1st Ramdan,2015`);

//? Question 10

// var referenceDate = new Date("Dec 5, 2015");

// var referenceDate = referenceDate.getTime();

// var date = new Date().getTime();

// var calculatedTime = Math.round((date - referenceDate)/1000);

// document.write(`${calculatedTime} seconds had passed since beginning of 2015`);


//? Question 11

// var currentDate = new Date();
// console.log(currentDate);



// var previousDate = new Date ();
// previousDate.setHours(currentDate.getHours()-1);
// console.log(previousDate);

//? Question 12

// var currentDate = new Date();
// console.log(currentDate);



// var previousDate = new Date();

// previousDate.setFullYear(currentDate.getFullYear()-1000);
// console.log(previousDate);


//? Question 13

// var age = +prompt("What is your age");

// var date = new Date();

// document.write(`Your age is ${age} <br> `);
// document.write(`Your birth year is ${date.getFullYear() - age}`);

//? Question 14

// document.write(" <h1>K-ELECTRIC BILL</h1>");
// var name = prompt("Enter your name ");
// var date = new Date();
// var arr = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var Month = arr[date.getMonth()];
// var NoOfCharges = 410;
// var charges = 16;
// var latePayableCharges = 350;

// document.write(`Customer Name: ${name} <br> `);
// document.write(`Month: ${Month} <br> `);
// document.write(`Number of Charges: ${NoOfCharges} <br> `);
// document.write(`Charges per unit: ${charges} <br> `);

// document.write(`Net Amount Payable (within Due Date): ${NoOfCharges*charges} <br> `);
// document.write(`Late payment surcharge: ${latePayableCharges} <br> `);
// document.write(`Gross Amount Payable (after Due Date): ${(NoOfCharges*charges)+latePayableCharges}`);
