import React from 'react';
import * as S from './styles';

export interface ButtonCssProps {
  buttonColor?: string;
  buttonTextColor?: string;
  buttonRadius?: string;
}

interface ButtonProps extends ButtonCssProps {
  text: string;
  onPress: () => void;
}

const Button = ({
  text,
  onPress,
  buttonColor = '#6f42c1',
  buttonTextColor = 'white',
  buttonRadius = '5px',
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      onPress={onPress}
      buttonColor={buttonColor}
      buttonRadius={buttonRadius}>
      <S.ButtonText buttonTextColor={buttonTextColor}>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
};

export default Button;
