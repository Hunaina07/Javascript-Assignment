
alert("Hello World");

document.write("Error!Please enter a valid password");

document.write("Welcome to JS Land...");
document.write("<br>");
document.write("Happy Coding!");

console.log("Hello... I can run JS through my web browsers console");


var username;
console.log(username);

var myName = "Hunaina Arif"
console.log(myName)

var message = "message";
alert(message);

var message = "Hello World";
alert(message);

var username = "Hunaina Arif";
var age = "15 years old";
var profesional = "certified mobile  Application Development";
alert(username);
alert(age);
alert(profesional);

var email = "hunainaarif@gmail.com";
alert("My email address is" + email);

var book = "A smarter way to learn Javascript";
alert(book);

var display = "yah! I can write HTML content through Javascript";
document.write(display) 



var age = "I am 18 years old";
alert(age);

var birthyear = "My birth year is 1999";
document.write(birthyear);

// chapter 3 end

// chapter 4 start 

var [username,age,message];
console.log(username);
console.log(age);
console.log(message);

// 5 legal variable names
var myname = "Hunaina";
var my_names = "Hunaina";
var _my_names = "Hunaina";
var myName = "Hunaina";
var MYNAME = "Hunaina";
var myname2 = "Hunaina";
// 5 illegal variable names
var 2myname = "Hunaina";
var my-name = "Hunaina";
var my name = "Hunaina";
var .name = "Hunaina";
var ?myname = "Hunaina";

document.write("Rules for naming JS variables");
document.write("<br>");
document.write("variable names can only contain letters, digits and nonpunctuation");
document.write("<br>");
document.write("variables must begin with a letter of the alphabet,  underscore ( _ ) and dollar sign ($)");
document.write("<br>");
document.write("variable names are case sensitive")
document.write("<br>");
document.write("variable names should not be JS keywords")



 var num = 10;
 var popularNumber = num + 200;
 alert(popularNumber);

 var num = 10;
 var popularNumber = num - 200;
 alert(popularNumber);

 var num = 10;
 var popularNumber = num * 200;
 alert(popularNumber);

 var num = 10;
 var popularNumber = num / 200;
 alert(popularNumber);

 var num = 10;
 var popularNumber = num % 200;
 alert(popularNumber);

function cToF(celsius) 
    {
      var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        console.log(message);
    }
    
    function fToC(fahrenheit) 
    {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
        console.log(message);
    } 
    cToF(25);
    fToC(70);


var a = 10;
var b = ++a - a + a++ + --a -a -a +a-- ;
console.log(b);

var greet = prompt("Please enter your name")
alert('Hi' + greet)

var num = prompt("Enter a number to its mulplication table");
var num = parseInt(num);
var i = 0;
document.write('<tableborder="1" cellspacing="0">');
for(i=0;i<=10;i++){
  document.write("<tr> <td>" + num + "x" + i + "=" + num*i +  "</td></tr>)");
}
document.write("<table/>");



var city = prompt("Please Enter your city");
if("karachi");
alert('welcome to the city of lights');

var gender = prompt("Enter your gender please?")
if(gender .toUpperCase() == "male" .toUpperCase()){
    alert("Good Morning sir")
}
else if(gender .toUpperCase() == "female" .toUpperCase()){
    alert("Good Morning Ma'am")
}

var color = prompt("Enter any color of traffic signal");
if(color.toUpperCase() == "red".toUpperCase()){
    alert("Must stop");
}
else if(color.toUpperCase() == "yellow".toUpperCase()){
    alert("Ready to move");
}
else if (color.toUpperCase() == "green".toUpperCase()){
    alert("Move now");
}



var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

var grid = [];
iMax = 3;
jMax = 2;
count = 0;

    for (let i = 0; i < iMax; i++) {
      grid[i] = [];

      for (let j = 0; j < jMax; j++) {
        grid[i][j] = count;
        count++;
      }
    }
console.log(grid[0][2]); 

for (var input = 1; input <= 10; input++) {
    console.log(input);
   }

var array = ["apple","banana","mango" , "orange", "strawberry"];
for (let a in array) {
    console.log(a);
}

var A = [24,53,78,91,12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (A[i]>largest) {
        var largest=A[i];
    }
}
console.log(largest);

var arr = [24,53,78,91,12];
var min = Math.min(...arr);
console.log(min);


















