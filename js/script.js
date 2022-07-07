//STEP 1
let someMonth;
// function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;

//STEP 2
someMonth = 7;
currentMonth = "July";
summerMonth = true;
myLibraryFunction = null;
// window.console.log(someMonth);
// window.console.log(currentMonth)

//STEP 3

// summerMonth = currentMonth == "June" || currentMonth == "July" || currentMonth == "August";
// window.console.log(summerMonth);
currentMonth = "January";
//isSummer = window.confirm("Is" + currentMonth + " summer");
// window.console.log(isSummer);

//STEP 4
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;
 
//STEP 5
firstName = "Wenxia";
// lastName = prompt("Pleas input your last name: ");
// mayWeContactYou = confirm("May we contact you? ");
// window.console.log("Welcome " + firstName +" " + lastName + " come here ?")
// window.console.log(mayWeContactYou); 


//STEP 6
let strangeMonth = currentMonth + someMonth;
// window.console.log(strangeMonth);

//STEP 7
let val1 = true + "All right !";
let val2 = 7 + false;
// window.console.log(val1);
// window.console.log(val2);

//STEP 8 Adding back flash "\" between I'm
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// window.console.log(someString);

//STEP 9 
let nullVal = null;
// window.console.warn(nullVal);
// window.console.error(emptyVar);

//STEP 10
// window.console.log(typeof("String"));
// window.console.log(typeof(12345));
// window.console.log(typeof(true));
// window.console.log(typeof({"firstName":"Wenxia","lastName":"Man"}));
// window.console.log(typeof(happyDays));

//STEP 11
// firstName = "Wenxia";
// lastName = "Man";
// alertMsg = "Hello " + firstName +" " + lastName + ", Welcome to the JavaScript class !"
// alert(alertMsg);

//STEP 12
// let $name = "Wenxia Man"
// alert("Hello " + $name +", Welcome to the JavaScript class !");

//STEP 13
// let courseName = "JavaScript";
// alert("Hello " + $name +", Welcome to the " + courseName + " class !");

//STEP 14
//  let $name = "Wenxia Man"
//  alert("Hello " + $name +"." + "\n" + "Welcome to the JavaScript class !");


//STEP 15
// $name = prompt("Please input your name here : ");
//alert("Hello " + $name +", Welcome to the JavaScript class !");

//STEP 16
// $name = prompt("Please input your name here : ");
// courseName = prompt("Please input your course you are taking here: ");
// alert("Hello " + $name +", Welcome to the " + courseName + " class !");


//STEP 17
// let x = 10;
// let y = 20;
// window.console.log(x+y);

//STEP 18
// let x = 20;
// x += 20;
// window.console.log(x);


//STEP 19
// let x = 20;
// x *= 5;
// window.console.log(x);

//STEP 20
// let x = 20 % 3;
// x /= 1;
// window.console.log(x);


//STEP 21
// currentMonth = prompt("Please enter current month here : ");
// summerMonth = currentMonth == "June" || currentMonth == "July" || currentMonth == "August";
// window.console.log(summerMonth);

//STEP 22
let x = Number(prompt("please enter year (YYYY) here: "));
let isLeapyear = x % 400 ==0 && x % 4 ==0 || x % 4 ==0 && x % 100 != 0 ;
window.console.log(isLeapyear);
