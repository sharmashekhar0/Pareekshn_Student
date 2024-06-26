import React, { useState, useEffect, memo } from "react";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import ImageQuestion from "./ImageQuestion";
import vivaQuestionIndex from "../../actions/Viva/vivaQuestionIndex";

const QuestionSection = memo(({ question }) => {
	console.log(question);

<<<<<<< HEAD
	let media = null;
	const mediaType = question?.media_type;
	if (mediaType === 1) {
		media = null;
	} else if (mediaType === 2) {
		media = (
			<img
				src={question?.media}
				alt={question?.question}
				className="h-2/3 max-w-full object-cover"
			/>
		);
	} else if (mediaType === 3) {
		media = (
			<audio controls>
				<source src={question?.media} type="audio/mpeg" />
			</audio>
		);
	} else if (mediaType === 4) {
		media = (
			<video controls className="h-full max-w-full p-3">
				<source src={question?.media}></source>
			</video>
		);
	}
=======
  const getVivaQuestion = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("ps_loguser"));
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
>>>>>>> 1c93ce158c3020af26f11b1288963ce0442b803e

	return (
		<div className="min-h-96 mb-8 flex flex-col gap-4">
			<span className="text-justify font-semibold">
				Q. {question?.question}
			</span>
			{media && (
				<div className="h-80 border border-black rounded-md flex items-center justify-center">
					{media}
				</div>
			)}
		</div>
	);
});

export default QuestionSection;
