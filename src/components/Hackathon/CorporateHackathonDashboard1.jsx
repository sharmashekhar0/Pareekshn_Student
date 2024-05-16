import React from "react";
import avatar from "/avatar.png";
import profileComletion from "/profileCompletion.png";
// import CorporateHackathonSidebar from "../CorporateHackathonSidebar";
import mock from "/mock.png";
import start from "/start.png";
import pack from "/pack.png";
import code from "/code.png";
import duration from "/duration.png";
import passcode from "/passcode.png";
import banner1 from "/banner1.png";
import digital from "/digital.png";
import gamer from "/gamer.png";
import topad from "../../assets/Hackathon/topad.png";
import social from "../../assets/Hackathon/social.png";
import paid from "../../assets/Hackathon/paid.png";
import free from "../../assets/Hackathon/free.png";
import hackathon from "../../assets/Hackathon/hackathon.png";
import date from "../../assets/Hackathon/date.png";
import sector from "../../assets/Hackathon/sector.png";
import location from "../../assets/Hackathon/location.png";
import level from "../../assets/Hackathon/level.png";
import bottom from "../../assets/Hackathon/bottom.png";
import LeaderBoard from "../Dashboard/LeaderBoard";
import { Outlet } from "react-router";

function CorporateHackathonDashboard1() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LeftSide */}
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
        <div className="bg-[#EDF2FF] min-h-screen rounded-3xl">
          <div className="flex py-8 px-4">
            <div className="w-5/6 mx-4 h-fit flex  flex-col gap-4">
              <img src={topad} alt="" className="" />
              <div className="flex justify-between items-center">
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 w-[220px] h-28 rounded-xl flex justify-between px-4 py-2">
                  <div className="w-1/4 h-1/6 flex flex-col gap-2">
                    <img src={social} alt="" />
                    <div className="flex flex-col text-sm font-medium text-white">
                      <span>Total</span>
                      <span>Hackathon</span>
                    </div>
                  </div>
                  <div className="flex items-center w-1/3 justify-center">
                    <span className="text-3xl text-white font-medium">10</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-600 w-[220px] h-28 rounded-xl flex justify-between px-4 py-2">
                  <div className="w-1/4 h-1/6 flex flex-col gap-2">
                    <img src={free} alt="" />
                    <div className="flex flex-col text-sm font-medium text-white">
                      <span>Free</span>
                      <span>Hackathon</span>
                    </div>
                  </div>
                  <div className="flex items-center w-1/3 justify-center">
                    <span className="text-3xl text-white font-medium">8</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-[220px] h-28 rounded-xl flex justify-between px-4 py-2 ">
                  <div className="w-1/2 h-1/6 flex flex-col gap-2">
                    <img src={paid} alt="" className="w-1/2" />
                    <div className="flex flex-col text-sm font-medium text-white ">
                      <span>Paid</span>
                      <span>Hackathon</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-1/3">
                    <span className="text-3xl text-white font-medium">2</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-8 mx-auto	w-full justify-center">
                  <div className="w-fit border border-[#1C4481] py-2 px-4 rounded-full font-medium text-[#1C4481]">
                    <span>Completed Hackathon</span>
                  </div>
                  <div className="w-fit text-white py-2 px-4 rounded-full font-medium bg-[#1C4481]">
                    <span>Upcoming Hackathon</span>
                  </div>
                </div>
                <div className="w-full h-fit bg-white rounded-3xl">
                  <div className="flex h-1/2 items-center justify-between p-6">
                    <div className="flex w-2/3 gap-2">
                      <img src={hackathon} alt="" className="h-1/3 w-1/3 " />
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#1C4481] text-lg">
                          Fresher UI/UX designer
                        </span>
                        <span className="text-sm text-[#1C4481] font-medium">
                          UI/UX Designer
                        </span>
                        <span className="text-sm text-[#7B7B7B]">
                          Level-Easy
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center bg-[#1C4481] h-10 w-28 rounded-full justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-white ">Free</span>
                      </div>
                    </div>
                  </div>
                  <hr class="border-t-[1px] border-[#1C4481]" />
                  <div className="flex justify-between p-6  text-[#1C4481]">
                    <div className="flex items-center gap-2">
                      <img src={date} alt="" className="h-8" />
                      <div className="flex flex-col text-[12px]">
                        <span>Date & Time</span>
                        <span className="font-semibold">
                          12-07-2023 | 12:30 PM
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={sector} alt="" className="h-8" />
                      <div className="flex flex-col text-[12px]">
                        <span>Sector</span>
                        <span className="font-semibold">IT Sector</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={location} alt="" className="h-8" />
                      <div className="flex flex-col text-[12px]">
                        <span>Location</span>
                        <span className="font-semibold">
                          Noida, Uttar Pradesh
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={level} alt="" className="h-8" />
                      <div className="flex flex-col text-[12px]">
                        <span>Level</span>
                        <span className="font-semibold">Easy</span>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={bottom} alt="" className="mt-2" />
              </div>
            </div>
            {/* <div className="flex flex-col gap-8 items-center bg-white w-[260px] p-6 rounded-3xl">
							<img src={gamer} alt="" className="h-48" />
							<img src={gamer} alt="" className="h-56" />
						</div> */}
            {/* <LeaderBoard /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateHackathonDashboard1;
