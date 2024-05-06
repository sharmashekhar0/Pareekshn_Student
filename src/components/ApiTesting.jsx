import React from "react";
import getStudentProfile from "../actions/Dashboard/getStudentProfile";
import updateMobile from "../actions/Dashboard/updateMobile";
import updateWeb from "../actions/Dashboard/updateWeb";

function ApiTesting() {
	const apiTestingHandler = async () => {
		try {
			const data = {
				usercode: "",
				id_self_student: "",
				name: "",
				dob: "",
				gender: "",
				id_city: "",
				id_state: "",
				id_hq: "",
			};
			await updateMobile(data);
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
