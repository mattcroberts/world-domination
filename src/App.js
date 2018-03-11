import React from 'react';

import './App.css';

import GameboardContainer from './containers/Gameboard';
import ControlsContainer from './containers/Controls';
import InfoPanelContainer from './containers/InfoPanel';

const App = () => (
    <React.Fragment>
        <ControlsContainer />
        <GameboardContainer />
        <InfoPanelContainer />
    </React.Fragment>
);

export default App;
