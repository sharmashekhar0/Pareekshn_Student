import React from "react";
import marital from "../../assets/Dashboard/marital.png";
import category from "../../assets/Dashboard/category.png";
import abled from "../../assets/Dashboard/abled.png";
import language from "../../assets/Dashboard/language.png";
import download from "../../assets/Dashboard/download.png";
import close from "../../assets/Dashboard/close.png";

function Resume() {
	return (
		<div className="flex flex-col gap-8 p-4">
			<span>Android developer with 3+ years experience</span>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-2/5">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">Resume</span>
					</div>
					<div className="h-14 flex justify-between items-center px-4 shadow-allBorder rounded-md">
						<div className="flex flex-col">
							<span className="font-medium">
								KuldeepCV.dov(1.5 MB)
							</span>
							<span className="text-sm text-[#828282]">
								Updated on Feb 2, 2023
							</span>
						</div>
						<div className="flex">
							<img src={download} alt="" />
							<img src={close} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
				<span>Video Resume</span>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-2/5">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Video Resume
						</span>
					</div>
					<div className="h-14 flex justify-between items-center px-4 shadow-allBorder rounded-md">
						<div className="flex flex-col">
							<span className="font-medium">
								KuldeepCV.dov(1.5 MB)
							</span>
							<span className="text-sm text-[#828282]">
								Updated on Feb 2, 2023
							</span>
						</div>
						<div className="flex">
							<img src={download} alt="" />
							<img src={close} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
				<span>Work Documents</span>
			</div>
			<div className="flex items-center">
				<div className="flex flex-col gap-2 w-2/5">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Work Video
						</span>
					</div>
					<div className="h-14 flex justify-between items-center px-4 shadow-allBorder rounded-md">
						<div className="flex flex-col">
							<span className="font-medium">
								KuldeepCV.dov(1.5 MB)
							</span>
							<span className="text-sm text-[#828282]">
								Updated on Feb 2, 2023
							</span>
						</div>
						<div className="flex">
							<img src={download} alt="" />
							<img src={close} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center w-full">
				<div className="flex flex-col gap-2 w-full">
					<div className="flex items-center gap-2">
						<img src={marital} alt="" className="h-4" />
						<span className="text-sm text-[#1C4481]">
							Presentation
						</span>
					</div>
					<div className="flex gap-8">
						<div className="h-14 flex w-2/5 justify-between items-center px-4 shadow-allBorder rounded-md">
							<div className="flex flex-col">
								<span className="font-medium">
									KuldeepCV.dov(1.5 MB)
								</span>
								<span className="text-sm text-[#828282]">
									Updated on Feb 2, 2023
								</span>
							</div>
							<div className="flex">
								<img src={download} alt="" />
								<img src={close} alt="" />
							</div>
						</div>
						<div className="h-14 flex w-2/5 justify-between items-center px-4 shadow-allBorder rounded-md">
							<div className="flex flex-col">
								<span className="font-medium">
									KuldeepCV.dov(1.5 MB)
								</span>
								<span className="text-sm text-[#828282]">
									Updated on Feb 2, 2023
								</span>
							</div>
							<div className="flex">
								<img src={download} alt="" />
								<img src={close} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;
