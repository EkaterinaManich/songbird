import React from "react";

import "./Question.scss";
import QuestionImg from "./QuestionImg/QuestionImg";
import QuestionTitle from "./QuestionTitle/QuestionTitle";
import QuestionAudio from "./QuestionAudio/QuestionAudio";

export default function Question(props) {
    return (
        <div className="Question">
            <QuestionImg isAnswerCanPicked={props.isAnswerCanPicked} image={props.questionData.image} />
            <div>
                <QuestionTitle isAnswerCanPicked={props.isAnswerCanPicked} name={props.questionData.name} />
                <QuestionAudio audio={props.questionData.audio} />
            </div>
        </div>
    );
}
