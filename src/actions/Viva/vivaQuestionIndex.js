import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constants";
import axios from "axios";

const vivaQuestionIndex = async (data) => {
  try {
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/amsapi/question/vivaquestionByNo`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Viva Question Index response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while Viva Question Index in :: ", error);
    throw error;
  }
};

export default vivaQuestionIndex;
