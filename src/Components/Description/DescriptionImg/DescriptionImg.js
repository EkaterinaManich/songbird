import React from 'react';

import './DescriptionImg.scss';

export default function DescriptionImg(props) {
    return (
        <img className="DescriptionImg" width="200px" height="150px" src={props.image} alt="bird" />
    )
}
