import React from 'react';
import Lottie from 'lottie-react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {FullScreen, InlineContainer, Button} from '@components/atoms';
import {lotties} from '@assets/lottie';
import * as S from './styles';

const ResizeLottie = () => {
  const navigation = useNavigation();

  const moveToStackOne = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ChartList',
      }),
    );
  };

  const moveToStackTwo = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TagList',
      }),
    );
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
