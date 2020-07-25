import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

// import Answer from './Answer/Answer';
import './Answers.scss';

export default function Answers(props) { 
    return (
        <>
        <ListGroup className="Answers" as="ul">
            {props.birdsData.map(item => {
                return (
                    <ListGroup.Item
                        as="li"
                        key={item.id}
                        onClick={() => {
                            props.changeAnswerColorState(item);
                            setTimeout(() => {
                                props.pickBird(item);
                            }, 0);
                        }}
                    >
                        <span className={`bg-${item.answerColorState} answer-circle`}></span>
                        {item.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
        </>
    )
}
