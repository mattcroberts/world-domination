import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

import map from '../../maps/out.json';
import Nation from '../nation';

const nations = map.childs[2].childs
    .filter(child => child.name === 'path')
    .map(child => ({
        data: child.attrs.d,
        scaleX: window.innerWidth / 237.823,
        scaleY: window.innerHeight / 189.585
    }));

export default () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Rect x={20} y={20} width={50} height={50} fill={'red'} />
            {nations.map(nation => <Nation {...nation} />)}
        </Layer>
    </Stage>
);
