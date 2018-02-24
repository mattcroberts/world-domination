import React from 'react';
import { Stage, Layer } from 'react-konva';

import Nation from '../nation';

const Gameboard = ({ nations, nationClick, scale }) => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            {Object.values(nations).map((nation, i) => {
                return (
                    <Nation
                        scaleX={scale}
                        scaleY={scale}
                        key={i.toString()}
                        onNationClick={() => nationClick({ id: i })}
                        {...nation}
                    />
                );
            })}
        </Layer>
    </Stage>
);

export default Gameboard;