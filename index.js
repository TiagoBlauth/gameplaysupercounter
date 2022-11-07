
let pointsHome = document.getElementById("home-points");
let pointsGuest = document.getElementById("guest-points");
let titleHome = document.getElementById("home-title");
let titleGuest = document.getElementById("guest-title");
let userMessage = document.getElementById("user-message");
let endStartButton = document.getElementById("end-start");
let pointsHomeNum = 0;
let pointsGuestNum = 0;
const currentDate = new Date();
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

newGame();

function newGame() {
    console.log("New game started");
    pointsHomeNum = 0;
    pointsGuestNum = 0;
    pointsHome.textContent = 0;    
    pointsGuest.textContent = 0;  
    userMessage.textContent = '';  
    totalSeconds = 0;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function addPoints(side, points) {
    if (endStartButton.textContent == "New Game") {
        console.log('Buttons deactivated, start a new game');
    } else {
        console.log('points added', side, points);
        if (side ==="home") {
            pointsHomeNum += points;
            pointsHome.textContent = pointsHomeNum;    
        } else if (side ==="guest") {
            pointsGuestNum += points;
            pointsGuest.textContent = pointsGuestNum;    
        } else {
            userMessage.textContent = "An error occur";        
            console.log('An error found at addPoints function');
        }
        if (pointsHomeNum > pointsGuestNum) {
            titleHome.style.color = 'yellow';
            titleGuest.style.color = 'white';
        } else if (pointsHomeNum < pointsGuestNum) {
            titleHome.style.color = 'white';
            titleGuest.style.color = 'yellow';
        } else {
            titleHome.style.color = 'white';
            titleGuest.style.color = 'white';
        }
    }
}

function endStart () {
    if (endStartButton.textContent == "End Game") {
        console.log("End game function called");
        endStartButton.textContent = "New Game";
        let newMessage = '';
        if (pointsHomeNum > pointsGuestNum) {
            newMessage = 'Home is the winner!!!';
        } else if (pointsHomeNum < pointsGuestNum) {
            newMessage = 'Guest is the winner!!!';
        } else {
            newMessage = 'A tie. What a game!!!';
        }
        console.log(newMessage);
        userMessage.textContent = newMessage;
    } else if (endStartButton.textContent == "New Game") {
        console.log("New game function called");
        endStartButton.textContent = "End Game";
        newGame();
    }

}

function setTime() {
    if (endStartButton.textContent !== "New Game") {
          ++totalSeconds;
    }
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
