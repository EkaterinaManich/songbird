import React from 'react';

import './Header.scss';
import Logo from './Logo/Logo';
import Score from './Score/Score';
import ListOfQuestions from './ListOfQuestions/ListOfQuestions';

function Header(props) {
    return (
        <div className="Header">
            <div className="wrapper-logo-and-score">
                <Logo />
                <Score score={props.score} />
            </div>
            <ListOfQuestions data={props.data} currentArrayWithBirds={props.currentArrayWithBirds} />
        </div>
    )
}

export default Header;