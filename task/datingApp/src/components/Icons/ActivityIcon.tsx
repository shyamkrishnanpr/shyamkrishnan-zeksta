import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath,SvgProps } from "react-native-svg"
const ActivityIcon = (props: SvgProps) => (
  <Svg  fill="none" {...props}>
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={21}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <Path
          fill="#000"
          d="M11.75 10c0 .691-.559 1.25-1.25 1.25S9.25 10.691 9.25 10s.559-1.25 1.25-1.25 1.25.559 1.25 1.25ZM.5 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Zm12.7 1.98 2.167-5.636a.93.93 0 0 0-1.21-1.211L8.52 7.3a1.231 1.231 0 0 0-.72.719l-2.167 5.636a.93.93 0 0 0 1.21 1.211L12.48 12.7c.332-.125.594-.386.72-.719Z"
        />
      </Mask>
      <G mask="url(#b)">
        <Path fill="#D4D6DD" d="M.5-.001h20v20H.5z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h20v20H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ActivityIcon
