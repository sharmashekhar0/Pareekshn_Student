import React from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import user from "../../assets/LoginScreen/User.png";
import tablet from "../../assets/LoginScreen/Tablet.png";
import message from "../../assets/LoginScreen/message.png";
import gender from "../../assets/LoginScreen/gender.png";
import date from "../../assets/LoginScreen/date.png";
import userProfile from "../../assets/LoginScreen/userProfile.png";
import getHighQualList from "../../actions/LoginScreens/getHighQualList";
import getStates from "../../actions/LoginScreens/getStates";
import getCities from "../../actions/LoginScreens/getCities";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function VerifyProfile() {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const [highestQualication, setHighestQualication] = useState([]);
	const [states, setStates] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [selectedState, setSelectedState] = useState("");

	const verifyProfileHandler = async () => {
		try {
			navigate("/login-with-passcode/upload-photo");
		} catch (error) {
			console.log("Error while verifing profile :: ", error);
		}
	};

	const preData = async () => {
		try {
			const highQual = await getHighQualList();
			const indianStates = await getStates();
			setHighestQualication(highQual?.data?.high_qual);
			setStates(indianStates?.data?.states);
		} catch (error) {
			console.log(
				"Error while getting highest qualification or states :: ",
				error
			);
		}
	};

	useEffect(() => {
		preData();
	}, []);

	const handleStateChange = (e) => {
		setSelectedState(e.target.value);
		getCitiesHandler(e.target.value);
		console.log("State :: ", e.target.value);
	};

	const getCitiesHandler = async (id) => {
		try {
			console.log("Id :: ", id);
			const data = {
				id_state: id,
			};
			const response = await getCities(data);
			setDistricts(response?.data?.cities);
			console.log("Cities :: ", response?.data?.cities);
		} catch (error) {
			console.log("Error while getting cities :: ", error);
		}
	};

	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-[460px] overflow-y-scroll no-scrollbar px-4 py-2 ">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">Verify</span>
					<span className="font-semibold text-[#222222]">
						Profile
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-4 my-2 text-sm px-2">
				<div className="relative h-14 mb-3 ">
					<div>
						<input
							type="text"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("candidateName", { required: true })}
						/>
						<div
							htmlFor="floating_filled"
							className="absolute text-base text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
						>
							<img src={userProfile} alt="" className="h-5 w-5" />
							<label htmlFor="" className="pl-2">
								Candidate Name
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
							<option value="1">Male</option>
							<option value="2">Female</option>
							<option value="3">Transgender</option>
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							{/* <FaAngleDown /> */}
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
							type="date"
							id="floating_filled"
							className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
							placeholder=""
							{...register("dob", {
								required: true,
							})}
						/>
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
								Mobile Number*
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
							{highestQualication?.map((qualName) => (
								<option key={qualName?.id} value={qualName.id}>
									{qualName.highest_qualification}
								</option>
							))}
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							{/* <FaAngleDown /> */}
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
							onChange={(e) => handleStateChange(e)}
						>
							<option value="" disabled hidden>
								Select State
							</option>
							{states?.map((state) => (
								<option
									key={state?.id_state}
									value={state.id_state}
								>
									{state.state}
								</option>
							))}
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							{/* <FaAngleDown /> */}
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
							{...register("district")}
						>
							<option value="" disabled hidden>
								Select District
							</option>
							{districts?.map((district) => (
								<option
									key={district?.id_city}
									value={district.id_city}
								>
									{district?.city}
								</option>
							))}
						</select>
						<div className="flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-between">
							{/* <FaAngleDown /> */}
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
				<button
					onClick={verifyProfileHandler}
					className="h-10 mb-2 w-full bg-[#1C4481] text-white font-medium flex items-center justify-center rounded-full"
				>
					<span>Verify</span>
				</button>
			</div>
		</div>
	);
}

export default VerifyProfile;
