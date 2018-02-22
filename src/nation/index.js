import React from 'react';
import { Path } from 'react-konva';

const nation = ({ data, scaleX, scaleY, onNationClick }) => {
    return (
        <Path
            data={data}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={0.1}
            scaleX={scaleX}
            scaleY={scaleY}
            onClick={onNationClick}
        />
    );
};

export default nation;
