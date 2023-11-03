import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props: any) => (
  <Svg
    width={60}
    height={64}
    viewBox="0 0 60 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_63_1917)">
      <Circle
        cx={30}
        cy={30}
        r={29}
        transform="matrix(-1 0 0 1 60 0)"
        fill="#FFBD12"
        stroke="#18191F"
        strokeWidth={2}
      />
      <Path
        d="M17.1667 30H42.8334"
        stroke="#18191F"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.6667 38.1666L42.8334 30L34.6667 21.8333"
        stroke="#18191F"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
