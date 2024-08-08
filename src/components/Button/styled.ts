import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors['gray-2']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors['white']};
`;
