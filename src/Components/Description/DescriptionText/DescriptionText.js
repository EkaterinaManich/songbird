import React from 'react';

import './DescriptionText.scss';

export default function DescriptionText(props) {
    return (
        <div className="DescriptionText">
            {props.text}
        </div>
    )
}
