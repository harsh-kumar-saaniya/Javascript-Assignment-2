// ====================
// CHAPTER NO 1
// ====================

// Task # 1

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");

// var fullName = firstName+" "+lastName;

// alert("Hello! "+fullName+" "+ "welcome to my Programming world...!!!");




// Task # 2

// var favoriteMobileName = prompt("Enter your favorite mobile name: ");
// var favoriteMobileNameLength = 0;
// var favoriteMobileNameLength = favoriteMobileName.length;
// document.write("<h1>CHAPTER # 1</h1>")
// document.write("<h2>Task # 2</h2>")
// document.write("My favorite phone is: " + favoriteMobileName + "<br>Length of string: " + favoriteMobileNameLength);




// Task # 3 

// var OurCountryPeople = "Pakistani";
// var nIndex = OurCountryPeople.indexOf("n");
// document.write("<h2>Task # 3</h2>")
// document.write("String: " + OurCountryPeople+ "<br> Index of 'n': " + nIndex);



// Task # 4

// var StringName = "Hello World";
// document.write("<h2>Task # 4</h2>")
// document.write("String: "+ StringName +"<br> Last index of 'I': "+ StringName.lastIndexOf("l"));



// Task # 5

// var characterName = "Pakistani";
// var characterIndex = characterName[3];
// document.write("<h2>Task # 5</h2>")
// document.write("String: "+ characterName + "<br>Character at index 3: "+ characterIndex); 




// Task # 6


// ====================================================================

// var firstName = prompt("Please enter your first name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName.concat(" " + lastName); 
// document.write(fullName)


// ====================================================================








// Task # 7

// var city = "Hyderabad";
// document.write("<h2>Task # 7</h2>")
// var cityReplace = city.replace("Hyderabad", "Islamabad");
// document.write("City: "+ city+ "<br> After replacement: "+cityReplace);





// Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g, "&");
// document.write("<h2>Task # 8</h2>")
// document.write(message2);




// Task # 9

// var value = "472";
// document.write("<h2>Task # 9</h2>")
// document.write("value: "+value);
// document.write("<br>Type: string");
// document.write("<br><br>value: "+ Number(value));
// document.write("<br>Type: Number");





// Task # 10

// var Userinput = prompt("Please input any string it will convert your string into capital letters: ");
// document.write("<h2>Task # 10</h2>")
// document.write(Userinput.toUpperCase());




// Task # 11

// var Userinput2 = prompt("Please input any string it will convert your string into title case: ");
// Userinput3 = Userinput2[0].toUpperCase() + Userinput2.slice(1).toLowerCase();
// document.write("<h2>Task # 11</h2>")
// document.write("User input: " + Userinput2);
// document.write("<br>Title case: " + Userinput3);




// Task # 12

// var  num = 35.36;
// var num1 = 35;
// var num2 = 36;
// // var numasstring = num.toString();
// var numasstring1 = num1.toString();
// var numasstring2 = num2.toString();
// document.write("Number:" + num+"<br>" + "Result:" + " " +num1+num2)



// Task # 13

// var username = prompt("Please input your name: ");
// for(var i = 0; i<=username.length; i++){
//     if(username[i] === "!" || username[i] == "," || username[i] == "." || username[i] == "@"){
//        prompt("Please enter a valid username");
//     }

// }






// Task # 14

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userChoice = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am? ");
// var userChoice2 = userChoice.toLowerCase();
// document.write("<h2>Task # 13</h2>")

// for(var i = 0; i <=bakeryItems.length; i++){
//     if(bakeryItems[i] === userChoice2){
//         document.write(userChoice2 + " " + "is available at index "+ i + " " + "in our bakery");
//     }
//     else{
//         document.write("We are sorry."+" "+ userChoice2 + " "+ "is not available in our bakery");
//     }
//     break
// }






// Task # 15

// var userPassword = prompt("Please enter password here ");
// var userPasswordLength = userPassword.length;
// document.write("<h2>Task # 15</h2>")
// document.write("Entered password: " + userPassword)
// for(var i = 0; i<=userPassword.length; i++){
//     if (userPassword[i] == 1||2||3||4||5||6||7||8||9){
//         document.write("<br>Password can not begin with a number: ")
//     }
//     break
// }
// if (userPasswordLength == 6){

