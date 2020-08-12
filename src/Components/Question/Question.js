import React from "react";

import "./Question.scss";
import QuestionImg from "./QuestionImg/QuestionImg";
import QuestionTitle from "./QuestionTitle/QuestionTitle";
import CustomAudioPlayer from "../CustomAudioPlayer";

export default function Question(props) {
    return (
        <div className="Question">
            <QuestionImg isAnswerCanPicked={props.isAnswerCanPicked} image={props.questionData.image} />
            <div>
                <QuestionTitle isAnswerCanPicked={props.isAnswerCanPicked} name={props.questionData.name} />
                <CustomAudioPlayer
                    customClassName='QuestionAudio'
                    audio={props.questionData.audio}
                    isQuestionAudioPlay={props.isQuestionAudioPlay}
                    playQuestionAudioPlayer={props.playQuestionAudioPlayer}
                    pauseQuestionAudioPlayer={props.pauseQuestionAudioPlayer}
                />
            </div>
        </div>
    );
}
