import { useEffect } from "react";

// Function to create a timer with countdown
function startTimer(minutes, setTimeCallback) {
	let seconds = minutes * 60;

	const timerInterval = setInterval(() => {
		seconds--;

		const remainingMinutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;

		// Update state or call a callback function with remaining time
		setTimeCallback({
			minutes: String(remainingMinutes).padStart(2, "0"), // Pad with leading zero
			seconds: String(remainingSeconds).padStart(2, "0"), // Pad with leading zero
		});

		// Check if the timer has reached 0
		if (seconds <= 0) {
			clearInterval(timerInterval);
			// Optionally, you can perform any action when the timer ends
			console.log("Timer ended");
		}
	}, 1000); // Update every second
}

// Example usage:
// const [time, setTime] = useState({ minutes: "10", seconds: "00" }); // Initial time 10 minutes

// Call startTimer function with minutes and a callback to update the state
// useEffect(() => {
// 	startTimer(10, setTime); // Start a timer for 10 minutes
// }, []);

export default startTimer;
