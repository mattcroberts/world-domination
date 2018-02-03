import React from 'react';
import { Path } from 'react-konva';

export default ({ data, scaleX, scaleY }) => {
    //   console.log(scaleX, scaleY);
    return (
        <Path
            data={data}
            //   fill="#00D2FF"
            stroke="black"
            strokeWidth={0.1}
            scaleX={scaleX}
            scaleY={scaleY}
        />
    );
};
