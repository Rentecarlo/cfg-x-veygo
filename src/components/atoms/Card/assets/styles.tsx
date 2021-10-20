/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Styled from 'styled-components';

type CardContainerProps = {
  padding?: string;
};

export const CardContainer = Styled.div<CardContainerProps>`
  border-radius: 8px;
  background-color: ${({ theme }): string => theme.backgroundPrimary};
  box-shadow: ${(): string =>
    `0 0 10px 0 rgba(0,0,0,0.05), 0 1px 3px 0 rgba(0,0,0,0.08)`}};
  padding: ${({ padding }): string => padding || ''};
  font-family: arial;
  color: ${({ theme }): string => theme.textPrimary};
  font-size: 20px;
`;
