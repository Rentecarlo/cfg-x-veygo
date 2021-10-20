import React from 'react';

import { CardContainer } from './assets/styles';

type CardProps = {
  children: React.ReactNode;
  padding?: string;
};

const Card: React.FC<CardProps> = ({ children, padding }) => (
  <CardContainer padding={padding}>{children}</CardContainer>
);

export default Card;
