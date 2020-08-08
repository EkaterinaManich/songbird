import React from 'react';

import './GameOver.scss';

export default function GameOver({ score, startGameFromBeginning, maxScore }) {
    return (
        <div className="GameOver">
            <div className="congratilation">Поздравляем!</div>
            <div className="game-result">Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</div>
            {score === maxScore ? <div>Игра закончена</div> : <button onClick={startGameFromBeginning} className="btn btn-success">Попробовать ещё раз!</button>}
        </div>
    )
}
