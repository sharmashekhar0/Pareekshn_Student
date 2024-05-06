import React from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { useNavigate } from "react-router";
import verifyOTP from "../../actions/LoginScreens/verifyOTP";
import selfVerifyOTP from "../../actions/LoginScreens/selfVerifyOTP";
import { useForm } from "react-hook-form";
import resendOTP from "../../actions/LoginScreens/resendOTP";

function OTPVerify() {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	const otpVerifyHandler = async (formData) => {
		try {
			const data = {
				usercode: "i9lBY5euU0vw",
				user_id: "1",
				sub_user_id: "0",
				student_id: "234",
				otp: "2323",
				exam_id: "2",
			};
			await verifyOTP(data);
			navigate("/dashboard");
		} catch (error) {
			console.log("Error while verifing otp :: ", error);
		}
	};

	const resendOTPHandler = async (formData) => {
		try {
			const data = {
				id_self_student: "1",
			};
			await resendOTP(data);
		} catch (error) {
			console.log("Error while resending OTP :: ", error);
		}
	};

	return (
		<div className="w-1/4 bg-white right-64 absolute rounded-3xl border h-2/3 p-4 z-[1]">
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
					<span className="font-semibold text-[#555555]">Panel</span>
				</div>
			</div>
			<form
				onSubmit={handleSubmit(otpVerifyHandler)}
				className="flex flex-col mt-14 items-center gap-6"
			>
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
							{...register("firstDigit", { required: true })}
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
							{...register("secondDigit", { required: true })}
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
							{...register("thirdDigit", { required: true })}
						/>
					</div>
					<div className="w-12 h-12   flex items-center justify-center">
						<input
							type="text"
							className="h-12 appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none "
							maxLength="1"
							{...register("fourthDigit", { required: true })}
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-[#1C4481] rounded-3xl w-full h-10 font-medium text-white"
				>
					Submit
				</button>
				<button onClick={resendOTPHandler}>
					<span className="text-sm text-[#50B4ED]">Resend(26)</span>
				</button>
			</form>
		</div>
	);
}

export default OTPVerify;
