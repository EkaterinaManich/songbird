import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import successAudio from '../../assets/audio/success-notification.wav';
import failedAudio from '../../assets/audio/failed-notification.wav';
import './Answers.scss';

export default function Answers(props) {

    const successNotification = new Audio(successAudio);
    const failedNotification = new Audio(failedAudio);

    return (
            <ListGroup className="Answers" as="ul">
                {props.birdsData.map(item => {
                    return (
                        <ListGroup.Item className="answers-item"
                            as="li"
                            key={item.id}
                            onClick={() => {
                                if (props.isAnswerCanPicked) {
                                    async function pickAnswer() {
                                        await props.pickBird(item);
                                        await props.changeAnswerColorState(item);
                                        if (props.defineIsAnswerPickedCorrect()) {
                                            await props.endLevelWithScore(props.defineScorePoints());
                                            if(props.isQuestionAudioPlay) {
                                                props.pauseQuestionAudioPlayer();
                                            }
                                            successNotification.play();
                                        } else {
                                            failedNotification.play();
                                        }
                                    }
                                    pickAnswer();
                                }
                            }}
                        >
                            <span className={`bg-${item.answerColorState} answer-circle`}></span>
                            {item.name}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
    )
}
