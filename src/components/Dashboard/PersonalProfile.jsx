import React from "react";
import profilecircle from "../../assets/Dashboard/profilecircle.png";
import profile from "../../assets/Dashboard/profile.png";

import PersonalUpdate from "../Dashboard/PersonalUpdate";
// import PersonalDetails from "../AdminPanel/PersonalDetails";
import CareerProfile from "../Dashboard/CareerProfile";
// import CareerDetails from "../AdminPanel/CareerDetails";
// import CertificateProject from "../AdminPanel/CertificateProject";
// import OnlineProfile from "../AdminPanel/OnlineProfile";
import { Outlet } from "react-router";

function PersonalProfile() {
	return (
		<div className="flex gap-6">
			<div className="w-[300px] bg-[#D7E7FF] h-fit rounded-3xl flex items-center flex-col pb-14">
				<div className="h-60 flex items-center justify-center relative">
					<img src={profilecircle} alt="" className="h-52 z-10" />
					<img src={profile} alt="" className="absolute h-[178px]" />
				</div>
				<span className="text-sm text-[#1C4481] mb-6 px-6 text-center">
					Please complete your profile. It will help you to get
					relevant exams and job recommendation.
				</span>

				<div className="flex flex-col items-center min-h-60">
					<span className="font-medium">Profile Completion</span>
					<span className="text-3xl font-semibold text-[#1C4481]">
						75%
					</span>
				</div>
				{/* <div className="flex flex-col w-full p-4 text-sm h-72 gap-2">
					<div className="flex justify-between items-center">
						<span className="font-semibold w-1/3">Name</span>
						<span className="font-medium w-2/3">: Shiv Gupta</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold w-1/3">Email</span>
						<span className="font-medium w-2/3">
							: shivdayalgpt@gmail.com
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold w-1/3">Mobile</span>
						<span className="font-medium w-2/3">: 8904558208</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold w-1/3">Username</span>
						<span className="font-medium w-2/3">: shiv01</span>
					</div>

					<div className="flex justify-between items-center">
						<span className="font-semibold w-1/3">
							Highest Qualification
						</span>
						<span className="font-medium w-2/3">: 12th</span>
					</div>
				</div> */}
			</div>
			<Outlet />
			{/* <PersonalUpdate /> */}
			{/* <PersonalDetails /> */}
			{/* <CareerDetails /> */}
			{/* <CertificateProject /> */}
			{/* <OnlineProfile /> */}
		</div>
	);
}

export default PersonalProfile;
