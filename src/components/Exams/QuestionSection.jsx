import React from "react";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import ImageQuestion from "./ImageQuestion";

function QuestionSection() {
	return (
		<div className="min-h-96 mb-8 flex flex-col gap-4">
			<span className="text-justify">
				{/* Q. Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown
				printer took a galley */}
				Q. According to this video
			</span>
			<ImageQuestion />
		</div>
	);
}

export default QuestionSection;
