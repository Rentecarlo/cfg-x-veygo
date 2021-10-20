import React from 'react';
import  Card from '../../atoms/Card/';
import { CardContainer, ThreeSectionCardContainer } from './assets/styles';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

type ThreeSectionCardProps = {
  title: string;
  icon: string;
  tag?: boolean;
  tagText?: string;
  tagIcon?: string;
  fullWidthButton?: boolean;
  buttonText?: string;
  buttonId: string;
  buttonAction?: () => void;
  children: React.ReactElement;
  headerAction?: () => void;
  headerActionText?: string;
  headerButtonId?: string;
  borderlessHeader?: boolean;
  paddingBottom?: number;
};

const ThreeSectionCard: React.FC<ThreeSectionCardProps> = ({
  title,
  icon,
  tag,
  tagText,
  tagIcon,
  buttonText,
  buttonId,
  buttonAction,
  fullWidthButton,
  children,
  headerAction,
  headerActionText,
  headerButtonId,
  borderlessHeader,
  paddingBottom,
}) => {
  return (
    <CardContainer>
      <Card>
        <ThreeSectionCardContainer>
          <CardHeader
            icon={icon}
            title={title}
            tag={tag}
            tagText={tagText}
            tagIcon={tagIcon}
            buttonId={headerButtonId}
            onClick={headerAction}
            actionText={headerActionText}
            borderless={borderlessHeader}
            paddingBottom={paddingBottom}
          />
          <CardContent>{children}</CardContent>
          <CardFooter
            fullWidthButton={fullWidthButton}
            buttonId={buttonId}
            buttonText={buttonText}
            buttonAction={buttonAction}
          />
        </ThreeSectionCardContainer>
      </Card>
    </CardContainer>
  );
};

export default ThreeSectionCard;
