import React from 'react';

export default ({ currentPlayerId, onEndTurnClick, onChooseStartNationClick }) => (
    <div>
        <span>Current Player: {currentPlayerId}</span>
        <button onClick={onEndTurnClick}>End turn</button>
        <button onClick={onChooseStartNationClick}>Choose Home Nation</button>
    </div>
);
