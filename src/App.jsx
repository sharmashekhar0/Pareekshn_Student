import { Outlet } from "react-router";
import LoginScreen from "./pages/LoginScreens/LoginScreen";
import Question from "./pages/Exams/Question";

function App() {
	return (
		<>
			<LoginScreen />
			{/* <Outlet /> */}
			{/* <Question /> */}
		</>
	);
}

export default App;
