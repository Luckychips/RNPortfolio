import React from 'react';
import Lottie from 'lottie-react-native';
import {FullScreen, InlineContainer, Button} from '@components/atoms';
import {lotties} from '@assets/lottie';
import * as S from './styles';

const ResizeLottie = () => {
  const moveToStackOne = () => {
    console.log('moveToStackOne');
  };

  const moveToStackTwo = () => {
    console.log('moveToStackTwo');
  };

  return (
    <FullScreen hasNotch={false}>
      <S.Centered>
        <Lottie source={lotties.swing} autoPlay loop style={{width: 200}} />
        <InlineContainer>
          <Button text="one" onPress={moveToStackOne} buttonColor="#ff5f5f" />
          <Button text="two" onPress={moveToStackTwo} buttonColor="#ff3769" />
        </InlineContainer>
      </S.Centered>
    </FullScreen>
  );
};

export default ResizeLottie;
