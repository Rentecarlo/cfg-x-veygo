import styled from 'styled-components';

interface ButtonProps {
    width?: string;
    height?: string;
    background?: string;
}

interface ButtonTextProps {
    fontSize?: string;
    fontColor?: string;
}

export const Button = styled.button<ButtonProps>`
    /* width and height will default to auto sizing unless specified */
    height: ${({height}) => (height ? `${height}px` : '30px')};
    width: ${({width}) => (width ? `${width}px` : '100%')};
    border-radius: 15px;
    /* background color will default unless specified */
    background-color: ${({ background }) => background || '#30C6E2'};
    border-width: 0;
`;

export const ButtonText = styled.div<ButtonTextProps>`
    /* font size will default to 16px unless specified */
    font-size: ${({ fontSize }) => fontSize || '16'}px;
    /* font color will default unless specified */
    color: ${({ fontColor }) => fontColor || '#F3F4F7'};
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;