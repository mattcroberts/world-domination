import React from 'react';

import './App.css';

import GameboardContainer from './containers/Gameboard';
import ControlsContainer from './containers/Controls';
import InfoPanelContainer from './containers/InfoPanel';
import Dialog from './components/Dialog';

const App = () => (
    <React.Fragment>
        <ControlsContainer />
        <div className="App">
            <GameboardContainer />
            <InfoPanelContainer />
            <Dialog />
        </div>
    </React.Fragment>
);

export default App;
