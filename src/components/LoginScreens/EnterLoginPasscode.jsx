import React from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { TbPassword } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginWithPasscode from "../../actions/LoginScreens/loginWithPasscode";

function EnterLoginPasscode() {
	const { register, handleSubmit } = useForm();

	const loginWithPasscodeHandler = async (formData) => {
		try {
			const data = {
				login_code: "102RZ127",
				os: "1sdsa",
				build: "dsadsa",
				notId: "sadsad",
			};
			const response = await loginWithPasscode(data);
		} catch (error) {
			console.log("Error while logging with passcode :: ", error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(loginWithPasscodeHandler)}
			className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4"
		>
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
			<div className="relative h-14 mb-4 mt-14">
				<div>
					<input
						type="text"
						id="floating_filled"
						className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
						placeholder=""
						{...register("login_code", {
							required: true,
						})}
					/>
					<div
						htmlFor="floating_filled"
						className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
					>
						<TbPassword className="border rounded w-5 border-[#435DBC] mx-2 text-[#435DBC]" />
						<label htmlFor="" className="pl-2">
							Enter Login Passcode
						</label>
					</div>
				</div>
			</div>
			<Link to={"/student/login-with-passcode/verify-profile"}>
				<button
					type="submit"
					className="w-full h-12 bg-[#1C4481] text-white rounded-3xl"
				>
					Login
				</button>
			</Link>
		</form>
	);
}

export default EnterLoginPasscode;
