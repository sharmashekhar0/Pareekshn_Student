import React from "react";
import close from "../../assets/Dashboard/close.png";
import { DiVim } from "react-icons/di";
import leftBg from "../../assets/LoginScreen/leftBg.jpg";
import { BsThreeDots } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { LuSquareAsterisk } from "react-icons/lu";
import { FaCircleExclamation } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import login from "../../actions/LoginScreens/login";
import { useNavigate } from "react-router-dom";
import SlidingMessage from "../ApiResponse";
import * as Yup from "yup";

function EditProfile({ onClose }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-1/2 h-2/3 rounded-md shadow-md">
        <div className="flex justify-between items-center bg-blue-100  rounded-t-md h-12">
          <h1 className="ml-8 items-center mt-3 font-semibold text-blue-800">
            Edit Profile
          </h1>
          <img
            className="mr-8 items-center mt-2 h-8  cursor-pointer"
            src={close}
          />
        </div>
        <div className="flex gap-5 justify-around px-5 mt-2">
          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="text"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  First Name
                </label>
              </div>
            </div>
          </div>
          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="text"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  Last Name
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-around px-5 mt-10">
          <div className="relative h-12 w-1/2">
            <div>
              <select
                id="gender"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                {...register("gender", {
                  required: true,
                })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
              <div className="absolute top-4 left-2 transform -translate-y-1/2">
                <IoPerson className="text-[#1C4481]" />
              </div>
              <div
                htmlFor="gender"
                className="absolute text-base pl-8 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <label htmlFor="" className="pl-2">
                  Please Select Gender
                </label>
              </div>
            </div>
          </div>

          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="Date"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  Date of Birth
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-around px-5 mt-10">
          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="text"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  Email
                </label>
              </div>
            </div>
          </div>
          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="text"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  Mobile Number
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-5 mt-10 pr-8">
          <div className="relative h-12 w-1/2">
            <div>
              <input
                type="email"
                id="floating_filled"
                className="block pl-8 text-black pb-2.5 pt-5 w-full text-base border border-[#6E6E6E] rounded-md appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                placeholder=""
                {...register("username", {
                  required: true,
                })}
              />
              <div
                htmlFor="floating_filled"
                className="absolute text-base pl-5 text-[#1C4481] dark:text-[#1C4481] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#1C4481] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto flex items-center"
              >
                <IoPerson className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#1C4481]" />
                <label htmlFor="" className="pl-2">
                  UserName
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
