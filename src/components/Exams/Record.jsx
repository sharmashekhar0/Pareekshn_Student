import React from "react";
import recordAudio from "../../assets/LoginScreen/recordAudio.png";
import recordVideo from "../../assets/LoginScreen/recordVideo.png";

function Record() {
	return (
		<div className="min-h-96 flex flex-col items-center gap-16">
			<div className="h-60 w-1/2 rounded-[60px] bg-white flex items-center justify-center shadow-2xl flex-col gap-6">
				<span className="text-xl text-[#1C4481] font-medium">
					Record Audio
				</span>
				<div className="w-24 h-24 rounded-full shadow-completedHackathon xl bg-white flex items-center justify-center">
					<img src={recordAudio} alt="" className="h-16 w-16" />
				</div>
				<span className="text-sm font-medium">
					Click this icon to record audio
				</span>
			</div>
			<div className="h-60 w-1/2 rounded-[60px] bg-white flex items-center justify-center shadow-2xl flex-col gap-6 mb-12">
				<span className="text-xl text-[#1C4481] font-medium">
					Record Video
				</span>
				<div className="w-24 h-24 rounded-full shadow-completedHackathon xl bg-white flex items-center justify-center">
					<img src={recordVideo} alt="" className="h-16 w-16" />
				</div>
				<span className="text-sm font-medium">
					Click this icon to record audio
				</span>
			</div>
		</div>
	);
}

export default Record;
