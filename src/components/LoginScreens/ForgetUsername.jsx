import React, { useState } from "react";
import tablet from "../../assets/LoginScreen/Tablet.png";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import leftBg from "../../assets/LoginScreen/leftBg.jpg";
import forgetUsername from "../../actions/LoginScreens/forgetUsername";
import { useForm } from "react-hook-form";

function ForgetUsername() {
	const { register, handleSubmit } = useForm();

	const forgetUsernameHandler = async (formData) => {
		try {
			console.log("Form Data :: ", formData);
			const data = {
				mobile: "1234567890",
			};
			console.log("Data :: ", data);
			await forgetUsername(data);
		} catch (error) {
			console.log("Error while forgetting password :: ", error);
		}
	};

	return (
		<div className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center">
			<div className="absolute inset-0 z-[-1] overflow-hidden min-h-screen">
				<img
					src={leftBg}
					alt=""
					className="w-full h-full absolute inset-0 object-fill"
				/>
			</div>
			<form
				onSubmit={handleSubmit(forgetUsernameHandler)}
				className="w-1/2 bg-white rounded-3xl  border h-96 px-4 py-2 "
			>
				<div className="flex justify-between items-center">
					<img
						src={arrowLeft}
						alt=""
						className="bg-[#1C4481] w-6 h-6 rounded-full"
					/>
					<div className="flex flex-col items-end">
						<span className="font-semibold text-[#AFAFAF]">
							Forget
						</span>
						<span className="font-semibold text-[#222222]">
							User Name
						</span>
					</div>
				</div>
				<div className="relative h-14 rounded-md px-2 py-1 my-8">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							maxLength={"10"}
							minLength={"10"}
							pattern="[0-9]*"
							{...register("mobile", {
								required: true,
							})}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={tablet} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Enter Mobile Number
							</label>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="bg-[#1C4481] text-white font-medium h-12 w-full rounded-full"
				>
					Continue
				</button>
				<button className="bg-white text-[#E88686] border-2 border-[#E88686] my-4 font-medium h-12 w-full rounded-full">
					Cancel
				</button>
			</form>
		</div>
	);
}

export default ForgetUsername;
