import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const WifiSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.5 0H13a1 1 0 0 0 0 2h4c.552 0 1 .552 1 1.105v4a1 1 0 0 0 2 0v-5.5C20 .776 19.328 0 18.5 0Zm.5 12.105a1 1 0 0 0-1 1v4c0 .552-.448.895-1 .895h-4a1 1 0 0 0 0 2h5.5c.828 0 1.5-.567 1.5-1.395v-5.5a1 1 0 0 0-1-1ZM7 18H3c-.552 0-1-.343-1-.895v-4a1 1 0 1 0-2 0v5.5C0 19.433.672 20 1.5 20H7a1 1 0 0 0 0-2ZM1 8.105a1 1 0 0 0 1-1v-4C2 2.552 2.448 2 3 2h4a1 1 0 0 0 0-2H1.5C.672 0 0 .776 0 1.605v5.5a1 1 0 0 0 1 1Zm7.558 5.793.707.707a1 1 0 0 0 1.414 0l.707-.707a1.999 1.999 0 0 0-2.828 0Zm-2.829-2.829 1.415 1.414a4.005 4.005 0 0 1 5.656 0l1.415-1.414a6.001 6.001 0 0 0-8.486 0Zm9.9-1.414a8 8 0 0 0-11.314 0l-.663-.663a1.01 1.01 0 0 1 .087-1.501 10.005 10.005 0 0 1 12.466 0 1.01 1.01 0 0 1 .087 1.501l-.663.663Z"
    />
  </Svg>
);