// }
// else{
//     var passwordalert = document.write("<br>Please enter a valid pasword"); 
// }





// Task # 16

// var university = "University of Karachi";
// document.write("<h2>Task # 16</h2>")

// for(var i = 0; i<=university.length; i++){
//     var university2 = university[i].split(" ");
//     document.write(university2+"<br>");
// }




// Task # 17

// var userInput = "Pakistan"
// var userInput2 = userInput.slice(-1);
// document.write("<h2>Task # 17</h2>")
// document.write("User input: " + userInput + "<br>Last character of input: " + userInput2);




// Task # 18


// var textString = "The quick brown fox jumps over the lazy dog";
// var stringsplit = textString.toLowerCase().split(" ");
// var count = 0;

// var a = stringsplit[0];

// for (var i = 0; i < stringsplit.length; i++) {
//     if (stringsplit[i] === "the") {
//         count++;
//     }

// }
// document.write("<h2>Task # 18</h2>")
// document.write("Text: " + textString + "<br>There are "+ count + " occurence(s) of the word 'the' ")











// ================================
// // CHAPTER # 21-25 MATHS MEHTODS
// ================================










// Task # 1


// var positiveInt = prompt("Enter Positive integer number: ");
// var roundOff = Math.round(positiveInt);
// var floorValue = Math.floor(positiveInt);
// var ceilValue = Math.ceil(positiveInt);
// document.write("<h2>Task # 1</h2>")

// document.write("Number: " + positiveInt + " <br>round off value: " + roundOff +" <br>Floor value: " + floorValue + " <br>Ceil value: " + ceilValue);





// Task # 2

// var negativeInt = prompt("Enter negative integar number: ");
// var roundOff = Math.round(negativeInt);
// var floorValue = Math.floor(negativeInt);
// var ceilValue = Math.ceil(negativeInt);
// document.write("<h2>Task # 2</h2>")

// document.write("Number: " + negativeInt + " <br>round off value: " + roundOff +" <br>Floor value: " + floorValue + " <br>Ceil value: " + ceilValue);





// Task # 3

// function absValue(number){
//     if (number < 0 ){
//         return -number
//     }
//     else {
//         return number
//     }
// }

// document.write("<h1>Task # 3</h1>")
// document.write("The absolute value of 5 is: "+absValue(5))






// Task # 4

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var improvedNum1 = (bigDecimal * 9) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var numberOfStars1 = Math.floor(improvedNum1);

// document.write("<h1>Task # 4</h1>")
// document.write("random dice value is" + " " +numberOfStars+ "<br>")
// document.write("random dice value is" + " " +numberOfStars1)






// Task # 5

// var heads = prompt("Enter Heads Username");
// var tails = prompt("Enter Tails Username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 2) {
//     alert("random coin value: " + heads )
// }
// else {
//     alert("random coin value: " + tails )
// }






// Task # 6

// var num = Math.random()*100;
// var fixed = num.toFixed(0)

// document.write("<h1>Task # 6</h1>")
// document.write(num)


// ------------------------------------------------------------------------------------------------------------------------------------


// Task # 7

// var a = 50;
// var return = parseInt("a");
// document.write(return);

// var a = prompt("enter your weight in kilograms");
// document.write(parseInt("The weight of user is" + " " + "a" )+"<br>");


// document.write(parseInt("50")+"<br>");
// document.write(parseInt("50.2")+"<br>");
// document.write(parseInt("50.2")+"<br>");



// Task # 8

// var secretnum = 5;
// var userinput = prompt("please enter the secret Number");
// for (if userinput === secretnum){
//     alert(congratulation you are winner)
// }
// else {
//     alert(sorry, you didnt choose a right answer)
// }






//                                                     END
// xxxxxxxxxxx------------------------xxxxxxxxxxx------------------------xxxxxxxxxxx------------------------xxxxxxxxxxx










// ================================
// // CHAPTER # 31-34 DATA METHOD
// ================================


// Task  # 1

// var date = new Date();
// document.write("<h1>Task # 1</h1>")
// document.write(date);




// Task # 2

