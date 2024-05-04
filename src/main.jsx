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
import ForgetPasswordOTPVerify from "./components/LoginScreens/ForgetPasswordOTPVerify.jsx";
import ResetPassword from "./components/LoginScreens/ResetPassword.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<LoginScreen />}>
				<Route path="/" element={<Login />}></Route>
				<Route
					path="/login/forget-username"
					element={<ForgetUsername />}
				></Route>
				<Route
					path="/login/forget-password"
					element={<ForgetPassword />}
				></Route>
				<Route
					path="/login/forget-password/verify-otp"
					element={<ForgetPasswordOTPVerify />}
				></Route>
				<Route
					path="/login/forget-password/reset-password"
					element={<ResetPassword />}
				></Route>
			</Route>
			<Route
				path="/login-with-passcode/"
				element={<LoginWithPasscodePage />}
			>
				<Route
					path="/login-with-passcode/login-passcode"
					element={<EnterLoginPasscode />}
				></Route>
				<Route
					path="/login-with-passcode/verify-profile"
					element={<VerifyProfile />}
				></Route>
				<Route
					path="/login-with-passcode/upload-photo"
					element={<UploadPhoto />}
				></Route>
				<Route
					path="/login-with-passcode/upload-id"
					element={<UploadIDPhoto />}
				></Route>
				<Route
					path="/login-with-passcode/verify-otp"
					element={<OTPVerify />}
				></Route>
				<Route
					path="/login-with-passcode/verify-aadhar"
					element={<AadharVerify />}
				></Route>
			</Route>
			<Route path="/welcome" element={<Instruction />}></Route>
			<Route path="/dashboard" element={<StudentDashboard />}></Route>
			<Route path="/login-with-otp" element={<LoginWithPasscodePage />}>
				<Route
					path="/login-with-otp/login-otp"
					element={<LoginWithOTP />}
				></Route>
				<Route
					path="/login-with-otp/verify-otp"
					element={<OTPVerify />}
				></Route>
			</Route>
			<Route path="/signup" element={<SignUpPage />}>
				<Route path="/signup/account" element={<SignUp />}></Route>
				<Route
					path="/signup/account/verify-otp"
					element={<ForgetPasswordOTPVerify />}
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
