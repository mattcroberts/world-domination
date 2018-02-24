import React from 'react';
import { Stage, Layer } from 'react-konva';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import GameBoard from '../GameBoard';
import Nation from '../nation';
import configureStore from '../store';

import map from '../../maps/out.json';

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
