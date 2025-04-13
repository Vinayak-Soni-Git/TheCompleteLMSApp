import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const TicketMask = ({width, height}) => (
    <Svg width={width} height={height} viewBox='0 0 350 100'>
        <Path d='M0,0 H50 A10,10 0 0 1 50,100 H0 Z M50,0 H340 Q350,50 340,100 H50 Z' fill='black'/>
    </Svg>
);
