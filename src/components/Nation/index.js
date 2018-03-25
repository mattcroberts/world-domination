import React from 'react';
import { Path } from 'react-konva';

const Nation = ({
    map,
    scaleX,
    scaleY,
    selected: isSelected,
    fillColor = 'white',
    onNationClick
}) => {
    return (
        <Path
            data={map}
            fill={fillColor}
            stroke="black"
            strokeWidth={isSelected ? 0.5 : 0.1}
            scaleX={scaleX}
            scaleY={scaleY}
            onClick={onNationClick}
        />
    );
};

export default Nation;
