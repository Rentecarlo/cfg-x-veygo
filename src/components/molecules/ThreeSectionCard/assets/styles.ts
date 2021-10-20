import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
`;

export const ThreeSectionCardContainer = styled.div`
  display: flex;
  padding: 24px;
  flex: 1;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

type HeaderContainerProps = {
  borderless: boolean;
  paddingBottom?: number;
};

export const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  border-bottom: ${({ theme, borderless }) =>
    !borderless ? `0.5px solid ${theme.fieldSecondary}` : ''};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? `${paddingBottom}px` : '26.5px')};
  flex: 1;
`;

export const HeaderTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => `${theme.textPrimary}`};
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  margin-right: 13px;
`;

export const HeaderIconContainer = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const HeaderIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderTagContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: -24px;
  width: 78px;
  height: 30px;
  border-radius: 15px 0 0 15px;
  background-color: ${({ theme }) => `${theme.linkPrimary}`};
  align-items: center;
`;

export const HeaderTag = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => `${theme.fieldPrimary}`};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 8px;
`;

export const HeaderTagIcon = styled.img`
  margin-left: 10px;
  width: 16px;
  height: 16px;
`;

export const CardContentContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

export const CardFooterContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

export const HeaderButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
`;
