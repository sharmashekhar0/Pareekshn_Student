import React from "react";

function TextOptions() {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex items-center gap-8">
				<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
					<span className="text-xl font-semibold">A</span>
				</div>
				<div className="h-14 w-5/6 border bg-white rounded-full flex items-center justify-center">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</span>
				</div>
			</div>
			<div className="flex items-center gap-8">
				<div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#1C4481]">
					<span className="text-xl font-semibold">B</span>
				</div>
				<div className="h-14 w-5/6 border-2 border-[#1C4481] bg-white rounded-full flex items-center justify-center">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</span>
				</div>
			</div>
			<div className="flex items-center gap-8">
				<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
					<span className="text-xl font-semibold">C</span>
				</div>
				<div className="h-14 w-5/6 border bg-white rounded-full flex items-center justify-center">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</span>
				</div>
			</div>
			<div className="flex items-center gap-8">
				<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
					<span className="text-xl font-semibold">D</span>
				</div>
				<div className="h-14 w-5/6 border bg-white rounded-full flex items-center justify-center">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</span>
				</div>
			</div>
		</div>
	);
}

export default TextOptions;
