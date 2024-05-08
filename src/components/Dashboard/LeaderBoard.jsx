import React from "react";
import arrowdown from "../../assets/Dashboard/arrowdown.png";

function LeaderBoard() {
	return (
		<div className="w-[700px] bg-white min-h-96 rounded-2xl p-4 flex flex-col gap-4">
			<div className="flex justify-between h-14">
				<span className="font-semibold">Leaderboard</span>
				<div className="text-sm flex flex-col gap-2">
					<span className="text-[#1C4481]">Hackathon Name</span>
					<div className="text-center flex items-center justify-center rounded-md shadow-allBorder ">
						<span>Exam name</span>
						<img src={arrowdown} alt="" />
					</div>
				</div>
			</div>
			<div className="flex justify-between items-end">
				<span className="font-medium">Top Five</span>
				<div className="flex flex-col items-center text-[#0A2E89] font-medium bg-[#C9DCF8] p-1 px-2 rounded-md">
					<span>Total Candidate</span>
					<span className="text-xl">480</span>
				</div>
			</div>
			<div className="bg-[#1C4481] h-12 w-full rounded-t-xl">
				<div className="text-white flex p-4 items-center justify-between">
					<span>Rank</span>
					<span>Candidate</span>
					<span>Location</span>
					<span>Marks%</span>
				</div>
			</div>
		</div>
	);
}

export default LeaderBoard;
