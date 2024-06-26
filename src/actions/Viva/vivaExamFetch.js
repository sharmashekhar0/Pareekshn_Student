import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";
import axios from "axios";

const vivaExamFetch = async (data) => {
  try {
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/amsapi/question/viva`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Viva Exam Fetch response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while Viva Exam Fetch in :: ", error);
    throw error;
  }
};

export default vivaExamFetch;
