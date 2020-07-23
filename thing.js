var today = new Date();
// var hourNow = today.getHours();
var hourNow = prompt("hello");
var conf = confirm("test it");
alert(conf);
var greetings;

if (hourNow > 18) {
    greeting = 'Good evening!';
}   else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}   else if (hourNow > 0) {
    greeting = 'Good morning!';
}   else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');

function getuserName(){
    var userNameInFunction = prompt('What is your name?');
    alert('Hello There...' + userNameInFunction);
    document.write('<h2>' + userNameInFunction + '</h2>');
    return userNameInFunction;
}
var userName = getuserName();

function confirmAskQuestions(){
    confirm(userName + ' I am going to ask you some questions!');
}
confirmAskQuestions();

function askQuestion(){
    var userCodeAnswer = prompt('Do you enjoy writing code? (yes or no)');
    if (userCodeAnswer == "yes"){
        alert('I do too');
    } else {
        alert('That is too bad.  It is so much fun');
    }
}
askQuestion();


function askTime(){
    var userTimeInFunction = prompt('What hour is it in military time 0-24?');
    return userTimeInFunction;
}
var userTime = askTime();