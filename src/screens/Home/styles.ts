import styled, { css } from 'styled-components/native';

interface StyledTextProps {
  title?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  padding-top: 64px;
  background-color: ${({ theme }) => theme.colors['gray-7']};

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Display = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['green-light']};
`;

export const DisplayTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-1']};
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${({ theme }) => theme.colors['gray-1']};

  ${({ title }) =>
    title
      ? css`
          font-weight: bold;
          font-size: 20px;
        `
      : css`
          font-size: 16px;
        `}
`;

export const ButtonArea = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DayContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
