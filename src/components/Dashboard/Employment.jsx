import React from "react";
import pen from "../../assets/Dashboard/pen.png";
import PersonalProfile from "./PersonalProfile";
import ProfileUpdate from "./ProfileUpdate";
import openbook from "../../assets/Dashboard/openbook.png";

function Employment() {
	return (
		<div className="flex flex-col gap-8">
			<div className="shadow-allBorder rounded-xl pb-10">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Employer Name</span>
					<div className="1/2 flex gap-6 items-center">
						<div className="bg-[#C9F4BE] text-[#3B602D] px-4 py-1 rounded-md border border-[#8FC38E]">
							<span>Current</span>
						</div>
						<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
							<img src={pen} alt="" className="h-5" />
							<span className="text-smf font-normal">Edit</span>
						</div>
					</div>
				</div>
				<div className="flex p-4 px-8 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Date of Joining
								</span>
								<div className="font-medium text-base">
									12 Jul 2022
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Designation
								</span>
								<div className="font-medium text-base">
									Android Developer
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Mid Level
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Sector</span>
								<div className="font-medium text-base">
									Information Technology
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Occupation
								</span>
								<div className="font-medium text-base">
									IT Professional
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Current Salary
								</span>
								<div className="font-medium text-base">
									5.60 Lakhs
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Notice period
								</span>
								<div className="font-medium text-base">
									30 Days
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Employment Type
								</span>
								<div className="font-medium text-base">
									Full Time
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
							<span>Current Location</span>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="shadow-allBorder rounded-xl pb-10">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Employer Name</span>
					<div className="1/2 flex gap-6 items-center">
						<div className="bg-[#C9F4BE] text-[#3B602D] px-4 py-1 rounded-md border border-[#8FC38E]">
							<span>Current</span>
						</div>
						<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
							<img src={pen} alt="" className="h-5" />
							<span className="text-smf font-normal">Edit</span>
						</div>
					</div>
				</div>
				<div className="flex p-4 px-8 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Date of Joining
								</span>
								<div className="font-medium text-base">
									12 Jul 2022
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Designation
								</span>
								<div className="font-medium text-base">
									Android Developer
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Mid Level
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Sector</span>
								<div className="font-medium text-base">
									Information Technology
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Occupation
								</span>
								<div className="font-medium text-base">
									IT Professional
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Current Salary
								</span>
								<div className="font-medium text-base">
									5.60 Lakhs
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Notice period
								</span>
								<div className="font-medium text-base">
									30 Days
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Employment Type
								</span>
								<div className="font-medium text-base">
									Full Time
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
							<span>Current Location</span>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="shadow-allBorder rounded-xl pb-10">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Employer Name</span>
					<div className="1/2 flex gap-6 items-center">
						<div className="bg-[#C9F4BE] text-[#3B602D] px-4 py-1 rounded-md border border-[#8FC38E]">
							<span>Current</span>
						</div>
						<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
							<img src={pen} alt="" className="h-5" />
							<span className="text-smf font-normal">Edit</span>
						</div>
					</div>
				</div>
				<div className="flex p-4 px-8 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Date of Joining
								</span>
								<div className="font-medium text-base">
									12 Jul 2022
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Designation
								</span>
								<div className="font-medium text-base">
									Android Developer
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Mid Level
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Sector</span>
								<div className="font-medium text-base">
									Information Technology
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Occupation
								</span>
								<div className="font-medium text-base">
									IT Professional
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Current Salary
								</span>
								<div className="font-medium text-base">
									5.60 Lakhs
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Notice period
								</span>
								<div className="font-medium text-base">
									30 Days
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Employment Type
								</span>
								<div className="font-medium text-base">
									Full Time
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
							<span>Current Location</span>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Level</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Employment;
