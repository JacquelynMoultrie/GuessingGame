//variables
var letters=["a", "b", "c", "d", "e", "f","g","h","i","j",];
var randomLtr= letters[Math.floor(Math.random()*(letters.length-.1))];
var guessesLeft= 9;
var win=0;
var losses=0;
var display="";

updateinfo();

function randomLtr ()
{
     randomLtr= letters[Math.floor(Math.random()*(letters.length-.1))];
}

function updateinfo() 
{
    document.getElementById("winstracker").textContent = win;
    document.getElementById("losstracker").textContent = losses;
    document.getElementById("guesstracker").textContent =guessesLeft ;
    document.getElementById("guessestracker").textContent = display;
   
}

document.onkeypress = function (e){
    keyVal = e.which || e.keyCode;
    keyVal=String.fromCharCode(keyVal)
    display += " " + keyVal;
    updateinfo();

    if (keyVal == randomLtr)
    {
        win += 1;
        guessesLeft = 9;
        display = "";
        randomLtr = randomLtr();
         


    }


};  





