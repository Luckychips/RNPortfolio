import React from 'react';
import Lottie from 'lottie-react-native';
import {FullScreen} from '@components/atoms';
import {lotties} from '@assets/lottie';

const AnimatedLottie = () => {
  return (
    <FullScreen hasNotch={false}>
      <Lottie source={lotties.purchase} autoPlay loop />
    </FullScreen>
  );
};

export default AnimatedLottie;
