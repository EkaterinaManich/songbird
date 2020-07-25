import React from 'react';

import './DescriptionAudio.scss';

export default function DescriptionAudio(props) {
    return (
        <audio className="DescriptionAudio" src={props.audio} controls></audio>
    )
}
