import React from "react";
import marital from "../../assets/Dashboard/marital.png";
import category from "../../assets/Dashboard/category.png";
import abled from "../../assets/Dashboard/abled.png";
import language from "../../assets/Dashboard/language.png";

function Skills() {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">Sector</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Qualification
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">Level</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Profile Summary
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={abled} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Accomplishments
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-full">
					<div className="flex items-center gap-2">
						<img src={abled} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Online Profiles
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
				<span>IT Skills</span>
			</div>
			<div>
				<div className="flex items-center">
					<div className="flex flex-col gap-2 w-1/3">
						<div className="flex items-center gap-2">
							<img src={language} alt="" className="h-4" />
							<span className="text-sm text-[#1C4481]">
								Software Name
							</span>
						</div>
						<input
							type="text"
							className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
						/>
					</div>
					<div className="flex flex-col gap-2 w-1/3">
						<div className="flex items-center gap-2">
							<img src={language} alt="" className="h-4" />
							<span className="text-sm text-[#1C4481]">
								Software Version
							</span>
						</div>
						<input
							type="text"
							className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="flex items-center">
					<div className="flex flex-col gap-2 w-1/3">
						<div className="flex items-center gap-2">
							<img src={language} alt="" className="h-4" />
							<span className="text-sm text-[#1C4481]">
								Last Used
							</span>
						</div>
						<input
							type="text"
							className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
						/>
					</div>
					<div className="flex flex-col gap-2 w-1/3">
						<div className="flex items-center gap-2">
							<img src={language} alt="" className="h-4" />
							<span className="text-sm text-[#1C4481]">
								Experience
							</span>
						</div>
						<input
							type="text"
							className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
					<span>Projects</span>
				</div>
				<span className="text-sm text-[#8b8b8b]">
					Add projects to show your experience
				</span>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Project Name
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Role in Project
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Project Description
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Project Duration
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
					<span>Certifications</span>
				</div>
				<span className="text-sm text-[#8b8b8b]">
					Show your skills via certification benchmark
				</span>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certification Name
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Role in Project
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certificate Provider
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certification Completion ID
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certificate URL/Upload
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certification Completion Year
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-1/3">
					<div className="flex items-center gap-2">
						<img src={category} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Certifications Validity
						</span>
					</div>
					<input
						type="text"
						className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
					/>
				</div>
			</div>
			<div className="flex gap-2 items-center">
				<span>This is certificate does not expire</span>
				<input type="checkbox" className=" h-4 w-4" />
			</div>
		</div>
	);
}

export default Skills;
