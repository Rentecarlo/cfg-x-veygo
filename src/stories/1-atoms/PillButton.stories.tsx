import React from 'react';
import { PillButton } from '../../components/atoms/PillButton/PillButton';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Atoms/PillButton',
    component: PillButton,
    argTypes: {
        // adds a range control slider for fontSize
        fontSize: {
            control: {
                type: 'range', min: 16, max: 50, step: 1
            },
        }
    },
    args: {
        children: 'Button',
        onClick: () => {window.alert('button has been clicked')},
    }
};

export const Default: ComponentStory<typeof PillButton> = (args) => {
    return (
    <PillButton
    {...args}
    />
    )
}