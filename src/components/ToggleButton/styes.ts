import styled, { css } from 'styled-components/native'

interface ButtonProps {
  typeColor: 'success' | 'error'
  selected?: boolean
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  padding: 8px 16px;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 16px;
  border-radius: 6px;
  gap: 8px;
  width: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;

  ${({ typeColor, selected, theme }) => {
    switch (typeColor) {
      case 'error':
        if (selected) {
          return css`
            border: 2px solid ${theme.colors['red-dark']};
            background-color: ${theme.colors['red-light']};
          `
        }
        return css`
          background-color: ${theme.colors['red-light']};
        `
      case 'success':
        if (selected) {
          return css`
            border: 2px solid ${theme.colors['green-dark']};
            background-color: ${theme.colors['green-light']};
          `
        }
        return css`
          background-color: ${theme.colors['green-light']};
        `
    }
  }}
`
