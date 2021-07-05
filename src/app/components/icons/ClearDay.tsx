import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ClearDay(props: SvgProps) {
  return (
    <Svg viewBox="0 0 63 63" {...props}>
      <Path d="M47.405 32.471a1.501 1.501 0 01-1.061-2.561l5.457-5.457a1.501 1.501 0 012.122 2.122l-5.457 5.457a1.5 1.5 0 01-1.061.439zM14.665 32.471a1.5 1.5 0 01-1.061-.439l-5.457-5.457a1.5 1.5 0 112.121-2.122l5.457 5.457a1.5 1.5 0 01-1.06 2.561zM61.5 46.402h-5a1.5 1.5 0 110-3h5a1.5 1.5 0 110 3zM7.5 46.402h-6a1.5 1.5 0 110-3h6a1.5 1.5 0 110 3zM31.426 26.902a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 113 0v10a1.5 1.5 0 01-1.5 1.5z" />
      <Path d="M49.483 48.901a1.5 1.5 0 01-1.5-1.5c0-9.378-7.63-17.008-17.009-17.008s-17.008 7.63-17.008 17.008a1.5 1.5 0 01-3 0c0-11.032 8.975-20.008 20.008-20.008 11.034 0 20.009 8.976 20.009 20.008a1.5 1.5 0 01-1.5 1.5z" />
      <Path d="M44.723 49.098a1.5 1.5 0 01-1.5-1.5 6.566 6.566 0 00-6.558-6.559 6.567 6.567 0 00-6.56 6.559 1.5 1.5 0 01-3 0c0-5.271 4.288-9.559 9.56-9.559 5.27 0 9.558 4.288 9.558 9.559a1.5 1.5 0 01-1.5 1.5z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(ClearDay);
export default MemoSvgComponent;