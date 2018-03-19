import React from 'react';

import './Controls.css';

export default ({
    currentPlayerId,
    onEndTurnClick,
    onChooseStartNationClick,
    onAttackClick,
    controlEnabled
}) => (
    <div className="Controls">
        <span>Current Player: {currentPlayerId}</span>
        <button onClick={onEndTurnClick}>End turn</button>
        <button onClick={onChooseStartNationClick}>Choose Home Nation</button>

        <button disabled={!controlEnabled.attack} onClick={onAttackClick}>
            Attack
        </button>
    </div>
);
