import React from 'react';

export default ({ currentPlayerId, onEndTurnClick, onChooseStartNationClick, invasionTargets }) => (
    <div>
        <span>Current Player: {currentPlayerId}</span>
        <button onClick={onEndTurnClick}>End turn</button>
        <button onClick={onChooseStartNationClick}>Choose Home Nation</button>
        <button onClick={() => undefined}>Attack</button>

        <select>
            {invasionTargets.map((target, i) => <option key={i.toString()}>{target}</option>)}
        </select>
        <button onClick={() => undefined}>Invade</button>
    </div>
);
