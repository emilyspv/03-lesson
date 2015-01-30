// This is a single line comment in javascript.

/* BLOCK COMMENT - good for turning off entire sections of code */

// VARIABLES

// STRING DATA MANIPULATIONS************************************************
var userName = "emily";   // setting a variable
userName = "bob";         // accessing or using a variable

// The equals sign is the assignment operator (set 'variable' to 'value')

var firstName = "Emily";
var lastName = "Voreis";

// Bad variable names - don't start with numbers or special symbols, or use reserved keywords or non-descriptive names
// var 1hi there = "something";
// var time = "12:30";
// var variable1222 = "bloop";

// Using single and double quotes
var myComment = "Who said this:";
var myQuote = '"all the world\'s a stage"';    
// Single quotes print literal characters between them, and backslash is only for one character.

// console.log(myComment);    // Shows the value of myComment variable to the console, when we reload
// console.log(myQuote);

var message = firstName + " " + lastName;    // joining two variables
// console.log(message);

// Targeting and replacing element on the page
var string1 = document.getElementById("string1");   // This is a DOM API or targeter
string1.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
// console.log(imagePath);

message = message.toUpperCase();
// console.log(message);

// NUMBER VARIABLES************************************************
// Don't use quotes around your numbers - it will be treated like a string instead of data
var level = 1;
var lives = 3;
var ssNumber = 123456789;   // This is an integer (non-negative, non-decimal)
var cost = 1.50;            // This is a float type number (decimal)
var cost1 = 50;
var cost2 = 50;
var total = cost1 + cost2;  // Performs math by adding number data types
// console.log(total);
// console.log(level);

// ARRAY DATA TYPES************************************************
// Creat an array

var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

imageList.push("images/oil/thumbs/artwork_8.jpg");    // adds to the next spot in the array

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[7]);   // update the src attribute of the image

console.log(imageList.length);                        // gives you the number of elements in the list

// BOOLEAN DATA TYPES************************************************
// True or false, yes or no, 1 or 0

var oldEnough = false;
var hasContent = true;
var age = 18;

// IFTHEN STATEMENTS (branching logic, application logic, business logic, code block)************************************************

// Check the age...

if (age <= 20 && age != 5){     // less than or equal to
    // too young
    oldEnough = false;
}else{
    oldEnough = true;  
}
  
if (oldEnough == true){
    // == means "is equal to"
    // = means "gets set to"
    // more code goes here - sometimes called a "code block"
    console.log("You may go on the roller coaster.");   
}else{
    console.log("You may NOT go on the roller coaster!");
}

// FUNCTIONS************************************************
//
function dynamicGreeting(){
    // Create the built-in date object
    var now = new Date();
    var time = now.getHours();    // extract the hours 
    
    if(time < 12){
        alert("Good morning");
    }
  
    if(time == 12){
        alert("Time to eat lunch at Luna Park");
    }
  
    if(time > 12){
        alert("Good evening! The time is..." + now.toLocaleString());
    }
    
}

// Call the function
dynamicGreeting();







