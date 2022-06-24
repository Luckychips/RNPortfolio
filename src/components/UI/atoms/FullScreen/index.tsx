import React, {Fragment} from 'react';
import * as S from './styles';

interface FullScreenProps extends StyledComponentProps {
  hasNotch?: boolean;
}

const FullScreen = ({children, hasNotch = true}: FullScreenProps) => {
  return hasNotch ? (
    <Fragment>
      <S.NotchHead />
      <S.NotchBody>
        <S.NotchContent>{children}</S.NotchContent>
      </S.NotchBody>
    </Fragment>
  ) : (
    <S.NotNotchContainer>{children}</S.NotNotchContainer>
  );
};

export default FullScreen;
