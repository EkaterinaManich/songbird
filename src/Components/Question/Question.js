import React from 'react';

import './Question.scss';
import QuestionImg from './QuestionImg/QuestionImg';
import QuestionTitle from './QuestionTitle/QuestionTitle';
import QuestionAudio from './QuestionAudio/QuestionAudio';

export default function Question() {
    return (
        <div className="Question">
            <QuestionImg />
            <QuestionTitle />
            <QuestionAudio />
        </div>
    )
}
