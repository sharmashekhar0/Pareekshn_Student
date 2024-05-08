import React from "react";
import pen from "../../assets/Dashboard/pen.png";
import PersonalProfile from "./PersonalProfile";
import ProfileUpdate from "./ProfileUpdate";
import openbook from "../../assets/Dashboard/openbook.png";

function EducationProfile() {
	return (
		<div className="flex flex-col gap-8">
			<div className="h-60 shadow-allBorder rounded-xl">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>12th</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<div className="flex p-4 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Course</span>
								<div className="font-medium text-base">
									Science
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Specialization
								</span>
								<div className="font-medium text-base">PCM</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of School
								</span>
								<div className="font-medium text-base">
									Bal Bharti Public School
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of Board
								</span>
								<div className="font-medium text-base">
									UP Board
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Percentage Scored
								</span>
								<div className="font-medium text-base">55%</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Year of Passing
								</span>
								<div className="font-medium text-base">
									2010
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">State</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Pin Code</span>
								<div className="font-medium text-base">
									201301
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-60 shadow-allBorder rounded-xl">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>12th</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<div className="flex p-4 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Course</span>
								<div className="font-medium text-base">
									Science
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Specialization
								</span>
								<div className="font-medium text-base">PCM</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of School
								</span>
								<div className="font-medium text-base">
									Bal Bharti Public School
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of Board
								</span>
								<div className="font-medium text-base">
									UP Board
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Percentage Scored
								</span>
								<div className="font-medium text-base">55%</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Year of Passing
								</span>
								<div className="font-medium text-base">
									2010
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">State</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Pin Code</span>
								<div className="font-medium text-base">
									201301
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-60 shadow-allBorder rounded-xl">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Graduation</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<div className="flex p-4 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Course</span>
								<div className="font-medium text-base">
									Science
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Specialization
								</span>
								<div className="font-medium text-base">PCM</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of School
								</span>
								<div className="font-medium text-base">
									Bal Bharti Public School
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of Board
								</span>
								<div className="font-medium text-base">
									UP Board
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Percentage Scored
								</span>
								<div className="font-medium text-base">55%</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Year of Passing
								</span>
								<div className="font-medium text-base">
									2010
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">State</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Pin Code</span>
								<div className="font-medium text-base">
									201301
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-60 shadow-allBorder rounded-xl">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Post Graduation</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<div className="flex p-4 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Course</span>
								<div className="font-medium text-base">
									Science
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Specialization
								</span>
								<div className="font-medium text-base">PCM</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of School
								</span>
								<div className="font-medium text-base">
									Bal Bharti Public School
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of Board
								</span>
								<div className="font-medium text-base">
									UP Board
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Percentage Scored
								</span>
								<div className="font-medium text-base">55%</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Year of Passing
								</span>
								<div className="font-medium text-base">
									2010
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Town</span>
								<div className="font-medium text-base">
									Noida
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">District</span>
								<div className="font-medium text-base">
									Gautam Budha Nagar
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">State</span>
								<div className="font-medium text-base">
									Uttar Pradesh
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/5">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">Pin Code</span>
								<div className="font-medium text-base">
									201301
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-36 shadow-allBorder rounded-xl">
				<div className="flex justify-between text-[#1C4481] font-medium px-8 text-lg h-16 items-center rounded-t-xl bg-[#EAF2FE] ">
					<span>Professional Program</span>
					<div className="bg-[#1C4481] items-center rounded-full px-2 w-20 justify-center p-1 flex gap-1 text-white h-8">
						<img src={pen} alt="" className="h-5" />
						<span className="text-smf font-normal">Edit</span>
					</div>
				</div>
				<div className="flex p-4 flex-col gap-4">
					<div className="flex justify-between w-full">
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Name of Institute/University
								</span>
								<div className="font-medium text-base">
									Bal Bharti Public School
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Percentage Scored
								</span>
								<div className="font-medium text-base">55%</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm w-1/3">
							<img src={openbook} alt="" className="h-5" />
							<div className="flex flex-col">
								<span className="text-[#1C4481]">
									Year of Passing
								</span>
								<div className="font-medium text-base">
									2018
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EducationProfile;
