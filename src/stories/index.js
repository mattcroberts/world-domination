import configureStore from '../store';
import GameBoard from '../components/Gameboard';
import map from '../maps/out.json';
import Nation from '../components/nation';
import React from 'react';

import { Layer, Stage } from 'react-konva';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

const UK = map.childs[2].childs
    .filter(child => child.name === 'path')
    .find(path => path.attrs.d.startsWith('M39'));
const nation = {
    data: UK.attrs.d,
    scaleX: 4,
    scaleY: 4
};
storiesOf('Nation', module)
    .addDecorator(story => (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>{story()}</Layer>
        </Stage>
    ))
    .add('UK', () => <Nation {...nation} />);

storiesOf('GameBoard', module)
    .addDecorator(story => (
        <Provider store={configureStore()}>{story()}</Provider>
    ))
    .add('basic', () => <GameBoard />);
