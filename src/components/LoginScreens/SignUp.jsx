import React, { useEffect, useState } from "react";
import leftBg from "../../assets/LoginScreen/leftBg.jpg";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { FaAngleDown } from "react-icons/fa6";
import gender from "../../assets/LoginScreen/gender.png";
import tablet from "../../assets/LoginScreen/Tablet.png";
import message from "../../assets/LoginScreen/message.png";
import date from "../../assets/LoginScreen/date.png";
import userProfile from "../../assets/LoginScreen/userProfile.png";
import viewHideIcon from "../../assets/LoginScreen/View_hide_light.png";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import registerStudent from "../../actions/LoginScreens/register";
import getHighQualList from "../../actions/LoginScreens/getHighQualList";
import getStates from "../../actions/LoginScreens/getStates";
import getCities from "../../actions/LoginScreens/getCities";
import { useNavigate } from "react-router";

function SignUp() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const getHighQualListHandler = async () => {
		try {
			await getHighQualList();
		} catch (error) {
			console.log("Error while getting highest qualification :: ", error);
		}
	};

	const getStatesHandler = async () => {
		try {
			await getStates();
		} catch (error) {
			console.log("Error while getting highest qualification :: ", error);
		}
	};

	const getCitiesHandler = async () => {
		try {
			await getCities();
		} catch (error) {
			console.log("Error while getting highest qualification :: ", error);
		}
	};

	useEffect(() => {
		getHighQualListHandler();
		getStatesHandler();
		getCitiesHandler();
	}, []);

	const registerStudentHandler = async (formData) => {
		try {
			console.log("Form Data :: ", formData);
			const data = {
				student_name: "Hugh Jackman2",
				gender: "1",
				id_hq: "2",
				date_of_birth: "1995-10-21",
				email_id: "hugh2@gmail.com",
				mobile: "1232537462",
				id_state: "12",
				id_city: "234",
				user_name: "hughjackman2",
				password: "12345678",
			};
			console.log("Data :: ", data);
			await registerStudent(data);
			navigate("/signup/account/verify-otp");
		} catch (error) {
			console.log("Error while registering student :: ", error);
		}
	};

	const [selectedState, setSelectedState] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");
	const [districtOptions, setDistrictOptions] = useState([]);

	return (
		<form
			onSubmit={handleSubmit(registerStudentHandler)}
			className="min-h-screen relative w-full lg:w-1/2 flex justify-center items-center"
		>
			<div className="absolute inset-0 z-[-1] overflow-hidden min-h-screen">
				<img
					src={leftBg}
					alt=""
					className="w-full h-full absolute inset-0 object-fill"
				/>
			</div>
			<div className="bg-[#ffffff] h-[500px] w-3/4 lg:w-4/5 xl:w-2/3 overflow-y-scroll no-scrollbar rounded-3xl p-6 flex flex-col gap-4 relative z-10 pb-10">
				<div className="flex justify-between items-center">
					<img
						src={arrowLeft}
						alt=""
						className="bg-[#1C4481] w-6 h-6 rounded-full"
					/>
					<div className="flex flex-col items-end">
						<span className="font-semibold text-[#AFAFAF]">
							Create
						</span>
						<span className="font-semibold text-[#222222]">
							an Account
						</span>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("fullName", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={userProfile} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Full Name
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="gender_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) => handleSelectGender(e.target.value)}
							{...register("gender", { required: true })}
						>
							<option value="" disabled hidden>
								Please Select Gender
							</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="transgender">Transgender</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={gender} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Gender
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("dob", { required: true })}
						/>
						<div className="flex items-center justify-between absolute right-2 top-1/2 -translate-y-1/2">
							<img src={date} alt="" className="h-5 w-5" />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={date} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Date of Birth*
							</label>
						</div>
					</div>
				</div>

				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("email", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Email*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("mobile", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={tablet} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Contact Number*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("username", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={userProfile} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								User Name*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("password", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Password*
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="qualification_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("qualification", { required: true })}
						>
							<option value="" disabled hidden>
								Select Your Qualification
							</option>
							<option value="highschool">10th</option>
							<option value="intermediate">12th</option>
							<option value="graduation">Graduation</option>
							<option value="postgraduation">
								Post Graduation
							</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Highest Qualification
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="state_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("state")}
						>
							<option value="" disabled hidden>
								Select State
							</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								State
							</label>
						</div>
					</div>
				</div>
				<div className="relative h-14">
					<div>
						<select
							id="state_select"
							className="block pl-8 pr-3 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0"
							defaultValue=""
							onChange={(e) =>
								handleSelectQualification(e.target.value)
							}
							{...register("district")}
						>
							<option value="" disabled hidden>
								Select District
							</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							<FaAngleDown />
						</div>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={message} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								District
							</label>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<input type="checkbox" className="h-4 w-4 bg-[#cfcfcf]" />
					<span className="font-medium">
						I agree to the Terms & Conditions
					</span>
				</div>
				<div className="rounded-full w-full text-white bg-[#1C4481] flex items-center justify-center py-3">
					<button type="submit" className="w-full h-full">
						Register
					</button>
				</div>
			</div>
		</form>
	);
}

export default SignUp;
