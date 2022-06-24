import React from 'react';
import Lottie from 'lottie-react-native';
import {FullScreen} from '@components/atoms';
import {lotties} from '@assets/lottie';
import * as S from './styles';

const ResizeLottie = () => {
  return (
    <FullScreen hasNotch={false}>
      <S.Centered>
        <Lottie source={lotties.swing} autoPlay loop style={{width: 200}} />
      </S.Centered>
    </FullScreen>
  );
};

export default ResizeLottie;
