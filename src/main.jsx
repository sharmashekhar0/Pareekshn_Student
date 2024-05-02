import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import LoginScreen from "./pages/LoginScreens/LoginScreen.jsx";
import ForgetUsername from "./components/LoginScreens/ForgetUsername.jsx";
import { RouterProvider } from "react-router-dom";
import Login from "./components/LoginScreens/Login.jsx";
import ForgetPassword from "./components/LoginScreens/ForgetPassword.jsx";
import LoginWithPasscodePage from "./pages/LoginScreens/LoginWithPasscodePage.jsx";
import EnterLoginPasscode from "./components/LoginScreens/EnterLoginPasscode.jsx";
import VerifyProfile from "./components/LoginScreens/VerifyProfile.jsx";
import UploadPhoto from "./components/LoginScreens/UploadPhoto.jsx";
import UploadIDPhoto from "./components/LoginScreens/UploadIDPhoto.jsx";
import OTPVerify from "./components/LoginScreens/OTPVerify.jsx";
import AadharVerify from "./components/LoginScreens/AadharVerify.jsx";
import Instruction from "./components/LoginScreens/Instruction.jsx";
import StudentDashboard from "./pages/LoginScreens/StudentDashboard.jsx";
import LoginWithOTP from "./components/LoginScreens/LoginWithOTP.jsx";
import SignUpPage from "./pages/LoginScreens/SignUpPage.jsx";
import SignUp from "./components/LoginScreens/SignUp.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/student" element={<LoginScreen />}>
				<Route path="/student/login" element={<Login />}></Route>
				<Route
					path="/student/login/forget-username"
					element={<ForgetUsername />}
				></Route>
				<Route
					path="/student/login/forget-password"
					element={<ForgetPassword />}
				></Route>
			</Route>
			<Route
				path="/student/login-with-passcode/"
				element={<LoginWithPasscodePage />}
			>
				<Route
					path="/student/login-with-passcode/login-passcode"
					element={<EnterLoginPasscode />}
				></Route>
				<Route
					path="/student/login-with-passcode/verify-profile"
					element={<VerifyProfile />}
				></Route>
				<Route
					path="/student/login-with-passcode/upload-photo"
					element={<UploadPhoto />}
				></Route>
				<Route
					path="/student/login-with-passcode/upload-id"
					element={<UploadIDPhoto />}
				></Route>
				<Route
					path="/student/login-with-passcode/verify-otp"
					element={<OTPVerify />}
				></Route>
				<Route
					path="/student/login-with-passcode/verify-aadhar"
					element={<AadharVerify />}
				></Route>
			</Route>
			<Route path="/student/welcome" element={<Instruction />}></Route>
			<Route
				path="/student/dashboard"
				element={<StudentDashboard />}
			></Route>
			<Route
				path="/student/login-with-otp"
				element={<LoginWithPasscodePage />}
			>
				<Route
					path="/student/login-with-otp/login-otp"
					element={<LoginWithOTP />}
				></Route>
				<Route
					path="/student/login-with-otp/verify-otp"
					element={<OTPVerify />}
				></Route>
			</Route>
			<Route path="/student/signup" element={<SignUpPage />}>
				<Route
					path="/student/signup/account"
					element={<SignUp />}
				></Route>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
