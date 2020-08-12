import React, {useRef} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './CustomAudioPlayer.scss';

export default function CustomAudioPlayer(props) {

    const playIcon = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
        </svg>
    )

    const pauseIcon = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
        </svg>
    )

    const refAudio = useRef(null);

    if(props.isQuestionAudioPlay === false && refAudio !== null) {
        refAudio.current.audio.current.pause();
    }

    return (
        <AudioPlayer
            className={`CustomAudioPlayer ${props.customClassName}`}
            autoPlayAfterSrcChange={false}
            ref={refAudio}
            src={props.audio}
            customAdditionalControls={[]}
            customIcons={{
                play: playIcon,
                pause: pauseIcon
            }}
            onPlay={props.playQuestionAudioPlayer}
            onPause={props.pauseQuestionAudioPlayer}
        />
    )
}
