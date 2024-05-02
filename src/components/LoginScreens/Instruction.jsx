import React from "react";
import fileDock from "../../assets/LoginScreen/File_dock.png";
import videoPlay from "../../assets/LoginScreen/videoPlay.png";
import nextVideo from "../../assets/LoginScreen/nextVideo.png";

function Instruction() {
	return (
		<div className="bg-[#EDF2FF] h-screen m-4 rounded-3xl flex justify-center relative items-center">
			<div className="bg-[#FFFFFF] relative h-fit w-2/3 rounded-3xl p-4 flex flex-col items-center">
				<h1 className="text-[#1C4481] font-bold text-4xl">Welcome!</h1>
				<div className="border-[#1C4481] rounded-3xl my-8 px-2 border-[4px] h-12 w-fit text-sm flex items-center gap-2">
					<img src={fileDock} alt="" className="h-8" />
					<span className="font-bold text-[#1C4481]">
						Download Instruction
					</span>
				</div>
				<div className="flex flex-col items-center gap-2 w-full">
					<span className="font-bold">Video Instruction</span>
					<div className="bg-[#585858] h-72 w-2/3 rounded-3xl flex justify-center items-center">
						<img src={videoPlay} alt="" className="h-20" />
					</div>
				</div>
				<img
					src={nextVideo}
					alt=""
					className="absolute right-10 h-10 top-1/2"
				/>
			</div>
			<button className="bg-[#1C4481] absolute bottom-1 h-10 w-1/6 rounded-3xl text-white font-medium m-1">
				Start Theory
			</button>
		</div>
	);
}

export default Instruction;
