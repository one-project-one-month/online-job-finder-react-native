import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MessageIconSvg = (props: any) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      fill={props.focused ? "#356899" : "#CACBCE"}
      d="M18.351 3.25a5.478 5.478 0 0 1 5.483 5.47v8.56c0 3.022-2.46 5.47-5.483 5.47H7.649c-3.024 0-5.482-2.448-5.482-5.47V8.72A5.471 5.471 0 0 1 7.65 3.25H18.35Zm1.225 5.633a.824.824 0 0 0-.608.217L14.084 13a1.697 1.697 0 0 1-2.167 0L7.042 9.1a.824.824 0 0 0-1.083.076.828.828 0 0 0-.077 1.083l.142.141 4.929 3.846a3.405 3.405 0 0 0 2.112.736c.769 0 1.517-.26 2.123-.736l4.887-3.911.086-.087a.838.838 0 0 0-.012-1.083.911.911 0 0 0-.573-.282Z"
    />
  </Svg>
);
export default MessageIconSvg;
