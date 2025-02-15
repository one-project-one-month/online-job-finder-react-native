import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SaveIconSvg = (props: any) => (
  <Svg width={25} height={27} fill="none" {...props}>
    <Path
      fill={props.focused ? "#356899" : "#CACBCE"}
      d="M17.25 20.998a.772.772 0 0 1-.498-.178l-4.313-3.653a3 3 0 0 0-3.878 0L4.248 20.82a.784.784 0 0 1-.806.117.74.74 0 0 1-.322-.264.69.69 0 0 1-.12-.39V3.858c0-.758.317-1.484.88-2.02A3.081 3.081 0 0 1 6 1h9c.795 0 1.558.302 2.12.838.563.535.88 1.261.88 2.019v16.427c0 .19-.079.371-.22.505a.77.77 0 0 1-.53.21Z"
    />
  </Svg>
);
export default SaveIconSvg;
