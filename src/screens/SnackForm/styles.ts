import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 64px;
  background-color: ${({ theme }) => theme.colors['gray-5']};
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Header = styled.View`
  padding-left: 32px;
  padding-right: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
`

export const HederIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  top: -9px;
  padding: 16px;
`

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-1']};
`

export const MainContent = styled.View`
  flex: 1;
  padding: 32px;
  border-radius: 20px 20px 0px 0px;
  background-color: ${({ theme }) => theme.colors['gray-7']};
`
