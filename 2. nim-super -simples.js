// Nim Super Simple 
var count = 0; var winner=null;
alert("Welcome to Nim! You go first.");
while (count<21) {
   winner="CPU"; 
   count+=playerTurn();
   alert("Current count is "+count);
   if (count<21) {
      winner="you"; 
      count+=cpuTurn();
      alert("Current count is "+count);
   }
}
alert(winner+" won!");

function playerTurn(){
  var turn = parseInt(prompt("Count how many? (1-3)"));
  return turn;
}

function cpuTurn(){
  var turn=Math.floor(Math.random()*3)+1;
  alert("CPU counts "+turn+".");
  return turn;
}
