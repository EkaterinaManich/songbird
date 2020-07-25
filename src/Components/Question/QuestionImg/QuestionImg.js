import React from 'react';

import './QuestionImg.scss';

export default function QuestionImg(props) {
    return (
        <img className='QuestionImg' width="200px" height="150px" src={props.image} alt="bird" />
    )
}
