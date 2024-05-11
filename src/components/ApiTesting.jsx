import React from "react";
import changePassword from "../actions/Dashboard/changePassword";
import profilePercentage from "../actions/Dashboard/profilePercentage";
import updatePersonal from "../actions/Dashboard/updatePersonal";
import updateMobile from "../actions/Dashboard/updateMobile";
import studentLanguages from "../actions/Dashboard/studentLanguages";
import addStudentLanguage from "../actions/Dashboard/addStudentLanguage";
import getLanguageList from "../actions/MasterDataApi/getLanguageList";
import getCategories from "../actions/MasterDataApi/getCategories";
import getIndustry from "../actions/MasterDataApi/getIndustry";
import getDepartments from "../actions/MasterDataApi/getDepartments";
import getJobRoleCategory from "../actions/MasterDataApi/getJobRoleCategory";
import getJobRole from "../actions/MasterDataApi/getJobRole";
import getKeySkills from "../actions/MasterDataApi/getKeySkills";
import getSoftwares from "../actions/MasterDataApi/getSoftwares";
import getBoards from "../actions/MasterDataApi/getBoards";
import getInstitutes from "../actions/MasterDataApi/getInstitutes";
import getCourses from "../actions/MasterDataApi/getCourses";
import getSpecialization from "../actions/MasterDataApi/getSpecialization";
import getPlatforms from "../actions/MasterDataApi/getPlatforms";
import getCorporateSize from "../actions/MasterDataApi/getCorporateSize";
import getCorporateStage from "../actions/MasterDataApi/getCorporateStage";
import getDifficultyLevel from "../actions/MasterDataApi/getDifficultyLevel";
import getSectors from "../actions/MasterDataApi/getSectors";
import getPhotoSlider from "../actions/MasterDataApi/getPhotoSlider";
import getExperienceRange from "../actions/MasterDataApi/getExperienceRange";
import getEmpTypes from "../actions/MasterDataApi/getEmpTypes";
import qpFetchFetch from "../actions/MasterDataApi/qpFetch";
import examlistQP from "../actions/MasterDataApi/examListQP";
import attemptedList from "../actions/MasterDataApi/attemptedList";
import getRandomMockExam from "../actions/MasterDataApi/getRandomMockExam";
import amsStatistics from "../actions/MasterDataApi/amsStatistics";
import hackthonStudentDashboardStatistics from "../actions/MasterDataApi/hackthonStudentDashboardStatistics";
import newHackathonList from "../actions/MasterDataApi/newHackathonList";
import enrolledHackathonList from "../actions/MasterDataApi/enrolledHackathonList";
import aymentPolicyDescription from "../actions/MasterDataApi/paymentPolicyDescription";
import applyPromo from "../actions/MasterDataApi/applyPromo";
import updatePayment from "../actions/MasterDataApi/updatePayment";
import fetchAllTransaction from "../actions/MasterDataApi/fetchAllTransaction";
import fetchRefundRequest from "../actions/MasterDataApi/fetchRefundRequest";
import vivaExamFetch from "../actions/Viva/vivaExamFetch";

function ApiTesting() {
  const apiTestingHandler = async () => {
    try {
      await getEmpTypes();
    } catch (error) {
      console.log("Error while testing api :: ", error);
    }
  };

  return (
    <div className="flex h-screen text-white text-3xl items-center justify-center bg-black">
      <button onClick={apiTestingHandler} className="bg-gray-900 h-40 w-60">
        Testing Page
      </button>
    </div>
  );
}

export default ApiTesting;
