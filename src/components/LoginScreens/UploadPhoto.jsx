import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import React, { useState, useRef } from "react";
import upload from "../../assets/LoginScreen/upload.png";
import { useNavigate } from "react-router";
import uploadPhoto from "../../actions/LoginScreens/uploadPhoto";

function UploadPhoto() {
	const navigate = useNavigate();

	const uploadPhotoHandler = async (formData) => {
		try {
			const data = {
				file: "",
				exam_id: "8551",
				student_id: "211037",
				sub_user_id: "28",
				user_id: "1",
				usercode: "i9lBY5euU0vw",
			};
			await uploadPhoto(data);
			navigate("/student/login-with-passcode/upload-id");
		} catch (error) {
			console.log("Error while uploading photo :: ", error);
		}
	};

	return (
		<div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4">
			<div className="flex justify-between items-center">
				<img
					src={arrowLeft}
					alt=""
					className="bg-[#1C4481] w-6 h-6 rounded-full"
				/>
				<div className="flex flex-col items-end">
					<span className="font-semibold text-[#AFAFAF]">
						Candidate
					</span>
					<span className="font-semibold text-[#555555]">Panel</span>
				</div>
			</div>
			<div className="flex flex-col justify-between text-sm items-center gap-6 my-8">
				<span className="font-bold">Upload/Capture photo</span>
				<img src={upload} alt="" className="h-28" />
				<span className="text-center text-[12px] text-[#6C6C6C]">
					Once you Click a picture it will show in this window, you
					can retake the picture clicking on the camera icon
				</span>
				<button
					onClick={uploadPhotoHandler}
					className="bg-[#1C4481] text-white w-1/2 h-8 rounded-3xl"
				>
					Upload
				</button>
			</div>
		</div>
	);
}

export default UploadPhoto;
