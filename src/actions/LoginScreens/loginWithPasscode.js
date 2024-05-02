import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";
import axios from "axios";

const loginWithPasscode = async (data) => {
	try {
		console.log("Login with passcode :: ", data);
		const queryString = Object.keys(data)
			.map(
				(key) =>
					`${encodeURIComponent(key)}=${encodeURIComponent(
						data[key]
					)}`
			)
			.join("&");
		const response = await axios.post(
			`${PUBLIC_REST_API_ENDPOINT}/amsapi/loginByCode?${queryString}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${BEARER_TOKEN}`,
				},
			}
		);
		console.log("Loggin With Passcode Response :: ", response);
	} catch (error) {
		console.log("Error while logging in with passcode :: ", error);
		throw error;
	}
};

export default loginWithPasscode;
