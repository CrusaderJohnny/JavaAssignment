/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costs = 0;
var daysSelected = 0;
var dailyrate = 35;

let mon = document.getElementById("monday");
let tues = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thur = document.getElementById("thursday");
let fri = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
let clrButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function monday() {
    if (mon.classList.contains("clicked") != true) {
        mon.classList.toggle("clicked");
        daysSelected += 1;
        calculate();
    } else {
        mon.classList.toggle("clicked");
        daysSelected -= 1;
        calculate();
    }
}
function tuesday() {
    if (tues.classList.contains("clicked") != true) {
        tues.classList.toggle("clicked");
        daysSelected += 1;
        calculate();
    } else {
        tues.classList.toggle("clicked");
        daysSelected -= 1;
        calculate();
    }
}
function wednesday() {
    if (wed.classList.contains("clicked") != true) {
        wed.classList.toggle("clicked");
        daysSelected += 1;
        calculate();
    } else {
        wed.classList.toggle("clicked");
        daysSelected -= 1;
        calculate();
    }
}
function thursday() {
    if (thur.classList.contains("clicked") != true) {
        thur.classList.toggle("clicked");
        daysSelected += 1;
        calculate();
    } else {
        thur.classList.toggle("clicked");
        daysSelected -= 1;
        calculate();
    }
}
function friday() {
    if (fri.classList.contains("clicked") != true) {
        fri.classList.toggle("clicked");
        daysSelected += 1;
        calculate();
    } else {
        fri.classList.toggle("clicked");
        daysSelected -= 1;
        calculate();
    }
}
mon.addEventListener("click", monday);
tues.addEventListener("click", tuesday);
wed.addEventListener("click", wednesday);
thur.addEventListener("click", thursday);
fri.addEventListener("click", friday);
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    if (half.classList.contains("clicked")) {
        half.classList.remove("clicked");
        full.classList.toggle("clicked");
    }
    dailyrate = 35;
    costs = 0;
    daysSelected = 0;
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");
    calculate();
}
clrButton.addEventListener("click", clearDays);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfRate() {
    if (half.classList.contains("clicked") != true) {
        dailyrate = 20;
        half.classList.toggle("clicked");
        full.classList.toggle("clicked");
    }
    calculate();
}
half.addEventListener("click", halfRate);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullRate() {
    if (full.classList.contains("clicked") != true) {
        dailyrate = 35;
        full.classList.toggle("clicked");
        half.classList.toggle("clicked");
    }
    
    calculate();
}
full.addEventListener("click", fullRate);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    var costs = document.getElementById("calculated-cost");
    let total = daysSelected * dailyrate;
    costs.innerHTML = total;
}