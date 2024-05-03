//variable initializations
let racing = false;
let currentGear = 1;
let gearTimer; // Variable to hold the gear timer
// let resultDisplayed = false; // Flag to track if the result page is displayed
let prematureShift = false; // Flag to track premature shift
let currentOpponent = 1; // Track the current opponent

// Define time intervals for each gear shift 
const gearTimeIntervals = [3000, 4000, 4500, 6000]; // in milliseconds

// Add this function to detect premature shift
function detectPrematureShift() {
    // prematureShift = true;
    document.getElementById('race').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').innerText = " Line 17: You shifted too early. Game Over."; 
    clearInterval(gearTimer); // Clear gear timer on result display
    currentGear = 1;
    // restartGame();
}

function detectLateShift() {
    prematureShift = false;
    
    document.getElementById('race').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').innerText = " Line 25: You shifted too Late. Game Over."; 
    clearInterval(gearTimer); // Clear gear timer on result display
    currentGear = 1;
    // restartGame();
}

function startGame(){
    //document.getElementById('result').style.display = 'none';

    document.getElementById('startMenu').style.display = 'none';
    document.getElementById('dialogue').style.display = 'block';
    //clearResult(); // Clear the result page when starting a new race
    document.getElementById('opponent').innerText = currentOpponent; // Update opponent number in dialogue


}



function restartGame(){//FIX
   
    //reset game variables
    document.getElementById('speedometer-bar').style.width = '0%';  // Reset speedometer bar
    racing = false; // Add this line to reset the racing variable
    currentGear = 1;
    clearInterval(gearTimer); // Clear the gear timer if game is restarted

    document.getElementById('dialogue').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    // document.getElementById('shiftButton').innerText = "Shift Gear (1)";
    prematureShift = false; // Reset premature shift flag

}

function resetGame(){

    document.getElementById('speedometer-bar').style.width = '0%';  // Reset speedometer bar
    racing = false; // Add this line to reset the racing variable
    currentGear = 1;
    currentOpponent = 1;
    clearInterval(gearTimer); // Clear the gear timer if game is restarted




}

function returntoHome(){

    document.getElementById('result').style.display = 'none';
    document.getElementById('startMenu').style.display = 'block';
    // currentGear = 1;
    // document.getElementById('dialogue').style.display = 'none';
    // document.getElementById('shiftButton').innerText = "Shift Gear (1)";

    // restartGame();
    resetGame();



}


// function dontRace(){

//     document.getElementById('result').style.display = 'none';
//     document.getElementById('startMenu').style.display = 'block';

//     startGame();


// }

function displayResult(message){//FIX
    document.getElementById('race').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('returntoHomeButton').style.display = 'block';
    document.getElementById('resultText').innerText = message;

    clearInterval(gearTimer); // Clear gear timer on result display

    if (!message.includes("Congratulations")) {
        
        

    }

    // if (!message.includes("Game Over")) {
    //     // document.getElementById('opponent').innerText = currentOpponent;
    //     // // startGame();
    //     document.getElementById('result').style.display = 'block';
    //     // restartGameGame();
        
    // }
    // else{
    //     document.getElementById('startMenu').style.display = 'block';

    // }
}

function chooseAction(race){
    // if (racing) return; // Prevent starting multiple races simultaneously

    console.log("\'racing\' before set to \'race\': "+racing);
    racing = race // Set racing flag

    console.log("\'race\' after set to \'racing\': "+race);
    console.log("curOpponent: "+currentOpponent);



    document.getElementById('dialogue').style.display = 'none';


    if (racing) {

        currentOpponent++; // Increment the opponent number
        
        
        document.getElementById('race').style.display = 'block';
        // document.getElementById('race').innerText = currentOpponent;
        console.log("Starting new race..."); // Debug statement


        if(currentOpponent === 1){

            document.getElementById('oppText').innerText = "Hey! You're shifting skills are trash! Lets race to see who's KING!"; // Update opponent text in dialogue
        }
        else if (currentOpponent === 2){

            document.getElementById('oppText').innerText = "That last guy was booty. Lets really put your skills to the test!"; // Update opponent number in dialogue


        }
        else if (currentOpponent === 3){

            document.getElementById('oppText').innerText = "IM THE KING OF SHIFTING! TRY and FIGHT ME!"; // Update opponent number in dialogue


        }
        else if (currentOpponent === 4){

            document.getElementById('oppText').innerText = "I got your mom in the passenger seat. Race me and come and get her!"; // Update opponent number in dialogue


        }
        

        document.getElementById('shiftButton').innerText = "Shift Gear (" + currentGear + ")";
       
        
        // document.getElementById('opponent').style.display = 'block'; // Update opponent number in dialogue
        
        shiftGear(); // Start shifting gears automatically when race starts /////FIX
    } else {

        //didnt race
        console.log("racing bool: "+ race);
        
        // displayResult("You chose not to race. Game Over.");

        document.getElementById('result').style.display = 'block';
        document.getElementById('resultText').style.display = 'none';
        document.getElementById('didntRaceText').innerText = "You chose not to race. Game Over.";
        // shiftGear();

        // document.getElementById('returntoHomeButton').style.display = 'block';

        
        // returntoHome();


    }

    

}


