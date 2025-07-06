// components/svgImageComponents/Bubble.tsx
import React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';

const Bubble = () => (
  <Svg width="112" height="65" viewBox="0 0 112 65" fill="none">
    <Defs>
      {/* No need to define filters unless you really want to replicate the exact web blur */}
    </Defs>
    <G>
      <Path
        d="M5.01229 43.9248C2.31571 33.3548 8.6984 22.6001 19.2684 19.9035L83.0642 3.6282C93.6343 0.93162 104.389 7.31432 107.086 17.8843C109.782 28.4544 103.4 39.2089 92.8304 41.9054C86.8882 43.4214 80.5759 45.0318 75.5134 46.3233C72.6906 47.0434 72.2693 51.2217 72.3967 54.5178C72.4592 56.1356 70.6471 57.3561 69.2547 56.5297L59.6847 50.8501C59.316 50.6313 58.8754 50.5679 58.4599 50.6739L29.0336 58.181C18.4636 60.8776 7.70887 54.4949 5.01229 43.9248Z"
        fill="#5D82E6"
      />
    </G>
  </Svg>
);

export default Bubble;
