import React from 'react';

import './QuestionTitle.scss';

export default function QuestionTitle(props) {
    return (
        <div className='QuestionTitle'>
            {props.name}
        </div>
    )
}
