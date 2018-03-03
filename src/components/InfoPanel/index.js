import React from 'react';
import './InfoPanel.css';

export default ({ player }) => (
    <div className="InfoPanel">
        <dl>
            <dt>Player</dt>
            <dd>{player.name}</dd>
            <dt>Borders</dt>
            <dd></dd>
        </dl>
    </div>
)