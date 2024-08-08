import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { ButtonText, StyledButton } from './styled';

interface ButtonProps extends TouchableOpacityProps {
  icon?: keyof typeof AntDesign.glyphMap;
  text: string;
}

export function Button({ icon, text, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>
      {icon && <AntDesign name={icon} size={18} color="white" />}
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
}
