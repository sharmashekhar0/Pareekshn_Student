import React from "react";
import pen from "../../assets/Dashboard/pen.png";
import PersonalProfile from "./PersonalProfile";
import { Outlet } from "react-router";

function UserProfile() {
	return (
		<div className="p-4">
			<div className="bg-white p-4 rounded-3xl flex flex-col gap-4 pb-40">
				<div className="flex justify-between text-[#1C4481] font-semibold text-lg px-4 h-12 items-center rounded-md bg-[#EAF2FE]">
					<span>Profile Update</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
}

export default UserProfile;
