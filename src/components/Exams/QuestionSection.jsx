import React, { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import ImageQuestion from "./ImageQuestion";
import vivaQuestionIndex from "../../actions/Viva/vivaQuestionIndex";

function QuestionSection() {
  const [vivaQuestion, setVivaQuestion] = useState({});
  const [errors, setErrors] = useState(null);

  const getVivaQuestion = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("User :: ", user);
      const data = {
        usercode: user.usercode,
        id_self_student: user.id_self_student,
        exam_id: 8582,
        student_id: 211158,
        index: 5,
        req_by: "web",
      };
      const response = await vivaQuestionIndex(data);
      console.log(" Viva question  response:", response);
      if (response?.data?.code === 1000)
        setVivaQuestion(response?.data?.question);
    } catch (error) {
      console.log("Error while getting data :: ", error);
      setErrors([error.message]);
    }
  };

  useEffect(() => {
    getVivaQuestion();
  });
  return (
    <div className="min-h-96 mb-8 flex flex-col gap-4">
      <span className="text-justify font-semibold">
        {" "}
        Q.{vivaQuestion.question}
      </span>
      <ImageQuestion />
    </div>
  );
}

export default QuestionSection;
