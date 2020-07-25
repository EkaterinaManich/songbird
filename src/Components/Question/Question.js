import React from "react";

import "./Question.scss";
import QuestionImg from "./QuestionImg/QuestionImg";
import QuestionTitle from "./QuestionTitle/QuestionTitle";
import QuestionAudio from "./QuestionAudio/QuestionAudio";

export default function Question(props) {
    return (
        <div className="Question">
            <QuestionImg image={props.questionData.image} />
            <QuestionTitle name={props.questionData.name} />
            <QuestionAudio audio={props.questionData.audio} />
        </div>
    );
}
