import { Text } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Button, Container } from './styes'
import { useTheme } from 'styled-components/native'

export function ToggleButton() {
  const { colors } = useTheme()

  return (
    <Container>
      <Button typeColor="success" selected>
        <FontAwesome name="circle" size={12} color={colors['green-dark']} />
        <Text>Toggle Button</Text>
      </Button>
      <Button typeColor="error">
        <FontAwesome name="circle" size={12} color={colors['red-dark']} />
        <Text>Toggle Button</Text>
      </Button>
    </Container>
  )
}
