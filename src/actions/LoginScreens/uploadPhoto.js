import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";
import axios from "axios";

const uploadPhoto = async (data) => {
	try {
		const response = await axios.post(
			`${PUBLIC_REST_API_ENDPOINT}/amsapi/student/uploadbase64`,
			data,
			{
				headers: {
					Authorization: `Bearer ${BEARER_TOKEN}`,
				},
			}
		);
		console.log("Upload photo response :: ", response);
	} catch (error) {
		console.log("Error while uploading photo :: ", error);
		throw error;
	}
};

export default uploadPhoto;
