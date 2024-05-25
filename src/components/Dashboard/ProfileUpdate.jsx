import React, { useEffect, useState } from "react";
import marital from "../../assets/Dashboard/marital.png";
import category from "../../assets/Dashboard/category.png";
import abled from "../../assets/Dashboard/abled.png";
import language from "../../assets/Dashboard/language.png";
import studentLanguages from "../../actions/Dashboard/studentLanguages";

function ProfileUpdate() {
  const [languages, setLanguages] = useState([]);
  const user = JSON.parse(localStorage.getItem("student_profile"));

  const getStudentLanguagesHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await studentLanguages(data);
      console.log("Languages :: ", response.data.langs);
      setLanguages(response.data.langs);
    } catch (error) {
      console.log("Error while getting student language :: ", error);
    }
  };

  useEffect(() => {
    getStudentLanguagesHandler();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={marital} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Marital Status</span>
          </div>
          <input
            disabled
            type="text"
            value={user && user.martial}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Category</span>
          </div>
          <input
            disabled
            type="text"
            value={user && user.id_cast_category}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={abled} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Differently abled</span>
          </div>
          <input
            disabled
            type="text"
            value={user.differently_abled}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
        <span>Communication Language(s)</span>
      </div>
      {languages?.map((language) => (
        <div>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={language} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Language</span>
              </div>
              <input
                disabled
                type="text"
                value={language.lang_name}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={language} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Level</span>
              </div>
              <input
                disabled
                type="text"
                value={language.id_proficiency}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
          <div className="flex gap-4 p-4 text-sm">
            <div className="flex gap-2">
              <input
                disabled
                type="radio"
                checked={language.read}
                value="Read"
              />
              <label htmlFor="">Read</label>
            </div>
            <div className="flex gap-2">
              <input
                disabled
                type="radio"
                checked={language.write}
                value="Write"
              />
              <label htmlFor="">Write</label>
            </div>
            <div className="flex gap-2">
              <input
                disabled
                type="radio"
                value="Speak"
                checked={language.speak}
              />
              <label htmlFor="">Speak</label>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
        <span>Current Location</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={marital} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Town</span>
          </div>
          <input
            disabled
            type="text"
            value={user && user.city}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">District</span>
          </div>
          <input
            disabled
            type="text"
            value={user && user.state}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">State</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Pin Code</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
        <span>Desired Work Location</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Town</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">District</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">State</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Pin Code</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Current Profile</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Total Work Exprience</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Current Salary</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
