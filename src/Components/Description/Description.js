import React from 'react';

import './Description.scss';
import DescriptionImg from './DescriptionImg/DescriptionImg';
import DescriptionTitle from './DescriptionTitle/DescriptionTitle';
import DescriptionSubtitle from './DescriptionSubtitle/DescriptionSubtitle';
import DescriptionAudio from './DescriptionAudio/DescriptionAudio';
import DescriptionText from './DescriptionText/DescriptionText';

export default function Description() {
    return (
        <div className="Description">
            <DescriptionImg />
            <DescriptionTitle />
            <DescriptionSubtitle />
            <DescriptionAudio />
            <DescriptionText />
        </div>
    )
}