// var CurrentDate = new Date();
// var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August","September", "October","November", "December"];
// var Currentmonth = CurrentDate.getMonth();
// var monthAlert = months[Currentmonth];
// document.write("<h1>Task # 2</h1>")
// document.write("Current month: "+monthAlert);




// Task # 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var Today = date.getDay();
// var nameOfToday = dayNames[Today];
// document.write("<h1>Task # 3</h1>")
// document.write("Today is "+nameOfToday);




// Task # 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var Today = date.getDay();
// var nameOfToday = dayNames[Today];
// document.write("<h1>Task # 4</h1>")
// if(nameOfToday === "Sat"||"Sun"){
//     document.write("It's fun day");
// }





// Task # 5

// var date = new Date();

// if(date < 16){
//     alert(" “First fifteen days of the month” ");
// }
// else{
//     alert(" “Last days of the month” ");
// }





// Task # 6

// var date = new Date("Jan 1, 1970");




// Task # 7


// var date = new Date();
// var Hours = date.getHours();

// document.write("<h1>Task # 7</h1>")
// if(Hours < 12){
//     document.write("It's am");
// }
// else{
//     document.write("It's pm");
// }





// Task # 8

// var laterDate = new Date("May 31, 2020");
// document.write("<h1>Task # 8</h1>")
// document.write("Later Date: " + laterDate);





// Task # 9

// var date = new Date("June 18, 2015");
// console.log(date);  

// var days = date.getTime();


// console.log(days);



// 13. Write a program to ask the user about his age. 
// Calculate and show his birth year in your browser. 



// var dob = new Date(prompt("Enter your date of birth", "Dec 26, 2020"))
// var b = dob.toString();
// var years =     b.slice(11,15)

// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is:" + " " +accuage + "<br>" + "Your birth year is:" +years);










// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
//  Note: 1st Ramadan was on June 18, 2015 

// var d = new Date("Jun 18, 2015");
// var dmili = d.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dmili;
// var ramzan = Math.floor(diff/(1000*60*60*24))

// alert(ramzan + " " + "days have passed since 1st Ramzan, 2015")

// 10. Write a program that displays in your browser
// the seconds that elapsed between the reference 
// date and the beginning of 2015. 

// var d = new Date("Dec 05, 2015");
// var dmili = d.getTime();

// document.write("on reference date" + " " +  d + "," +"<br>"+  dmili + " " + "seconds had passed since beginning of 2015")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
//  finally display the date object in your browser

// var d = new Date();
// var ago = d.subtract(1, "hours");
// // var today = new Date();
// // var todaymili = today.getTime();
// // var diff = todaymili - dmili;
// // var ramzan = Math.floor(diff/(1000*60*60*24))

// document.write("current date:" + " " + d + " "+ "1 hour ago, it was" + " " + ago )

// var d = new Date();
// d.setFullYear(2001);






//                                                     END
// xxxxxxxxxxx------------------------xxxxxxxxxxx------------------------xxxxxxxxxxx------------------------xxxxxxxxxxx






// ================================
// CHAPTER # 35-38 FUNCTIONS
// ================================


// Task # 1

// function date(){
//     var date = new Date();
//     document.write("Today date is "+ date);
// }
// document.write("<h1>Task # 1</h1>")
// date();









// Task # 2

// function FullUserName(){

//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     var fullName = firstName+" "+lastName;
//     return fullName;

// }

// var userName = FullUserName();
// alert("Hello!" + " " +userName +" "+ "Welcome to my Javascript program");






// Task # 3

// function add(a,b){

//     var firstValue = +prompt("Enter first value ");
//     var secondValue = +prompt("Enter second value ");
//     var userAnswer = firstValue+secondValue
//     return userAnswer;

// }


// var Answer = add();
// alert(Answer);






// Task # 4

// function calc(num1, operator, num2) {

//     var num1 = prompt("Enter number first value: ");
//     var operator = prompt("Enter number operator: ");
//     var num2 = prompt("Enter number second value: ");

//     if(operator == "+"){
//         console.log(num1+num2);
//     }
//     else if(operator == "-"){
//         alert(num1-num2);
//     }
//     else if(operator == "/"){
//         alert(num1/num2);
//     }
//     else if(operator == "*"){
//         alert(num1*num2);
//     }
//     else{
//         alert("Invalid Input!");
//     }


