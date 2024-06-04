import { Outlet } from "react-router";
import LoginScreen from "./pages/LoginScreens/LoginScreen";
<<<<<<< HEAD
import Question from "./pages/Exams/Question";

function App() {
	return (
		<>
			<LoginScreen />
			{/* <Outlet /> */}
			{/* <Question /> */}
		</>
	);
=======
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Outlet /> */}
      <ToastContainer />
    </>
  );
>>>>>>> 0075b933ec418d30488f0c7d03f6a920a2581808
}

export default App;
