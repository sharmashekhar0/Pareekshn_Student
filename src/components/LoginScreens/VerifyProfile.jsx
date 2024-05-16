import React from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { IoPerson } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import user from "../../assets/LoginScreen/User.png";
import tablet from "../../assets/LoginScreen/Tablet.png";
import message from "../../assets/LoginScreen/message.png";
import gender from "../../assets/LoginScreen/gender.png";
import date from "../../assets/LoginScreen/date.png";
import userProfile from "../../assets/LoginScreen/userProfile.png";

import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";

function VerifyProfile() {
  const navigate = useNavigate();

  const verifyProfileHandler = async () => {
    try {
      navigate("/login-with-passcode/upload-photo");
    } catch (error) {
      console.log("Error while verifing profile :: ", error);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-1/4 bg-white rounded-3xl right-64 absolute border h-[460px] overflow-y-scroll no-scrollbar px-4 py-2 ">
      <div className="flex justify-between items-center">
        <img
          src={arrowLeft}
          alt=""
          className="bg-[#1C4481] w-6 h-6 rounded-full"
          onClick={handleBack}
        />
        <div className="flex flex-col items-end">
          <span className="font-semibold text-[#AFAFAF]">Verify</span>
          <span className="font-semibold text-[#222222]">Profile</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-2 text-sm px-2">
        <div className="border border-[#000000] rounded-md px-2 py-1">
          <div className="flex items-center gap-2 text-[#1C4481]">
            <img src={userProfile} alt="" className="h-5 w-5" />
            <span>Candidate Name</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="Kuldeep"
          />
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={gender} alt="" className="h-5 w-5" />
            <span>Gender</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="outline-none px-7 placeholder:text-black"
              placeholder="Male"
            />
            <FaAngleDown />
          </div>
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={date} alt="" className="h-5 w-5" />
            <span>Date of Birth*</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="outline-none px-7 placeholder:text-black"
              placeholder="17/08/2001"
            />
            <FaRegCalendar />
          </div>
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={message} alt="" className="h-5 w-5" />
            <span>Email*</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="Kuldeep@gmail.com"
          />
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={tablet} alt="" className="h-5 w-5" />
            <span>Mobile Number*</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="6321145888"
          />
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={user} alt="" className="h-4 w-5" />
            <span>Aadhar Number*</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="654123658987"
          />
          <span className="px-7"></span>
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={user} alt="" className="h-4 w-5" />
            <span>Qualification</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="Graduation"
          />
          <span className="px-7"></span>
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={user} alt="" className="h-4 w-5" />
            <span>State</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="Gujrat"
          />
          <span className="px-7"></span>
        </div>
        <div className="border border-black rounded-md px-2 py-1">
          <div className="flex  items-center gap-2 text-[#1C4481]">
            <img src={user} alt="" className="h-4 w-5" />
            <span>District</span>
          </div>
          <input
            className="outline-none px-7 placeholder:text-black"
            placeholder="Gujrat"
          />
          <span className="px-7"></span>
        </div>
        <button
          onClick={verifyProfileHandler}
          className="h-10 mb-2 w-full bg-[#1C4481] text-white font-medium flex items-center justify-center rounded-full"
        >
          <span>Verify</span>
        </button>
      </div>
    </div>
  );
}

export default VerifyProfile;
