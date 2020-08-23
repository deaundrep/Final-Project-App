function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
    console.log("Please enter values")
    return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
    } else {
    document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    }

  //Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

  //click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();

    };

    let timeElapsed = 0;
    let timerID = -1;
    function tick() {
                timeElapsed++
                document.getElementById("time").innerHTML = timeElapsed;
            }

    function start() {
    if(timerID == -1){
    timerID = setInterval(tick, 1000);
    }
    }

    function stop() {
    if(timerID != -1){
    clearInterval(timerID)
    timerID = -1
    }
    }

    function reset() {
    stop();
    timeElapsed = -1;
    tick()
    }

let Bad = 0;
let ok = 0;
let Good = 0;

function refreshResults () {
  let results = document.getElementById('results');
  results.innerHTML = 'total: ' + (Bad + ok + Good);
  results.innerHTML += '<br />Bad: ' + Bad;
  results.innerHTML += '<br />ok: ' + ok;
  results.innerHTML += '<br />Good: ' + Good;
}

document.getElementById('Bad-button').addEventListener('click', function () {
  Bad++;
  refreshResults();
});

document.getElementById('ok-button').addEventListener('click', function () {
  ok++;
  refreshResults();
});

document.getElementById('Good-button').addEventListener('click', function () {
  Good++;
  refreshResults();
});

