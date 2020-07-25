import React from 'react';

import './DescriptionTitle.scss';

export default function DescriptionTitle(props) {
    return (
        <div className="DescriptionTitle">
            {props.name}
        </div>
    )
}
