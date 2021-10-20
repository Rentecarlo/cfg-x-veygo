import { PillButton } from '../../atoms/PillButton/PillButton';
import React from 'react';
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderIcon,
  HeaderTitle,
  HeaderTag,
  HeaderTagContainer,
  HeaderTagIcon,
  HeaderButtonContainer,
} from './assets/styles';

type CardHeaderProps = {
  title: string;
  icon: string;
  borderless?: boolean;
  paddingBottom?: number;
  tag?: boolean;
  tagText?: string;
  tagIcon?: string;
  onClick?: () => void;
  actionText?: string;
  buttonId?: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  icon,
  tag,
  tagText,
  tagIcon,
  onClick,
  actionText,
  borderless = false,
  paddingBottom,
  buttonId,
}) => {
  return (
    <HeaderContainer borderless={borderless} paddingBottom={paddingBottom}>
      <HeaderIconContainer>
        <HeaderIcon src={icon} />
      </HeaderIconContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {tag && !onClick && (
        <HeaderTagContainer>
          <HeaderTagIcon src={tagIcon} />
          <HeaderTag>{tagText}</HeaderTag>
        </HeaderTagContainer>
      )}
      {onClick && (
        <HeaderButtonContainer>
          <PillButton id={buttonId} onClick={onClick}>
            {actionText}
          </PillButton>
        </HeaderButtonContainer>
      )}
    </HeaderContainer>
  );
};

export default CardHeader;