// }

// calc();







// Task # 5

// function squareNumber(number) {
//     return number * number;
// }

// var input = squareNumber(5);

// document.write("<h1>Task # 5</h1>")
// document.write("Square of number is: " + input);




// Task # 6

// function factorial(n) {
//     var number = 1;
//     for (var i = n; i >= 1; i--) {
//         number = number * i;
//     }
//     return number;
// }

// var factorialAnswer = factorial(+prompt("Enter the number this function will return you the factorial number of your number: "));
// alert("This is factorial your answer " + factorialAnswer);






// Task # 7

// function counting(a, z) {

//     var firstNumber = +prompt("Enter first number: ");
//     var lastNumber = +prompt("Enter last number: ");
//     document.write("<h1>Task # 6</h1>")
//     for (var i = firstNumber; i < lastNumber; i++){
//         document.write(i+"<br>");
//     }

//     return i;
// }


// var countingDisplay = counting();
// document.write(countingDisplay);






// Task # 8

// function outerfunc(b, p) {

//     var base = prompt("Enter base value: ");
//     var Perpendicular = prompt("Enter Perpendicular value: ");

//     function innerfunc() {

//         var baseSquare = base ** 2;
//         var PerpendicularSquare = Perpendicular ** 2;
//         var hypotenus = baseSquare + PerpendicularSquare;
//         return hypotenus

//     }

// }


// var outerfunction = outerfunc();
// var innerfunction = innerfunc();

// console.log(outerfunction + innerfuction)


// var a = prompt("enter first base");
// var b = prompt("enter first prependicular");

// var c = (a**2 +  b**2);

// alert(c);








// Task # 9


// function rectangleArea(w,h){
//     var area = (w*h)
//     return area;

// }

// var rectanglefuccalled  = rectangleArea(5,6);
// alert("This is area of rectangle " + rectanglefuccalled);





// Task # 10

// function palindrome() {
//     var text = prompt("Enter any word or string: ");
//     var reverse = text.split("").reverse().join("");

//     if (reverse === text) {
//         alert(text + " This is palindrome");
//     }
//     else {
//         alert(text + " This is not palindrome")
//     }

// }

// palindrome();






// Task # 11

// function letterCapital(str) {
//     var a = [];
//     var sep = str.split(" ");

//     for (var i=0; i < sep.length; i++){
//         a.push(sep[i][0].toUpperCase()+sep[i].slice(1));
//     }
//     return a.join(" ");
// }


// var letterCapitalResult = letterCapital("the quick brown fox");
// document.write("<h1>Task # 11</h1>")
// document.write("EXPECTED STRING: the quick brown fox<BR>")
// document.write("EXPECTED OUTPUT: " +" "+ letterCapitalResult);





// Task # 12

// function longestWord(str) {
//     var words = str.split(" ");
//     var size  = 0;
//     var max   = [""];

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length >= size) {
//             size = words[i].length;
//             if (max[max.length - 1].length <words[i].length){
//                 max = [];
//                 max.push(words[i]);
//             }
//             else{
//                 max = [...max,words[i]];
//             }
//         }
//     }
// return [...max];
// }


// document.write("<h1>Task # 12</h1>")
// document.write("EXAMPLE STRING : Web Development Tutorial<br>");
// document.write("EXPECTED OUTPUT : "+longestWord("Web Development Tutorial"));





// Task # 13
// document.write("<h1>Task # 13</h1>")

// function occurrencesCounter(str, letter) {
//     var stringAskingFromUser = prompt("Enter String here ");
//     var letterAskingFromUser = [];
    
//     var letterCount = 0;

//     for(var i = 0; i<stringAskingFromUser.length; i++){
//         if(stringAskingFromUser.charAt(i) == letterAskingFromUser){
//             letterAskingFromUser.push(stringAskingFromUser);
//             letterCount++;
//         }
//     }
//     document.write("Sample arguments: " + stringAskingFromUser);
//     return letterAskingFromUser;



// }

// var occurenceFunctnCalled = occurrencesCounter();

// document.write("<br>Occurence letter: " + occurenceFunctnCalled);








