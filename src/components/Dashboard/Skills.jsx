import React, { useEffect, useState } from "react";
import marital from "../../assets/Dashboard/marital.png";
import category from "../../assets/Dashboard/category.png";
import abled from "../../assets/Dashboard/abled.png";
import language from "../../assets/Dashboard/language.png";
import getITSkills from "../../actions/Dashboard/getITSkills";
import getProjects from "../../actions/Dashboard/getProjects";
import getCertificates from "../../actions/Dashboard/getCertificates";
import getProfileSummary from "../../actions/Dashboard/getProfileSummary";
import getPublicLinks from "../../actions/Dashboard/getPublicLinks";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [profileSummary, setProfileSummary] = useState("");
  const [accomplishments, setAccomplishments] = useState("");
  const [publicLinks, setPublicLinks] = useState([]);

  const getITSkillsHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await getITSkills(data);
      if (response?.data?.code === 1000) setSkills(response?.data?.it_skills);
    } catch (error) {
      console.log("Error while getting IT Skills :: ", error);
    }
  };

  const getProjectsHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await getProjects(data);
      if (response?.data?.code === 1000) setProjects(response?.data?.projects);
    } catch (error) {}
  };

  const getCertificatesHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await getCertificates(data);
      if (response?.data?.code === 1000)
        setCertificates(response?.data?.certificates);
    } catch (error) {
      console.log("Error while getting certificates :: ", error);
    }
  };

  const getPublicLinksHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await getPublicLinks(data);
      if (response?.data?.code === 1000) setPublicLinks(response?.data?.links);
      console.log("Links :: ", response?.data?.links);
    } catch (error) {
      console.log("Error while getting public links :: ", error);
    }
  };

  const getProfileSummaryHandler = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        usercode: user?.usercode,
        id_self_student: user?.id_self_student,
      };
      const response = await getProfileSummary(data);
      if (response?.data?.code === 1000) {
        setProfileSummary(response?.data?.profile_summary);
        setAccomplishments(response?.data?.accomplishment);
      }
    } catch (error) {
      console.log("Error while getting profile summary :: ", error);
    }
  };

  useEffect(() => {
    getITSkillsHandler();
    getProjectsHandler();
    getCertificatesHandler();
    getProfileSummaryHandler();
    getPublicLinksHandler();
  }, []);

  function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const durationMs = Math.abs(end - start);

    // Convert milliseconds to days
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

    if (days > 30) {
      // Convert days to months
      const months = Math.floor(days / 30);
      return months.toString() + " month" + (months > 1 ? "s" : "");
    } else {
      return days.toString() + " day" + (days > 1 ? "s" : "");
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={marital} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Sector</span>
          </div>
          <input
            disabled
            type="text"
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={category} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Qualification</span>
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
            <img src={marital} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Level</span>
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
            <span className="text-sm text-[#1C4481]">Profile Summary</span>
          </div>
          <input
            disabled
            type="text"
            value={profileSummary}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center gap-2">
            <img src={abled} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Accomplishments</span>
          </div>
          <input
            disabled
            type="text"
            value={accomplishments}
            className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <img src={abled} alt="" className="h-4" />
            <span className="text-sm text-[#1C4481]">Online Profiles</span>
          </div>
          {publicLinks?.map((link) => (
            <input
              disabled
              type="text"
              value={link?.profile_link}
              className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
        <span>IT Skills</span>
      </div>
      {skills?.map((skill) => (
        <>
          <div>
            <div className="flex items-center">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex items-center gap-2">
                  <img src={language} alt="" className="h-4" />
                  <span className="text-sm text-[#1C4481]">Software Name</span>
                </div>
                <input
                  disabled
                  type="text"
                  value={skill?.software_name}
                  className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex items-center gap-2">
                  <img src={language} alt="" className="h-4" />
                  <span className="text-sm text-[#1C4481]">
                    Software Version
                  </span>
                </div>
                <input
                  disabled
                  type="text"
                  className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex items-center gap-2">
                  <img src={language} alt="" className="h-4" />
                  <span className="text-sm text-[#1C4481]">Last Used</span>
                </div>
                <input
                  disabled
                  type="text"
                  value={skill.last_used}
                  className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex items-center gap-2">
                  <img src={language} alt="" className="h-4" />
                  <span className="text-sm text-[#1C4481]">Experience</span>
                </div>
                <input
                  disabled
                  type="text"
                  value={skill.experience}
                  className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
                />
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="flex flex-col gap-1">
        <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
          <span>Projects</span>
        </div>
        <span className="text-sm text-[#8b8b8b]">
          Add projects to show your experience
        </span>
      </div>
      {projects?.map((project) => (
        <>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={marital} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Project Name</span>
              </div>
              <input
                disabled
                type="text"
                value={project?.project_name}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Role in Project</span>
              </div>
              <input
                disabled
                type="text"
                value={project?.role_in_project}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Project Description
                </span>
              </div>
              <input
                disabled
                type="text"
                value={project.project_description}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Project Duration</span>
              </div>
              <input
                disabled
                type="text"
                value={calculateDuration(
                  project?.project_start_date,
                  project?.project_end_date
                )}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
        </>
      ))}
      <div className="flex flex-col gap-1">
        <div className="bg-[#E7F0FF] text-[#1C4481] font-medium p-2 rounded-md w-full">
          <span>Certifications</span>
        </div>
        <span className="text-sm text-[#8b8b8b]">
          Show your skills via certification benchmark
        </span>
      </div>
      {certificates?.map((certificate) => (
        <>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={marital} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Certification Name
                </span>
              </div>
              <input
                disabled
                type="text"
                value={certificate?.cert_name}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">Role in Project</span>
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
                <span className="text-sm text-[#1C4481]">
                  Certificate Provider
                </span>
              </div>
              <input
                disabled
                type="text"
                value={certificate?.cert_provider}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Certification Completion ID
                </span>
              </div>
              <input
                disabled
                type="text"
                value={certificate?.cert_completion_id}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Certificate URL/Upload
                </span>
              </div>
              <input
                disabled
                type="text"
                value={certificate?.cert_url}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Certification Completion Year
                </span>
              </div>
              <input
                disabled
                type="text"
                value={certificate?.end_month + certificate?.end_year}
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-1/3">
              <div className="flex items-center gap-2">
                <img src={category} alt="" className="h-4" />
                <span className="text-sm text-[#1C4481]">
                  Certifications Validity
                </span>
              </div>
              <input
                disabled
                type="text"
                className="outline-none shadow-customShadow rounded-md h-9 px-4 w-5/6 text-md	 font-medium"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span>This is certificate does not expire</span>
            <input
              disabled
              type="checkbox"
              checked={!certificate?.can_expiry}
              className=" h-4 w-4"
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default Skills;