// function shiftGear(){   //original 4/26/24
//     if (racing && currentGear <= 4) {
//         const gearInterval = gearTimeIntervals[currentGear-1];
//         console.log("gear interval: "+gearInterval);
//         let elapsed = 0;

//         gearTimer = setInterval(function (){
//             elapsed += 100;
//             const progress = (elapsed / gearInterval) * 100;
            
//             updateSpeedometer(progress);

//             if (elapsed >= gearInterval) {
//                 clearInterval(gearTimer);
                
//                 currentGear++;
//                 document.getElementById('shiftButton').innerText = "Shift Gear (" + currentGear + ")";
//                 prematureShift = false;
//                 shiftGear(); //????
//             }
//         }, 100);
//         shiftButton.addEventListener('click', detectPrematureShift, { once: true });
//     } else if (currentGear === 4) { //&& !resultDisplayed
//         if (currentOpponent === 3) {

//             document.getElementById('result').style.display = 'block';
//             // document.getElementById('didntRaceText').innerText = "You chose not to race. Game Over.";         
//         } 
//         // else {
//         //     // resultDisplayed = true;
//         //     document.getElementById('dialogue').style.display = 'block';
//         //     document.getElementById('race').style.display = 'none';
//         //     document.getElementById('result').style.display = 'none';
//         //     currentOpponent++;
//         //     document.getElementById('opponent').innerText = currentOpponent; // Update opponent number in dialogue for the next race
//         //     racing = false;
//         //     currentGear = 1;
//         // }
//         // currentOpponent++;
//     } 
//     //else if (!racing) { // Reset resultDisplayed flag when starting a new race
//     //     resultDisplayed = false;
//     // }
// }

function shiftGear() { //gemini version
    if (racing && currentGear <= 4) {
      const gearInterval = gearTimeIntervals[currentGear - 1];
      let elapsed = 0;

  
      gearTimer = setInterval(function() {
        elapsed += 100;
        const progress = (elapsed / gearInterval) * 100;
        updateSpeedometer(progress);
  
        if (elapsed >= gearInterval) {
          clearInterval(gearTimer);
          currentGear++;
          document.getElementById('shiftButton').innerText = "Shift Gear (" + currentGear + ")";
          shiftGear(); // Call shiftGear again for next gear
        }
      }, 100);
    } 
    // else if (!racing) { // Reset resultDisplayed flag when starting a new race
    //   resultDisplayed = false;
    // }
  }
  


function shiftGearButton(){ //original 4/26/
    if (!racing) return; // Prevent shifting gears when not racing

    clearInterval(gearTimer); // Clear the gear timer                       ??????? 7:21 pm 

    const speedometerBar = document.getElementById('speedometer-bar');
    const redlinePosition = 75; // Adjust this value to set the redline position
    const redlineThreshold = 5; // Adjust this value to set the threshold for exceeding the redline

    // Retrieve the current width of the speedometer bar
    const barWidth = parseFloat(speedometerBar.style.width) || 0;

    // console.log(barWidth);

    if (barWidth > (redlinePosition + redlineThreshold)) {
        prematureShift = false;
        // clearInterval(gearTimer); // Clear the gear timer
        detectLateShift();
        // return;
    }

    if (barWidth < (redlinePosition - redlineThreshold)) {
        prematureShift = true;
        // clearInterval(gearTimer); // Clear the gear timer
        detectPrematureShift();
        // return;
    }

    
    currentGear++;
    

    if (currentGear <= 4) {
      
        document.getElementById('shiftButton').innerText = "Shift Gear (" + currentGear + ")";
        // clearInterval(gearTimer);
        shiftGear(); // Start shifting gears automatically
    } 
    else {

        // handleLastGear();
        // redlineThreshold = 10;
        console.log("inside  gear === 4 if statement");
        clearInterval(gearTimer); // Clear gear timer
        racing = false; // Reset racing flag
        console.log("before opp inc: "+ currentOpponent);
        // currentOpponent++;

        console.log("after opp inc: "+ currentOpponent);

        document.getElementById('dialogue').style.display = 'block';
        document.getElementById('race').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('opponent').innerText = currentOpponent;


       // currentGear = 1;

        restartGame();

        //WORKING
        if (currentOpponent > 3) {
            // displayResult("Congratulations! You won the game!");

            document.getElementById('dialogue').style.display = 'none';
            document.getElementById('race').style.display = 'none';
            document.getElementById('result').style.display = 'block';
            document.getElementById('resultText').innerText = " Line 315: You Won!"; 
        } 
        
    }

    
}





function updateSpeedometer(progress){
    const speedometerBar = document.getElementById('speedometer-bar');
    // const redlinePosition = 75; // Adjust this value to set the redline position
    // const redlineThreshold = 5; // Adjust this value to set the threshold for exceeding the redline

    let barWidth = progress;

    console.log("bar width: "+barWidth);
    console.log("gear timer: "+gearTimer);

    console.log(currentGear);


    // if (barWidth > redlinePosition) {
    //     if (!prematureShift && barWidth > redlinePosition - redlineThreshold) {
    
    //         // restartGame();
    //         return console.log("line 287 late shift...");
    //     }
    //     barWidth = redlinePosition; // Ensure the bar doesn't exceed the redline
    // }

    speedometerBar.style.width = barWidth + "%";
}


