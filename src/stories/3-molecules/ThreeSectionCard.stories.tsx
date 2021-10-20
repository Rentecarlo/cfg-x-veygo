import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { GenericTheme } from '../../utils';
import BuyAgainIcon from '../assets/buy-again-icon.svg';
import Sparkles from '../assets/sparkles.svg';
import ThreeSectionCard from '../../components/molecules/ThreeSectionCard/ThreeSectionCard';

type ArgsTypes = {
  title: string;
  icon: string;
  tag?: boolean;
  tagText?: string;
  tagIcon?: string;
  fullWidthButton?: boolean;
  buttonText?: string;
  buttonId: string;
  children: React.ReactElement;
  headerAction?: () => void;
  headerActionText?: string;
  borderlessHeader?: boolean;
};

export default {
  title: 'Molecules/ThreeSectionCard',
  component: ThreeSectionCard,
};

export const Default = (args: ArgsTypes) => {
  return (
    <ThemeProvider theme={GenericTheme}>
      <ThreeSectionCard {...args} />
    </ThemeProvider>
  );
};

Default.args = {
  title: 'Header',
  icon: BuyAgainIcon,
  tag: true,
  tagText: 'Tag',
  tagIcon: Sparkles,
  buttonId: 'card-button-id',
};

export const WithHeaderAction = (args: ArgsTypes) => {
  return (
    <ThemeProvider theme={GenericTheme}>
      <ThreeSectionCard {...args} />
    </ThemeProvider>
  );
};

WithHeaderAction.args = {
  title: 'Header',
  icon: BuyAgainIcon,
  tag: true,
  tagText: 'Tag',
  tagIcon: Sparkles,
  buttonId: 'card-button-id',
  headerAction: action('header-action'),
  headerActionText: 'Edit',
  borderlessHeader: true,
};

export const SummaryCard = (args: ArgsTypes) => {
  return (
    <ThemeProvider theme={GenericTheme}>
      <ThreeSectionCard {...args}>
        <>
        This is some summary text. <br />
        It goes in the summary card
        </>
      </ThreeSectionCard>
    </ThemeProvider>
  );
};

SummaryCard.args = {
  title: 'Header',
  icon: BuyAgainIcon,
  tag: true,
  tagText: 'Tag',
  tagIcon: Sparkles,
  buttonId: 'card-button-id',
  headerAction: action('header-action'),
  headerActionText: 'Edit',
  borderlessHeader: true,
};
