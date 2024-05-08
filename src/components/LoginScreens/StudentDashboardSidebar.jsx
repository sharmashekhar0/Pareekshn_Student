import React, { useState } from "react";
import logo from "../../assets/LoginScreen/logo.png";
import dashboard from "../../assets/LoginScreen/Dashboard.png";
import user from "../../assets/LoginScreen/userDashboard.png";
import stat from "../../assets/LoginScreen/Stat.png";
import signout from "../../assets/LoginScreen/signout.png";
import leftBanner from "../../assets/LoginScreen/leftBanner.png";
import transition from "../../assets/Dashboard/transition.png";
import angleUp from "../../assets/Dashboard/angleUp.png";

function StudentDashboardSidebar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="bg-[#1C4481] min-h-screen w-1/5 flex flex-col justify-between overflow-y-scroll no-scrollbar">
			<div>
				<img src={logo} alt="" className="h-20" />
				<div className="py-4 flex flex-col">
					<div className="flex items-center w-4/5 h-12 rounded-e-full bg-white text-[#1C4481] gap-2 py-2 px-4">
						<img src={dashboard} alt="" />
						<span className="font-semibold">Dashboard</span>
					</div>
					<div
						onClick={() => {
							const open = isMenuOpen;
							setIsMenuOpen(!open);
						}}
						className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 justify-between py-2 px-4 cursor-pointer"
					>
						<div className="flex items-center gap-2">
							<img src={user} alt="" />
							<span className="">Profile</span>
						</div>
						<img src={angleUp} alt="" />
					</div>
					{isMenuOpen && (
						<div className="flex flex-col items-center">
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Personal Profile</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Personal Update</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Education Profile</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Employment</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Skills</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Resume</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Career Profile</span>
								</div>
							</div>
							<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
								<div className="flex items-center gap-2">
									<img src={user} alt="" />
									<span className="">Change Password</span>
								</div>
							</div>
						</div>
					)}

					<div className="flex items-center w-4/5 h-12 rounded-e-full text-white gap-2 py-2 px-4">
						<img src={transition} alt="" />
						<span className="">Transition</span>
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
