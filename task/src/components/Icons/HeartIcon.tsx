import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
const HeartIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Mask
      id="a"
      width={33}
      height={31}
      x={0}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Path
        fill="#006FFD"
        fillRule="evenodd"
        d="M.344 10.773c0-4.913 4.018-8.865 8.937-8.865 2.592 0 4.784 1.386 6.201 2.56.38.315.721.63 1.018.921.297-.292.638-.606 1.018-.92 1.417-1.175 3.61-2.561 6.2-2.561 4.92 0 8.938 3.952 8.938 8.865 0 1.842-.37 4.836-2.415 8.383-2.04 3.538-5.69 7.532-12.102 11.475l-.006.004a3.141 3.141 0 0 1-3.266 0l-.006-.004C8.448 26.688 4.799 22.694 2.759 19.156.715 15.61.344 12.616.344 10.773Zm17.533-1.787a1.719 1.719 0 0 1-2.753.002v-.002.002l.001.001-.002-.003-.018-.022a11.18 11.18 0 0 0-.45-.533c-.324-.361-.793-.84-1.366-1.316-1.196-.99-2.613-1.77-4.008-1.77-3.053 0-5.5 2.446-5.5 5.428 0 1.344.261 3.725 1.957 6.666 1.686 2.925 4.843 6.496 10.762 10.164 5.919-3.668 9.076-7.239 10.762-10.164 1.696-2.941 1.957-5.322 1.957-6.666 0-2.982-2.447-5.428-5.5-5.428-1.395 0-2.812.78-4.008 1.77a13.195 13.195 0 0 0-1.73 1.74l-.087.109-.017.022c0 .002-.002.002-.002.003l.001-.002Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#2F3036" d="M0 0h33v33H0z" />
    </G>
  </Svg>
);
export default HeartIcon;
