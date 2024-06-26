import React from "react";
import logo from "/logo.png";
import questionMark from "/questionMark.png";
import logout from "/logout.png";
import reset from "/reset1.png";
import previous from "/previous.png";
import play from "/play.png";
import next from "/next.png";
import lock from "/lock.png";
import translate from "../../assets/LoginScreen/translate.png";
import angleDown from "../../assets/LoginScreen/angleDown.png";
import indicatorExam from "../../assets/LoginScreen/indicatorExam.png";
import questionIndicator from "../../assets/LoginScreen/questionIndicator.png";
import info from "../../assets/LoginScreen/Info.png";
import speak from "../../assets/LoginScreen/speak.png";
import livevideo from "../../assets/LoginScreen/livevideo.png";
import logoutUser from "../../actions/LoginScreens/logout";

import { useState, useEffect } from "react";
import TextOptions from "../../components/Exams/TextOptions";
import QuestionSection from "../../components/Exams/QuestionSection";
import { Outlet, useNavigate } from "react-router-dom";
import getStudentProfile from "../../actions/Dashboard/getStudentProfile";
import getExam from "../../actions/LoginScreens/getExam";

function Question() {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [time, setTime] = useState(600);
	const [studentProfile, setStudentProfile] = useState({});
	const [questions, setQuestions] = useState({});
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [examInitial, setExamInitial] = useState({});
	const questionsList = [];

	const getStudentData = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("ps_loguser"));
			console.log("User :: ", user);
			setUser(user);
			getExamHandler(user);
			const data = {
				usercode: user.usercode,
				id_self_student: user.id_self_student,
			};
			const response = await getStudentProfile(data);
			console.log("Profile Percentage response:", response);
			if (response?.data?.code === 1000)
				setStudentProfile(response?.data?.profile);
		} catch (error) {
			console.log("Error while getting data :: ", error);
			setErrors([error.message]);
		}
	};

	const getExamHandler = async (user) => {
		try {
			const data = {
				exam_id: 8565,
				shuffle_ans: 0,
				shuffle_ques: 1,
				student_id: user?.id_self_student,
				usercode: user?.usercode,
			};
			console.log(data);
			const response = await getExam(data);
			console.log("Exam Initial Response :: ", response);
			console.log(response?.data?.exams);
			setExamInitial(response?.data?.exams);
			setQuestions(response?.data?.exams?.question);
			const totalQuestion = response?.data?.exams?.totalq;
			for (let i = 1; i <= totalQuestion; i++) {
				questionsList.push(
					<li>
						<div className="bg-[#A6E097] h-8 w-8 flex items-center justify-center rounded-lg font-semibold text-lg text-[#14540E]">
							<span>{i}</span>
						</div>
					</li>
				);
			}
			console.log(questionsList);
		} catch (error) {
			console.log("Error while getting exam :: ", error);
		}
	};

	useEffect(() => {
		getStudentData();
	}, []);

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	const logoutHandler = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("ps_loguser"));
			const data = {
				usercode: user?.usercode,
				id_self_student: user?.id_self_student,
			};
			const response = await logoutUser(data);
			console.log(response);
			if (response?.data?.code === 1000) {
				navigate("/");
			}
		} catch (error) {
			console.log("Error while logging out user :: ", error);
		}
	};

	return (
		<>
			<div className="min-h-screen font-custom">
				{/* Header */}
				<div className="h-20 bg-[#305187] px-8 flex items-center justify-between">
					<img src={logo} alt="" className="h-4/5 my-auto" />
					<span className="font-medium text-white text-xl">
						Online Exam
					</span>
					<div className="flex  gap-6">
						<div className="flex items-center justify-around py-1 gap-2 bg-[#FEFEFF1A] rounded-full h-14 w-[200px] px-2 pr-8">
							<img
								src={studentProfile.profile_pic}
								alt=""
								className="h-10 rounded-full"
							/>
							<div className="flex flex-col font-medium text-white">
								<span className="w-[150px]">
									{studentProfile.student_name}
								</span>
								<span>{studentProfile.id}</span>
							</div>
						</div>
						<div className="flex gap-3 h-14">
							<img
								src={logout}
								alt=""
								onClick={logoutHandler}
								className="cursor-pointer"
							/>
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
								<span className="font-bold">
									{questions?.lang}
								</span>
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
							<img
								src={questionIndicator}
								alt=""
								className="h-5 "
							/>
							<div className="flex justify-between w-full px-4 overflow-x-scroll no-scrollbar">
								{questionsList}
							</div>
							<img
								src={questionIndicator}
								alt=""
								className="scale-x-[-1] h-5"
							/>
						</div>
						<span className="font-medium text-xl">
							Time Remaining -{" "}
							<span className="font-semibold text-2xl">
								{formatTime(time)}
							</span>
						</span>
						<img src={indicatorExam} alt="" className="h-5" />
					</div>
					<div className="flex">
						<div className="w-1/2 ml-8 px-2 mt-1 border-r flex flex-col gap-4">
							<div className="flex mt-6 justify-between items-center">
								<span className="font-semibold text-[#1C4481]">
									{/* {questions[currentQuestionIndex]?.title} */}
								</span>
								<div className="flex items-center gap-3">
									<div className="h-8 border-[#14540E] border w-28 flex items-center justify-center rounded-full text-sm">
										<span className="font-semibold text-[#5F5F5F]">
											Max Marks{" "}
										</span>
									</div>
									<div className="bg-[#FAFF0D] px-3 rounded-full h-9 flex items-center justify-center font-medium gap-1 text-sm">
										<img
											src={info}
											alt=""
											className="h-4"
										/>
										{questions?.question_inst && (
											<span>
												{questions?.question_inst}
											</span>
										)}
									</div>
									<img src={speak} alt="" className="h-7" />
								</div>
							</div>
							<div className="border-t-2 border-[#c2c2c2]"></div>
							<QuestionSection />
							<div className="border-t border-[#c2c2c2]"></div>
							<div className="w-full h-32 flex items-center justify-between px-8">
								<div className="flex flex-col items-center gap-2">
									<img
										src={livevideo}
										alt=""
										className="h-20"
									/>
									<span className="font-medium text-[#444444]">
										Live Video
									</span>
								</div>
								<div className="flex gap-4 items-center justify-between ">
									<div className="flex flex-col items-center gap-2">
										<div className="border-2 flex-col border-[#1C4481] rounded-full h-11 w-11 flex items-center justify-center">
											<img
												src={reset}
												alt=""
												className="h-8"
											/>
										</div>
										<span>Reset</span>
									</div>
									<div className="flex flex-col items-center gap-2">
										<div className="border-2 flex-col border-[#1C4481] rounded-full h-11 w-11 flex items-center justify-center">
											<img
												src={previous}
												alt=""
												className="h-6"
											/>
										</div>
										<span>Previous</span>
									</div>
									<div className="flex flex-col items-center gap-2">
										<div className="border-2 flex-col border-[#1C4481] rounded-full h-11 w-11 flex items-center justify-center">
											<img
												src={play}
												alt=""
												className="h-6"
											/>
										</div>
										<span>Play</span>
									</div>
									<div className="flex flex-col items-center gap-2">
										<div className="border-2 flex-col border-[#1C4481] rounded-full h-11 w-11 flex items-center justify-center">
											<img
												src={next}
												alt=""
												className="h-6"
											/>
										</div>
										<span>Next</span>
									</div>
									<div className="flex flex-col items-center gap-2">
										<div className="border-2 flex-col border-[#1C4481] rounded-full h-11 w-11 flex items-center justify-center">
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
								<TextOptions />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Question;
