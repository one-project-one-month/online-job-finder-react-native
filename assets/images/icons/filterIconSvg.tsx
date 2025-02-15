import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FilterIconSvg = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      stroke="#356899"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.024 11.191V4.365M18.524 14.235v6.826"
    />
    <Path
      stroke="#356899"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.583 9.453a2.551 2.551 0 0 0 2.542-2.56 2.551 2.551 0 0 0-2.542-2.56 2.551 2.551 0 0 0-2.541 2.56 2.551 2.551 0 0 0 2.541 2.56ZM8.067 21.666a2.55 2.55 0 0 0 2.541-2.559 2.551 2.551 0 0 0-2.541-2.56 2.551 2.551 0 0 0-2.542 2.56 2.55 2.55 0 0 0 2.542 2.56Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FilterIconSvg;
