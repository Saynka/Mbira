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

while(!(userTime >= 0 && userTime <= 24)){
    userTime = askTime();
}

var wannaPlay = prompt('Do you want to play a gussing game, enter 1, if not enter 2');
  

var correctAnswer = 12;


while(wannaPlay == 1){
    for (var i = 0; i < 10; i = i + 1){
        var userAnswer = prompt('Please enter a number between 1 and 20');
        if(userAnswer == correctAnswer){
            wannaPlay = prompt('DING DING DING.  You got it right. Wanna play again?1 for yes, 2 for no');
            break;
        } else {        
            if (userAnswer < correctAnswer){
                alert('Incorrect, to low.  Try Again.');
            } else {
                alert('Incorrect, to high.  Try Again.');
            }
        }
    }
}