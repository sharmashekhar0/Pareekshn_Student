import React, { useState, useRef } from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import upload from "../../assets/LoginScreen/upload.png";
import { useNavigate } from "react-router";
import uploadPhoto from "../../actions/LoginScreens/uploadPhoto";
import Webcam from "react-webcam";

function UploadPhoto() {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isWebcamOpen, setIsWebcamOpen] = useState(false);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    };

    const uploadPhotoHandler = async (formData) => {
        try {
            const data = {
                file: capturedImage,
                exam_id: "8551",
                student_id: "211037",
                sub_user_id: "28",
                user_id: "1",
                usercode: "i9lBY5euU0vw",
            };
            await uploadPhoto(data);
            navigate("/login-with-passcode/upload-id");
        } catch (error) {
            console.log("Error while uploading photo:", error);
        }
    };

    const handleBack = () => {
        if (capturedImage) {
            setCapturedImage(null);
        } else {
            setIsWebcamOpen(false);
        }
    };

    const retakePhoto = () => {
        setCapturedImage(null);
    };

    return (
        <div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-2/3 p-4">
            <div className="flex justify-between items-center">
                <img
                    src={arrowLeft}
                    alt=""
                    className="bg-[#1C4481] w-6 h-6 rounded-full cursor-pointer"
                    onClick={handleBack}
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
                {isWebcamOpen && !capturedImage && (
                    <div className="w-full h-64 relative rounded-md overflow-hidden border border-gray-300">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={{
                                facingMode: "environment"
                            }}
                            className="absolute inset-0 w-full h-64"
                        />
                        <button
                            onClick={capturePhoto}
                            className="bg-[#1C4481] text-white w-1/2 h-10 rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2"
                        >
                            Capture
                        </button>
                    </div>
                )}
                {capturedImage && (
                    <div className="flex flex-col items-center">
                        <img src={capturedImage} alt="Captured" className="w-24 h-24 rounded-full" />
                        <button
                            onClick={retakePhoto}
                            className="text-[#1C4481] mt-2 underline cursor-pointer"
                        >
                            Retake
                        </button>
                    </div>
                )}
                {!isWebcamOpen && !capturedImage && (
                    <img src={upload} alt="" className="h-28 cursor-pointer" onClick={() => setIsWebcamOpen(true)} />
                )}
                <span className="text-center text-[12px] text-[#6C6C6C]">
                    Once you click a picture it will show in this window. You
                    can retake the picture by clicking on the camera icon.
                </span>
                {capturedImage && (
                    <button
                        onClick={uploadPhotoHandler}
                        className="bg-[#1C4481] text-white w-1/2 h-10 rounded-full"
                    >
                        Upload
                    </button>
                )}
            </div>
        </div>
    );
}

export default UploadPhoto;
