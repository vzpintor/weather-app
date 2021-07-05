import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Thermometer(props: SvgProps) {
  return (
    <Svg viewBox="0 0 63.501 63.501" {...props}>
      <Path d="M27.35 63.501c-.335 0-.674-.011-1.014-.033-4.822-.316-9.095-2.872-11.725-7.012-2.76-4.344-3.066-9.814-1.179-14.63 1.241-3.167 3.489-5.385 6.489-6.753V2.5c0-1.378.695-2.5 2.074-2.5h10c1.379 0 2.926 1.122 2.926 2.5v33.09c6 3.036 7.233 8.742 7.233 12.848 0 4.039-1.583 7.812-4.263 10.625-2.726 2.862-6.539 4.438-10.541 4.438zM22.921 3v33.073c0 .625-.601 1.185-1.185 1.404-2.701 1.013-4.559 2.743-5.617 5.444-1.54 3.929-1.17 8.387 1.078 11.927 2.111 3.323 5.505 5.374 9.36 5.626.276.018.536.027.807.027 3.174 0 6.1-1.246 8.255-3.507 2.146-2.253 3.325-5.292 3.325-8.556 0-5.571-1.728-8.697-6.275-10.452-.578-.223-.748-.78-.748-1.4V3h-9zM13.043 8.126a1.992 1.992 0 113.983 0 1.992 1.992 0 01-3.983 0zM13.043 14.767a1.99 1.99 0 113.984 0 1.992 1.992 0 01-3.984 0z" />
      <Path d="M13.043 21.408a1.992 1.992 0 113.985-.001 1.992 1.992 0 01-3.985.001zM13.043 28.049a1.99 1.99 0 113.984 0 1.992 1.992 0 01-3.984 0zM29.921 40.98V8c0-.552-.875-1-1.426-1h-3c-.552 0-.574.448-.574 1v32.98c-4 1.074-5.597 4.077-5.715 7.672-.126 3.843 2.02 7.38 5.688 8.534 6.194 1.95 11.207-2.424 11.207-8.08 0-3.795-2.18-7.007-6.18-8.126zM44.487 26.989c-2.436 0-4.161-.622-5.276-1.903-1.078-1.239-1.462-3.023-1.143-5.301.622-4.448 5.143-9.218 5.335-9.418a1.497 1.497 0 012.145-.023c.527.527 5.151 5.27 5.644 9.474.261 2.223-.167 3.981-1.271 5.222-1.15 1.293-2.979 1.949-5.434 1.949zm.03-13.335c-1.346 1.666-3.169 4.338-3.478 6.547-.194 1.38-.046 2.361.436 2.916.503.579 1.517.872 3.012.872 1.561 0 2.636-.318 3.192-.943.511-.574.69-1.542.532-2.879-.244-2.086-2.236-4.814-3.694-6.513z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(Thermometer);
export default MemoSvgComponent;
