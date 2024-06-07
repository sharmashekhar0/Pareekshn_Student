import React from "react";
import logo from "../../assets/LoginScreen/logo.png";
import dashboard from "../../assets/LoginScreen/Dashboard.png";
import user from "../../assets/LoginScreen/userDashboard.png";
import stat from "../../assets/LoginScreen/Stat.png";
import signout from "../../assets/LoginScreen/signout.png";
import leftBanner from "../../assets/LoginScreen/leftBanner.png";

function StudentDashboardSidebar() {
	return (
		<div className="bg-[#1C4481] h-screen w-1/5 flex flex-col justify-between">
			<div>
				<img src={logo} alt="" className="h-20" />
				<div className="py-4 flex flex-col">
					<div className="flex items-center w-4/5 h-12 rounded-e-full bg-white text-[#1C4481] gap-2 py-2 px-4">
						<img src={dashboard} alt="" />
						<span className="font-semibold">Dashboard</span>
					</div>
					<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
						<img src={user} alt="" />
						<span className="">Profile</span>
					</div>
					<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
						<img src={stat} alt="" />
						<span className="">Sectors</span>
					</div>
					<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
						<img src={signout} alt="" />
						<span className=" ">Logout</span>
					</div>
				</div>
			</div>
			<img src={leftBanner} alt="" className="p-4" />
		</div>
	);
}

export default StudentDashboardSidebar;
