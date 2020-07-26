import React from 'react';

import './QuestionImg.scss';

export default function QuestionImg(props) {
    return (
        <img className='QuestionImg' width="200px" height="150px" src={props.isAnswerCanPicked ? "https://svgsilh.com/svg_v2/1363011.svg" : props.image} alt="bird" />
    )
}
