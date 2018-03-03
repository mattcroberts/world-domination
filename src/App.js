import React from 'react';
import GameboardContainer from './containers/Gameboard';
import ControlsContainer from './containers/Controls';
import InfoPanelContainer from './containers/InfoPanel';
import css from './App.css';

const App = () => (
    <React.Fragment>
        <ControlsContainer />
        <GameboardContainer />
        <InfoPanelContainer />
    </React.Fragment>
);

export default App;
