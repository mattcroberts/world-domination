import React from 'react';
import { Path } from 'react-konva';

const nation = ({
    map,
    scaleX,
    scaleY,
    selected: isSelected,
    onNationClick
}) => {
    return (
        <Path
            data={map}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={isSelected ? 0.5 : 0.1}
            scaleX={scaleX}
            scaleY={scaleY}
            onClick={onNationClick}
        />
    );
};

export default nation;
