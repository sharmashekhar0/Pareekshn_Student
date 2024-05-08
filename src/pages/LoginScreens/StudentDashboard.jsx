import React from "react";
import avatar from "../../assets/LoginScreen/avatar.png";
import profileComletion from "../../assets/LoginScreen/profileCompletion.png";
import StudentDashboardSidebar from "../../components/LoginScreens/StudentDashboardSidebar";
import { Outlet } from "react-router";
import Exams from "../../components/Dashboard/Exams";

function StudentDashboard() {
	return (
		<div className="max-h-screen overflow-hidden flex">
			{/* Left Side */}
			<StudentDashboardSidebar />
			{/* Right Side */}
			<div className="w-5/6 p-4 overflow-y-scroll no-scrollbar">
				<div className="flex items-center justify-between mb-14">
					<span className="font-semibold text-[#1C4481] text-2xl">
						Dashboard
					</span>
					<div className="flex items-center w-1/3 justify-between">
						<div className="flex items-center gap-2 h-14 border-2 border-[#1C4481] px-1 rounded-[100px] w-1/2">
							<img src={avatar} alt="" className="h-10 m-1" />
							<div className="flex flex-col text-sm">
								<span className="font-semibold text-[#305187]">
									Welcome
								</span>
								<span className="font-medium">User TP</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="relative flex items-center justify-center">
								<img src={profileComletion} alt="" />
								<div className="bg-[#1C4481] h-12 w-12 absolute rounded-full"></div>
								<span className="absolute font-bold text-[#FBFF3C] text-xl">
									75%
								</span>
							</div>
							<div className="flex flex-col text-sm">
								<span>Profile</span>
								<span>Completion</span>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#EDF2FF] min-h-screen rounded-3xl">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default StudentDashboard;
