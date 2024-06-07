import { BLANK_MSG, TRY_AGAIN_MSG } from "../../constants";
import React, { useState, useEffect, useRef } from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { useNavigate } from "react-router";
import verifyOTP from "../../actions/LoginScreens/verifyOTP";
import SlidingMessage from "../ApiResponse";
import { useForm } from "react-hook-form";
import resendOTP from "../../actions/LoginScreens/resendOTP";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import queryString from "query-string";

function OTPVerify() {
	const navigate = useNavigate();
	const { register, handleSubmit, setValue, watch } = useForm();
	const [errors, setErrors] = useState({});
	const [error, setError] = useState({});
	const [resendTimer, setResendTimer] = useState(0);

	const optErrors = {
		otponeFormControl: "",
		otptwoFormControl: "",
		otpthreeFormControl: "",
		otpfourFormControl: "",
	};

	const inputRefs = useRef([]);

	const verifyOtpSchema = Yup.object({
		firstDigit: Yup.string()
			.required("Code is required")
			.matches(/^\d$/, "OTP must be a single digit"),
		secondDigit: Yup.string()
			.required("Code is required")
			.matches(/^\d$/, "OTP must be a single digit"),
		thirdDigit: Yup.string()
			.required("Code is required")
			.matches(/^\d$/, "OTP must be a single digit"),
		fourthDigit: Yup.string()
			.required("Code is required")
			.matches(/^\d$/, "OTP must be a single digit"),
	});

	useEffect(() => {
		let timer;
		if (resendTimer > 0) {
			timer = setInterval(() => {
				setResendTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [resendTimer]);

	const otpVerifyHandler = async (formData, e) => {
		try {
			var userData = JSON.parse(localStorage.getItem("currentUser"));
			var settings = JSON.parse(sessionStorage.pkshn_exam_set);
			const parsed = queryString.parse(window.location.search);
			const querystr = parsed.q; // Retrieve the value of a specific query parameter
			var otp_type = 0;
			var req_data;
			if (userData["usercode"] != undefined) {
				if (
					formData.otponeFormControl == "" ||
					formData.otptwoFormControl == "" ||
					formData.otpthreeFormControl == "" ||
					formData.otpfourFormControl == ""
				) {
					setError(BLANK_MSG);
					return false;
				} else {
					var otp =
						formData.otponeFormControl +
						"" +
						formData.otptwoFormControl +
						"" +
						formData.otpthreeFormControl +
						"" +
						formData.otpfourFormControl;
				}
				var params = window.atob(querystr);
				var splitStr = params.split("//@spwd++sup@//");
				//console.log(splitStr);
				userData["usercode"] = splitStr[0];
				userData["userid"] = splitStr[1];
				userData["subuserid"] = splitStr[2];
				userData["id_self_student"] = splitStr[3];
				otp_type = splitStr[4];
				if (otp_type == "6") {
					const data = {
						usercode: userData["usercode"],
						user_id: userData["userid"],
						sub_user_id: userData["subuserid"],
						student_id: userData["id"],
						otp: otp,
						exam_id: settings["exam_id"],
						otp_type: otp_type,
					};
					req_data = data;
				} else if (otp_type == "5") {
					const data = {
						usercode: userData["usercode"],
						user_id: userData["userid"],
						sub_user_id: userData["subuserid"],
						id_student: userData["id"],
						id_self_student: splitStr[3],
						otp: otp,
						exam_id: settings["exam_id"],
						otp_type: otp_type,
					};
					req_data = data;
				} else {
					const data = {
						usercode: userData["usercode"],
						user_id: userData["userid"],
						sub_user_id: userData["subuserid"],
						student_id: userData["id"],
						otp: otp,
						exam_id: settings["exam_id"],
						otp_type: otp_type,
					};
					req_data = data;
				}
				//	console.log(req_data);
				let response = await verifyOTP(req_data);
				if (response.status == 200) {
					const code = response?.data?.code;
					const message = response?.data?.status;
					if (code == 1000) {
						setError(message);
						switch (otp_type) {
							case "1":
								return;
							case "3":
								return;
							case "4":
								return;
							case "5":
								navigate(
									"/student/login-with-passcode/upload-id"
								);
								return;
							case "6":
								navigate(
									"/student/login-with-passcode/verify-profile"
								);
								return;
						}
					} else {
						setError(message);
						return;
					}
				}
			} else {
				setError(TRY_AGAIN_MSG);
				return;
			}
			// navigate("/student/login-with-passcode/verify-aadhar");
		} catch (error) {
			console.log("Error while verifing otp :: ", error);
		}
	};

	const resendOTPHandler = async (event) => {
		try {
			const data = {
				id_self_student: "6",
			};
			await resendOTP(data);
		} catch (error) {
			console.log("Error while resending OTP :: ", error);
		}
	};

	const handleBack = () => {
		navigate(-1);
	};

	const handleInputChange = (e, index) => {
		const value = e.target.value;
		if (/^\d$/.test(value)) {
			setValue(e.target.name, value);
			if (index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		} else {
			setValue(e.target.name, "");
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && !e.target.value && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	return (
		<form onSubmit={handleSubmit(otpVerifyHandler)}>
			<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4">
				<div className="flex justify-between items-center">
					<img
						src={arrowLeft}
						alt=""
						className="bg-[#1C4481] w-6 h-6 rounded-full"
					/>
					<div className="flex flex-col items-end">
						<span className="font-semibold text-[#AFAFAF]">
							Candidate
						</span>
						<span className="font-semibold text-[#555555]">
							Panel
						</span>
					</div>
				</div>
				<div className="flex flex-col mt-14 items-center gap-6">
					<span className="text-sm font-medium">
						Enter 4 digit code sent to your mobile phone
					</span>
					<div className="flex gap-4">
						<div className="w-12 h-12 flex items-center justify-center">
							<input
								type="text"
								className="h-12 appearance-none enabled:appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
								maxLength="1"
								inputMode="numeric"
								placeholder=""
								{...register("otponeFormControl", {
									required: true,
								})}
							/>
						</div>
						<div className="w-12 h-12   flex items-center justify-center">
							<input
								type="text"
								className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
								maxLength="1"
								inputMode="numeric"
								placeholder=""
								{...register("otptwoFormControl", {
									required: true,
								})}
							/>
						</div>
						<div className="w-12 h-12   flex items-center justify-center">
							<input
								type="text"
								className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
								maxLength="1"
								inputMode="numeric"
								placeholder=""
								{...register("otpthreeFormControl", {
									required: true,
								})}
							/>
						</div>
						<div className="w-12 h-12   flex items-center justify-center">
							<input
								type="text"
								className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
								maxLength="1"
								inputMode="numeric"
								placeholder=""
								{...register("otpfourFormControl", {
									required: true,
								})}
							/>
						</div>
					</div>
					<button
						type="submit"
						className="bg-[#1C4481] rounded-3xl w-full h-10 font-medium text-white"
					>
						Submit
					</button>
					<span className="text-sm text-[#50B4ED]">Resend(26)</span>
				</div>
			</div>
			{error && <SlidingMessage message={error} setError={setError} />}
		</form>
	);
}

export default OTPVerify;
