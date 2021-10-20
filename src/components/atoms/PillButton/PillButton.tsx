import React from 'react';
import { Button, ButtonText } from './assets/styles';

type Props = {
    children: React.ReactNode;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // the props below are optional - if not specified they have a default value
    width?: string;
    height?: string;
    fontSize?: string;
    fontColor?: string;
    background?: string;
}

export const PillButton: React.FC<Props> = ({
    children,
    id,
    onClick,
    width,
    height,
    fontSize,
    fontColor,
    background,
}) => {
    return (
        <Button
        id={id}
        onClick={onClick}
        width={width}
        height={height}
        background={background}
        >
            <ButtonText
                fontSize={fontSize}
                fontColor={fontColor}
            >
                {children}
            </ButtonText>
        </Button>
    )
}