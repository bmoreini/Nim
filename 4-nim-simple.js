
/* 
 * Nim Simple 
 */

/* Initialize Globals */
var again=true, games=0, count=0, next=0;

/* Main */
alert("Let\'s play Nim!");
while (again == true) {
	count=0;
	turn=0;
	next=games%2;
	while (count < 21){
		if (next == 0) {
			count = cpuTurn(count);
			alert("Count is now "+count);
		}
		else {
			count = userTurn(count);
			alert("Count is now "+count);
		}
		if (count < 21) next=nextSwitch(next);
	}
	again = declareWinner(next);
}
alert("Nice playing with you!");

/* Functions */

/* CPU Turn -- random turn but not purposely losing or going over 21 */
function cpuTurn(count){
	let turn=0;
	while (goodTurn == false) {
		turn = Math.floor(Math.random()*3)+1;
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	}
	alert("CPU counts "+turn);
	count += turn;
	return count;
}

/* User Turn: prevents entering invalid turns */
function userTurn(count) {
	let turn=0;
	while (true) {
		turn = prompt("Enter 1, 2 or 3");
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) return turn;
		else alert("Invalid input. Enter 1,2 or 3.");
	}
}

/* Next Switch: changes turns */
function nextSwitch(next){
	if (next==0) next = 1;
	else next = 0;
	return next;
}

/* Declare Winner: Specifies winner value and asks for play again input */
function declareWinner(next){
	if (next==0) winner = "You";
	else winner = "I";
	alert(winner + " won!");
	games++;
	again = confirm("Press OK to play, Cancel to quit.");
	return again;
}
