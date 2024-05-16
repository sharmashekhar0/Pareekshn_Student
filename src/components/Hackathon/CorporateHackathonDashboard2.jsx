import React from "react";
import avatar from "/avatar.png";
// import CorporateHackathonSidebar from "../CorporateHackathonSidebar";
import close from "../../assets/Hackathon/close.png";
import twoperson from "../../assets/Hackathon/twoperson.png";
import bannertitle from "../../assets/Hackathon/bannertitle.png";
import arrowDown from "../../assets/Hackathon/arrowDown.png";
import time from "../../assets/Hackathon/time.png";
import bannersize from "../../assets/Hackathon/bannersize.png";
import edit from "../../assets/Hackathon/edit.png";

function CorporateHackathonDashboard2() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* <CorporateHackathonSidebar /> */}
      <div className="w-5/6 p-4 overflow-y-scroll no-scrollbar">
        <div className="flex items-center justify-between mb-14">
          <span className="font-semibold text-[#1C4481] text-2xl">
            Dashboard
          </span>
          <div className="flex items-center w-1/5 justify-between">
            <div className="flex items-center gap-2 w-full h-14 border-2 border-[#1C4481] px-1 rounded-[100px]">
              <img src={avatar} alt="" className="h-10 m-1" />
              <div className="flex flex-col text-sm">
                <span className="font-semibold text-[#305187]">Welcome</span>
                <span className="font-medium">User TP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EDF2FF] min-h-screen flex justify-center items-center rounded-3xl">
          <div className="bg-white min-h-screen ps-8 flex flex-col gap-6 py-4 pe-4 w-full m-4 rounded-3xl">
            <div className="w-full flex justify-between items-center">
              <span className="text-xl font-medium text-[#1C4481]">
                Create Hackathon
              </span>
              <img src={close} alt="" className="h-7" />
            </div>
            <div className="flex gap-2 border rounded-xl p-2 px-6 h-[65px]">
              <img src={twoperson} alt="" className="h-5 w-5" />
              <div className="flex flex-col justify-between">
                <span className="text-sm text-[#1C4481] ">Add Title</span>
                <span className="font-medium">Fresher UI/UX Designer</span>
              </div>
            </div>
            <div className="flex items-center w-2/3 justify-between">
              <div className="flex gap-2">
                <div className="border-[#1C4481] border-2 h-6 w-6 rounded-full"></div>
                <span>Free</span>
              </div>
              <div className="flex gap-2">
                <div className="border-[#1C4481] border-2 h-6 w-6 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-[#1C4481] rounded-full"></div>
                </div>
                <span>Paid</span>
              </div>
              <div className="flex items-center justify-center border-[#1C4481] border-2 w-2/6 py-3 rounded-md bg-[#EBEBEB66]">
                <span className="text-[#000000a1]">Rs.85</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-[#E7F0FF] px-4 py-2 rounded-md text-[#1C4481] font-medium">
                <span>Add Banner</span>
              </div>
              <div className="flex w-4/5 justify-between ">
                <div className="flex w-[360px] h-[65px] gap-2 border rounded-xl p-2 px-6 ">
                  <img src={bannertitle} alt="" className="h-4 w-5" />
                  <div className="flex flex-col justify-between">
                    <span className="text-sm text-[#1C4481] ">
                      Banner Title
                    </span>
                    <span className="font-medium">Fresher UI/UX Designer</span>
                  </div>
                </div>
                <div className="flex gap-2 w-[360px] h-[65px] border rounded-xl p-2 px-6 ">
                  <img src={time} alt="" className="h-4 w-5" />
                  <div className="flex flex-col w-full justify-between">
                    <span className="text-sm text-[#1C4481] ">Time</span>
                    <div className="flex justify-between w-full">
                      <div className="flex gap-1">
                        <span>Hr 00</span>
                        <img src={arrowDown} alt="" />
                      </div>
                      <div className="flex gap-1">
                        <span>Min 00</span>
                        <img src={arrowDown} alt="" />
                      </div>
                      <div className="flex gap-1">
                        <span>PM</span>
                        <img src={arrowDown} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-medium">Banner Image</span>
              <div className="flex justify-between w-4/5">
                <div className=" flex-col gap-1 w-full">
                  <div className="flex w-[360px] h-[65px] gap-2 border rounded-xl p-2 px-6">
                    <div className="flex gap-2 w-full">
                      <img src={bannersize} alt="" className="h-4 w-5" />
                      <div className="flex flex-col w-full">
                        <span className="text-sm text-[#1C4481] justify-between">
                          Select Banner Size
                        </span>
                        <div className="flex justify-between w-full ">
                          <span className="font-medium">60x468 Px</span>
                          <img src={arrowDown} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] text-[#848484]">
                    Supported formats PNG, JPEG and File size max.5 mb
                  </span>
                </div>
                <div className="w-1/2 flex-col gap-1">
                  <div className="flex w-[360px] h-[65px] border border-black border-dotted rounded-xl p-2 px-6 flex-col items-center justify-between">
                    <span className="font-medium">Upload File</span>
                    <span className="text-[12px] text-[#A4A4A4]">
                      Banner Size - 800x400px
                    </span>
                  </div>
                  <span className="text-[12px] text-[#848484]">
                    Supported formats PNG, JPEG and File size max.5 mb
                  </span>
                </div>
              </div>
              <div className="w-1/2 flex-col gap-1">
                <div className="flex w-[360px] h-[65px] border rounded-xl p-2 px-6 flex-col justify-center">
                  <div className="flex gap-1 items-center">
                    <img src={bannersize} alt="" className=" w-5" />
                    <span className="text-[#1C4481] text-sm">
                      Download Sample Banner
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-4/5 h-[65px] border rounded-xl p-2 px-6 justify-between items-center">
                <div className="flex gap-1 items-center">
                  <img src={edit} alt="" className=" w-5" />
                  <span className="text-[#1C4481] text-sm">
                    Add description
                  </span>
                </div>
                <img src={edit} alt="" className=" h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateHackathonDashboard2;
