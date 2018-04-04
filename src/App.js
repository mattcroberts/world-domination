import React from 'react';

import './App.css';

import GameboardContainer from './containers/Gameboard';
import ControlsContainer from './containers/Controls';
import InfoPanelContainer from './containers/InfoPanel';
import Dialog from './components/Dialog';

const App = () => (
    <React.Fragment>
        <div className="DialogContainer">
            <Dialog />
        </div>
        <ControlsContainer />
        <div className="App">
            <GameboardContainer />
            <InfoPanelContainer />
        </div>
    </React.Fragment>
);

export default App;
