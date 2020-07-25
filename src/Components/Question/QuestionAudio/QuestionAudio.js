import React from 'react';

import './QuestionAudio.scss';

export default function QuestionAudio(props) {
    return (
        <audio className="QuestionAudio" src={props.audio} controls />
    )
}
