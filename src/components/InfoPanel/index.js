import React from 'react';
import './InfoPanel.css';

export default ({
    currentPlayer,
    ruler,
    invasionTargets,
    attackTargets,
    selectedNation
}) => (
    <div className="InfoPanel">
        <dl>
            <dt>Current Player</dt>
            <dd>{currentPlayer.name}</dd>
            <dt>Ruler</dt>
            <dd>{ruler ? ruler.name : 'Neutral'}</dd>

            <dt>NationId</dt>
            <dd>{selectedNation ? selectedNation.id : 'N/A'}</dd>
            <dt>Borders</dt>
            <dd>{selectedNation ? selectedNation.borders.join(',') : ''}</dd>

            <dt>Troops</dt>
            <dd>{selectedNation ? selectedNation.troops : ''}</dd>

            <dt>Targets (Attack/Invasion)</dt>
            <dd>
                {attackTargets.join(',')}/{invasionTargets.join(',')}
            </dd>
        </dl>
    </div>
);
