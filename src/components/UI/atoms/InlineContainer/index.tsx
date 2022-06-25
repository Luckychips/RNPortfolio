import React from 'react';
import * as S from './styles';

const InlineContainer = ({children}: StyledComponentProps) => {
  return <S.InLiner>{children}</S.InLiner>;
};

export default InlineContainer;
