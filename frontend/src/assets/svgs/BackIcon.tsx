import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props: any) => (
  <Svg
    width={48}
    height={50}
    viewBox="0 0 48 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_5_1328)">
      <Circle
        cx={24}
        cy={24}
        r={23}
        fill="white"
        stroke="#18191F"
        strokeWidth={2}
      />
      <Path
        d="M26.6667 32L18.6667 24L26.6667 16"
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
