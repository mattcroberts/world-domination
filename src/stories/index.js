import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import GameBoard from '../GameBoard/index';
import configureStore from '../store';

storiesOf('GameBoard', module)
    .addDecorator(story => (
        <Provider store={configureStore()}>{story()}</Provider>
    ))
    .add('basic', () => <GameBoard />);
