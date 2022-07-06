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
window.console.log(someMonth);
window.console.log(currentMonth)

//STEP 3

summerMonth = currentMonth == "June" || currentMonth == "July" || currentMonth == "August";
window.console.log(summerMonth);
currentMonth = "January";
isSummer = window.confirm("Is" + currentMonth + " summer");
window.console.log(isSummer);