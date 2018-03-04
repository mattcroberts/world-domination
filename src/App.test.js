import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

jest.mock('./containers/Gameboard', () => 'Gameboard');
jest.mock('./containers/Controls', () => 'Controls');
jest.mock('./containers/InfoPanel', () => 'InfoPanel');

it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(true).to.equal(true);
});
