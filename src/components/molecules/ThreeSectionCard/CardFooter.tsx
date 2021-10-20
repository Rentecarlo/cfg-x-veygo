import React from 'react';
import { PillButton } from '../../atoms/PillButton/PillButton';
import { CardFooterContainer } from './assets/styles';

type CardFooterProps = {
  fullWidthButton?: boolean;
  buttonText?: string;
  buttonId: string;
  buttonAction?: () => void;
  children?: React.ReactElement;
};

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  buttonText,
  buttonId,
  buttonAction,
  fullWidthButton,
}) => {
  return (
    <CardFooterContainer>
      {children}
      {fullWidthButton && (
        <PillButton id={buttonId} onClick={buttonAction} height={'48'}>
          {buttonText}
        </PillButton>
      )}
    </CardFooterContainer>
  );
};

export default CardFooter;
