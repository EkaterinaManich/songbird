import React from 'react';

import './QuestionTitle.scss';

export default function QuestionTitle(props) {
    return (
        <div className='QuestionTitle'>
            {props.isAnswerCanPicked ? '**********' : props.name}
        </div>
    )
}
