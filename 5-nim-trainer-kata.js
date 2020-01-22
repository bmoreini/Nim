// Nim Trainer 

// count, winner(string), gameState(simple || trainer)

// Welcome

// Prompt user to select gameState

// Start Play

// Keep looping while nobody counted 21

	// PLAYER TURN
	// Set winner as CPU

	// State current count

	// Ask for player turn

	// Add turn to count

	// Check if player loses, and prevent CPU from taking turn if so

		// Set winner as Player

		// Check if gameState is simple

		// If simple, Obtain turn from cpuTurn

		// Otherwise, pass count to cpuTurnTrainer and get cpu turn

		// Add turn to count

		// State Current Count
	
	// End Loop

// Say who won

// End

// Define function cpuTurn (send count, get random number with constraints, return turn)

	// get random number

	// return turn

// Define function cpuTurnTrainer (send count, get winning or random number, return turn)

// Remember that computer always counts up to the next multiple of four after current count	

	// Set a loop that starts 4, keeps going while less than count, and steps 4

	// return turn
	
