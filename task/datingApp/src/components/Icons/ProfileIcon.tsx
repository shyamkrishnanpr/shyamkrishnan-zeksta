import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ProfileIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path fill="#D4D6DD" d="M-1.5-.001h19.999v20H-1.5z" />
  </Svg>
);
export default ProfileIcon;
