import React from "react";
import leftBg from "../../assets/LoginScreen/leftBg.jpg";
import { BsThreeDots } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { LuSquareAsterisk } from "react-icons/lu";
import { FaCircleExclamation } from "react-icons/fa6";
import exam from "../../assets/LoginScreen/exam.png";
import books from "../../assets/LoginScreen/books.png";
import cap from "../../assets/LoginScreen/cap.png";
import bulb from "../../assets/LoginScreen/bulb.png";
import building from "../../assets/LoginScreen/building.png";
import login from "../../actions/LoginScreens/login";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import Login from "../../components/LoginScreens/Login";
import ForgetUsername from "../../components/LoginScreens/ForgetUsername";

function LoginWithPasscode() {
	return (
		<div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-0">
			<div className="w-5/6 lg:w-4/5 gap-8 xl:w-2/3 bg-[#e4ecf9] p-8 rounded-3xl flex flex-col items-center justify-between py-14">
				<p className="text-center text-[#1C4481] font-medium">
					Lorem ipsum dolor sit, amet consectetur adipisicing.
				</p>
				<Link to={"/student/login-with-passcode/login-passcode"}>
					<div className="bg-[#1b4581] flex items-center justify-center gap-2 text-sm px-4 sm:px-10 py-3 rounded-3xl text-white hover:cursor-pointer">
						<BsThreeDots className="text-white p-1 rounded-full  border-white border-2 h-8 w-8" />
						<p className="text-nowrap font-medium">
							Login Via Exam Passcode
						</p>
					</div>
				</Link>
				<p className="text-[#494949] text-sm font-medium">
					Lorem ipsum dolor sit.
				</p>
			</div>
			<img
				src={exam}
				alt=""
				className="absolute h-36 scale-x-[-1] bottom-0 right-0"
			/>
			<img
				src={books}
				alt=""
				className="absolute h-32 top-10 right-10 grayscale"
			/>
			<img
				src={cap}
				alt=""
				className="absolute bottom-4 h-20 right-[550px] "
			/>
			<img
				src={bulb}
				alt=""
				className="absolute top-16 scale-x-[-1] h-24 right-[550px] "
			/>
			<img
				src={building}
				alt=""
				className="absolute right-2 h-16 top-[180px]"
			/>
		</div>
	);
}

export default LoginWithPasscode;
