import React from 'react';

import './DescriptionSubtitle.scss';

export default function DescriptionSubtitle(props) {
    return (
        <div className="DescriptionSubtitle">
            {props.species}
        </div>
    )
}
