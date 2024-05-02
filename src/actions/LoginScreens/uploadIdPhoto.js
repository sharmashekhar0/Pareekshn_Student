import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";
import axios from "axios";

const uploadIdPhoto = async (data) => {
	try {
		const response = await axios.post(
			`${PUBLIC_REST_API_ENDPOINT}/amsapi/student/uploadbase64Idcard`,
			data,
			{
				headers: {
					Authorization: `Bearer ${BEARER_TOKEN}`,
				},
			}
		);
		console.log("Upload id photo response :: ", response);
	} catch (error) {
		console.log("Error while uploading id photo :: ", error);
	}
};

export default uploadIdPhoto;
