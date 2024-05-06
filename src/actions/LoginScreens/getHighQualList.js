import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";

const getHighQualList = async () => {
	try {
		const response = await axios.post(
			`${PUBLIC_REST_API_ENDPOINT}/amsapi/getHighQualList`,
			{},
			{
				headers: {
					Authorization: `Bearer ${BEARER_TOKEN}`,
				},
			}
		);
		console.log("Highest Qualification response :: ", response);
		return response;
	} catch (error) {
		console.log("Error while getting highest qualification :: ", error);
	}
};

export default getHighQualList;
