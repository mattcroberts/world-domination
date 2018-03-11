import React from 'react';

import './Controls.css';

export default ({
    currentPlayerId,
    onEndTurnClick,
    onChooseStartNationClick,
    attackTargets,
    invasionTargets
}) => (
    <div className="Controls">
        <span>Current Player: {currentPlayerId}</span>
        <button onClick={onEndTurnClick}>End turn</button>
        <button onClick={onChooseStartNationClick}>Choose Home Nation</button>

        <span>
            <button onClick={() => undefined}>Attack</button>
            <select>
                {attackTargets.map((target, i) => (
                    <option key={i.toString()}>{target}</option>
                ))}
            </select>
        </span>

        <span>
            <button onClick={() => undefined}>Invade</button>
            <select>
                {invasionTargets.map((target, i) => (
                    <option key={i.toString()}>{target}</option>
                ))}
            </select>
        </span>
        <button onClick={() => undefined}>Invade</button>
    </div>
);
