import React from "react";
import mock from "/mock.png";
import start from "/start.png";
import pack from "/pack.png";
import code from "/code.png";
import duration from "/duration.png";
import passcode from "/passcode.png";
import banner1 from "/banner1.png";
import digital from "/digital.png";
import gamer from "/gamer.png";

function Exams() {
	return (
		<div className="bg-[#EDF2FF] min-h-screen rounded-3xl">
			<div className="flex items-center relative justify-center">
				<div className="left-1/2 transform -translate-y-1/2 border-2 bg-white border-[#1C4481] w-[360px] h-20 rounded-full flex items-center px-2 gap-4">
					<div className="bg-[#1C4481] text-white w-1/2 h-16 rounded-full flex items-center px-2 gap-2">
						<img src={mock} alt="" className="h-10" />
						<span>Mock Exam</span>
					</div>
					<span className="font-semibold">Attempted Exams</span>
				</div>
			</div>
			<div className="flex items-center">
				<div className="w-4/6 mx-4 p-4 h-fit flex flex-col gap-4">
					<div className="w-full h-40 bg-white rounded-3xl">
						<div className="flex h-1/2 items-center justify-between p-6">
							<div className="flex flex-col">
								<span>
									<span className="text-[#1C4481] font-semibold">
										Exam -
									</span>{" "}
									ME-8358
								</span>
								<span className="text-sm text-[#1C4481] font-medium">
									Sector - General Awareness
								</span>
							</div>
							<div className="flex items-center bg-[#1C4481] h-10 w-28 rounded-full justify-center">
								<div className="flex items-center gap-2">
									<span className="text-white ">Start</span>
									<img src={start} alt="" />
								</div>
							</div>
						</div>
						<hr class="border-t-[1px] border-[#1C4481]" />
						<div className="flex justify-between p-6  text-[#1C4481]">
							<div className="flex items-center gap-2">
								<img src={pack} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Qualification Pack</span>
									<span className="font-semibold">
										Level 3
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={code} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Qualification Code</span>
									<span className="font-semibold">L-03</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={duration} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Exam Duration</span>
									<span className="font-semibold">
										12 Mins
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={passcode} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Exam Passcode</span>
									<span className="font-semibold">
										8330WW216016
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-40 bg-white rounded-3xl">
						<div className="flex h-1/2 items-center justify-between p-6">
							<div className="flex flex-col">
								<span>
									<span className="text-[#1C4481] font-semibold">
										Exam -
									</span>{" "}
									ME-8358
								</span>
								<span className="text-sm text-[#1C4481] font-medium">
									Sector - General Awareness
								</span>
							</div>
							<div className="flex items-center bg-[#1C4481] h-10 w-48 rounded-full justify-center">
								<div className="flex items-center gap-2">
									<span className="text-white ">
										Enroll & Start
									</span>
									<img src={start} alt="" />
								</div>
							</div>
						</div>
						<hr class="border-t-[1px] border-[#1C4481]" />
						<div className="flex justify-between p-6  text-[#1C4481]">
							<div className="flex items-center gap-2">
								<img src={pack} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Qualification Pack</span>
									<span className="font-semibold">
										Level 3
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={code} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Qualification Code</span>
									<span className="font-semibold">L-03</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={duration} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Exam Duration</span>
									<span className="font-semibold">
										12 Mins
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<img src={passcode} alt="" className="h-8" />
								<div className="flex flex-col text-[12px]">
									<span>Exam Passcode</span>
									<span className="font-semibold">
										8330WW216016
									</span>
								</div>
							</div>
						</div>
					</div>
					<img src={banner1} alt="" className="w-full" />
					<div className="flex items-center justify-center mb-8">
						<img src={digital} alt="" className="w-5/6" />
					</div>
				</div>
				<div className="flex flex-col gap-8 items-center bg-white w-[300px] p-8 rounded-3xl">
					<img src={gamer} alt="" className="h-56" />
					<img src={gamer} alt="" className="h-56" />
				</div>
			</div>
		</div>
	);
}

export default Exams;
