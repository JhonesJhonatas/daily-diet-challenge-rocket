import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['gray-4']};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const FlexArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const Divider = styled.View`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors['gray-4']};
`

export const Status = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors['red-mid']};
`
