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
import logout from "../actions/LoginScreens/logout";
import login from "../actions/LoginScreens/login";
import getEmployments from "../actions/Dashboard/getEmployments";
import getEducations from "../actions/Dashboard/getEducations";

function ApiTesting() {
	const apiTestingHandler = async () => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			const data = {
				usercode: user.usercode,
				id_self_student: user.id_self_student,
			};
			await getEducations(data);
		} catch (error) {
			console.log("Error while testing api :: ", error);
		}
	};

	return (
		<div className="flex h-screen text-white text-3xl items-center justify-center bg-black">
			<button
				onClick={apiTestingHandler}
				className="bg-gray-900 h-40 w-60"
			>
				Testing Page
			</button>
		</div>
	);
}

export default ApiTesting;
