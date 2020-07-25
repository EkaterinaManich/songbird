import React from 'react';

import './Score.scss';

export default function Score(props) {
    return (
        <div className="Score">
            Score: {props.score}
            <div onClick={props.scoreHandler}>
                Add one
            </div>
        </div>
    )
}
