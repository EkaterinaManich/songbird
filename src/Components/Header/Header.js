import React from 'react';

import './Header.scss';
import Logo from './Logo/Logo';
import Score from './Score/Score';
import ListOfQuestions from './ListOfQuestions/ListOfQuestions';

function Header() {
    return (
        <div className="Header">
            <Logo />
            <Score />
            <ListOfQuestions />
        </div>
    )
}

export default Header;