import React from 'react';

import { CardContentContainer } from './assets/styles';

type CardContentProps = {
  children: React.ReactNode;
};

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <CardContentContainer>{children}</CardContentContainer>;
};

export default CardContent;
