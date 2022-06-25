import styled from '@emotion/native';
import {ButtonCssProps} from './index';

export const ButtonContainer = styled.Pressable<ButtonCssProps>`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${props => props.buttonColor};
  border-radius: ${props => props.buttonRadius};
`;

export const ButtonText = styled.Text<ButtonCssProps>`
  color: ${props => props.buttonTextColor};
  font-weight: bold;
`;
