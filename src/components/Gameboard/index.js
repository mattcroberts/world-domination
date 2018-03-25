import React from 'react';
import { Layer, Stage } from 'react-konva';

import Nation from '../Nation';

import './Gameboard.css';

const Gameboard = ({ nations, nationClick, outerHeight, outerWidth }) => {
    const scale = outerWidth / 237.823; // What is this magic number?!
    return (
        <Stage className="Gameboard" width={outerWidth} height={outerHeight}>
            <Layer>
                {Object.values(nations).map((nation, i) => {
                    return (
                        <Nation
                            key={i.toString()}
                            onNationClick={() => nationClick({ id: i })}
                            {...nation}
                            scaleX={scale}
                            scaleY={scale}
                        />
                    );
                })}
            </Layer>
        </Stage>
    );
};

export default Gameboard;
