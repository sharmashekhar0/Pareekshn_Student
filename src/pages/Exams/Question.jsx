import React from "react";
import logo from "/logo.png";
import avatar from "/avatar.png";
import questionMark from "/questionMark.png";
import logout from "/logout.png";
import arrowDown from "/arrowDown.png";
import arrow from "/arrow.png";
import indicator from "/indicator.png";
import mandatory from "/mandatory.png";
import volume from "/volume.png";
import reset from "/reset1.png";
import previous from "/previous.png";
import play from "/play.png";
import next from "/next.png";
import lock from "/lock.png";
import timer from "/timer.png";
import translate from "../../assets/LoginScreen/translate.png";
import angleDown from "../../assets/LoginScreen/angleDown.png";
import indicatorExam from "../../assets/LoginScreen/indicatorExam.png";
import questionIndicator from "../../assets/LoginScreen/questionIndicator.png";
import info from "../../assets/LoginScreen/Info.png";
import speak from "../../assets/LoginScreen/speak.png";
import livevideo from "../../assets/LoginScreen/livevideo.png";
import image from "../../assets/LoginScreen/image.png";

import { useState, useEffect } from "react";
import ChooseLanguage from "../../components/Exams/ChooseLanguage";

function Question() {
	const [time, setTime] = useState(600);

	useEffect(() => {
		const timer = setInterval(() => {
			if (time > 0) {
				setTime((prevTime) => prevTime - 1);
			} else {
				setTime(600); // restart the timer after 10 minutes
			}
		}, 1000); // update every second

		return () => clearInterval(timer); // cleanup the timer on component unmount
	}, [time]);

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	return (
		<div className="min-h-screen font-custom">
			{/* Header */}
			<div className="h-20 bg-[#305187] px-8 flex items-center justify-between">
				<img src={logo} alt="" className="h-4/5 my-auto" />
				<span className="font-medium text-white text-xl">
					Online Exam
				</span>
				<div className="flex  gap-6">
					<div className="flex items-center justify-around py-1 gap-2 bg-[#FEFEFF1A] rounded-full h-14 w-[200px] px-2 pr-8">
						<img src={avatar} alt="" className="h-12" />
						<div className="flex flex-col font-medium text-white">
							<span>Manoj SinghG</span>
							<span>8234KY678564</span>
						</div>
					</div>
					<div className="flex gap-3 h-14">
						<img src={logout} alt="" />
						<img src={questionMark} alt="" />
					</div>
				</div>
			</div>
			{/* Main */}
			<div className="flex flex-col">
				<div className="flex justify-between p-4 px-8 items-center">
					<span className="text-2xl font-medium text-[#1C4481]">
						Theory
					</span>
					<div className="flex gap-4 items-center">
						<div className="flex flex-col bg-[#DDEAFF] px-4 rounded-md py-1">
							<span className="font-medium text-sm">
								Default Language
							</span>
							<span className="font-bold">English</span>
						</div>
						<div className="flex items-center gap-5">
							<div className="flex flex-col text-sm font-medium">
								<span>You can translate question</span>
								<span>into other languages</span>
							</div>
							<img src={translate} alt="" />
						</div>
						<div
							className="border-2 border-[#1C4481] text-[#1C4481] h-10 w-28 flex items-center justify-between px-2 rounded-md
						"
						>
							<span>English</span>
							<img src={angleDown} alt="" />
						</div>
					</div>
				</div>
				<div className="bg-white h-14 border ml-8 mt-4 rounded-l-2xl flex items-center px-4 justify-between">
					<div className="flex items-center w-1/3 justify-between">
						<img src={questionIndicator} alt="" className="h-5 " />
						<div className="bg-[#A6E097] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>1</span>
						</div>
						<div className="bg-[#A6E097] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>2</span>
						</div>
						<div className="bg-[#A6E097] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>3</span>
						</div>
						<div className="bg-[#A6E097] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>4</span>
						</div>
						<div className="border-2 border-[#14540E] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>5</span>
						</div>

						<img
							src={questionIndicator}
							alt=""
							className="scale-x-[-1] h-5"
						/>
					</div>
					<span className="font-medium text-xl">
						Time Remaining -{" "}
						<span className="font-semibold text-2xl">06:30</span>
					</span>
					<img src={indicatorExam} alt="" className="h-5" />
				</div>
				<div className="flex">
					<div className="w-1/2 ml-8 px-2 mt-1 border-r flex flex-col gap-4">
						<div className="flex mt-6 justify-between items-center">
							<span className="font-semibold text-[#1C4481]">
								11/12- Level 2, (MT Nos-3)
							</span>
							<div className="flex items-center gap-3">
								<div className="h-8 border-[#14540E] border w-28 flex items-center justify-center rounded-full text-sm">
									<span className="font-semibold text-[#5F5F5F]">
										Max Marks 2
									</span>
								</div>
								<div className="bg-[#FAFF0D] px-3 rounded-full h-9 flex items-center justify-center font-medium gap-1 text-sm">
									<img src={info} alt="" className="h-4" />
									<span>It is Mandatory Question</span>
								</div>
								<img src={speak} alt="" className="h-7" />
							</div>
						</div>
						<div className="border-t-2 border-[#c2c2c2]"></div>
						<div className="h-96">
							<span className="text-justify">
								Q. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley
							</span>
						</div>
						<div className="border-t border-[#c2c2c2]"></div>
						<div className="w-full h-32 flex items-center justify-between px-8">
							<div className="flex flex-col items-center gap-2">
								<img src={livevideo} alt="" className="h-20" />
								<span className="font-medium text-[#444444]">
									Live Video
								</span>
							</div>
							<div className="flex gap-4 items-center justify-between ">
								<div className="flex flex-col items-center gap-2">
									<div className="border-2 flex-col border-[#1C4481] rounded-full h-12 w-12 flex items-center justify-center">
										<img
											src={reset}
											alt=""
											className="h-8"
										/>
									</div>
									<span>Reset</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<div className="border-2 flex-col border-[#1C4481] rounded-full h-12 w-12 flex items-center justify-center">
										<img
											src={previous}
											alt=""
											className="h-6"
										/>
									</div>
									<span>Previous</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<div className="border-2 flex-col border-[#1C4481] rounded-full h-12 w-12 flex items-center justify-center">
										<img
											src={play}
											alt=""
											className="h-6"
										/>
									</div>
									<span>Play</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<div className="border-2 flex-col border-[#1C4481] rounded-full h-12 w-12 flex items-center justify-center">
										<img
											src={next}
											alt=""
											className="h-6"
										/>
									</div>
									<span>Next</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<div className="border-2 flex-col border-[#1C4481] rounded-full h-12 w-12 flex items-center justify-center">
										<img
											src={lock}
											alt=""
											className="h-6"
										/>
									</div>
									<span>Lock</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/2 mt-1">
						<div className="bg-[#F3F7FF] mx-4 rounded-xl p-6 flex flex-col gap-6">
							<span className="font-semibold">Ans.</span>
							<div className="flex flex-col gap-12">
								<div className="flex items-center gap-8">
									<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
										<span className="text-xl font-semibold">
											A
										</span>
									</div>
									<div className="h-14 w-5/6 border bg-white rounded-full"></div>
								</div>
								<div className="flex items-center gap-8">
									<div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-[#1C4481]">
										<span className="text-xl font-semibold">
											B
										</span>
									</div>
									<div className="h-14 w-5/6 border-2 border-[#1C4481] bg-white rounded-full"></div>
								</div>
								<div className="flex items-center gap-8">
									<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
										<span className="text-xl font-semibold">
											C
										</span>
									</div>
									<div className="h-14 w-5/6 border bg-white rounded-full"></div>
								</div>
								<div className="flex items-center gap-8">
									<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black">
										<span className="text-xl font-semibold">
											D
										</span>
									</div>
									<div className="h-14 w-5/6 border bg-white rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Question;