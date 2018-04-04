import React from 'react';
import './InfoPanel.css';

export default ({ currentPlayer, ruler, attackTargets, selectedNation }) => (
    <div className="InfoPanel">
        <dl>
            <dt>Current Player</dt>
            <dd data-qaId="playerName">{currentPlayer.name}</dd>
            <dt>Ruler</dt>
            <dd>{ruler ? ruler.name : 'Neutral'}</dd>

            <dt>Name</dt>
            <dd>
                {selectedNation
                    ? `${selectedNation.name} (${selectedNation.id})`
                    : 'N/A'}
            </dd>
            <dt>Borders</dt>
            <dd>{selectedNation ? selectedNation.borders.join(',') : ''}</dd>

            <dt>Troops</dt>
            <dd>{selectedNation ? selectedNation.troops : ''}</dd>

            <dt>Targets (Attack)</dt>
            <dd>{attackTargets.join(',')}</dd>
        </dl>
    </div>
);
