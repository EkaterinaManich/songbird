import React from 'react';

import './Description.scss';
import DescriptionImg from './DescriptionImg/DescriptionImg';
import DescriptionTitle from './DescriptionTitle/DescriptionTitle';
import DescriptionSubtitle from './DescriptionSubtitle/DescriptionSubtitle';
import DescriptionAudio from './DescriptionAudio/DescriptionAudio';
import DescriptionText from './DescriptionText/DescriptionText';

export default function Description(props) {
    return (
        <div className="Description">
            {props.description.isBirdPicked ? (
                <>
                    <DescriptionImg image={props.description.bird.image} />
                    <DescriptionTitle name={props.description.bird.name} />
                    <DescriptionSubtitle species={props.description.bird.species} />
                    <DescriptionAudio audio={props.description.bird.audio} />
                    <DescriptionText text={props.description.bird.description} />
                </>) : (
                    props.description.placeholerText
                )
            }
        </div>
    )
}
