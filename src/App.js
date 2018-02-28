import React from 'react';
import GameboardContainer from './containers/Gameboard';
import ControlsContainer from './containers/Controls';
import css from './App.css';

const App = () => (
    <React.Fragment>
        <ControlsContainer />
        <GameboardContainer />
    </React.Fragment>
);

export default App;
