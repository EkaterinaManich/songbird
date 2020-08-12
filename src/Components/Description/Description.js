import React from "react";

import "./Description.scss";
import DescriptionImg from "./DescriptionImg/DescriptionImg";
import DescriptionTitle from "./DescriptionTitle/DescriptionTitle";
import DescriptionSubtitle from "./DescriptionSubtitle/DescriptionSubtitle";
import CustomAudioPlayer from "../CustomAudioPlayer";
import DescriptionText from "./DescriptionText/DescriptionText";

export default function Description(props) {
  return (
    <div className="Description">
      {props.description.isBirdPicked ? (
        <>
          <div className="description-title-audio">
            <DescriptionImg image={props.description.bird.image} />
            <div>
              <DescriptionTitle name={props.description.bird.name} />
              <DescriptionSubtitle species={props.description.bird.species} />
              <CustomAudioPlayer customClassName='DescriptionAudio' audio={props.description.bird.audio} />
            </div>
          </div>
          <DescriptionText text={props.description.bird.description} />
        </>
      ) : (
        props.description.placeholerText
      )}
    </div>
  );
}
