import { Image, Text } from 'react-native'

import { Container, ScreenContent } from './styles'
import { useMemo } from 'react'
import { Button } from '@/components'
import { useNavigation } from '@react-navigation/native'

interface FormResumeProps {
  stillInDiet: boolean
}

export function FormResume({ stillInDiet }: FormResumeProps) {
  const { navigate } = useNavigation()

  const screenContent = useMemo(() => {
    if (stillInDiet) {
      return (
        <ScreenContent>
          <Text>Continue assim!</Text>
          <Text>Você continua dentro da dieta. Muito bem!</Text>
          <Image source={require('../../assets/success-icon.png')} alt="" />
          <Button
            text="Ir para a pagina inicial"
            onPress={() => navigate('Home')}
          />
        </ScreenContent>
      )
    }

    return (
      <ScreenContent>
        <Text>Que pena!</Text>
        <Text>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </Text>
        <Image source={require('../../assets/fail-icon.png')} alt="" />
        <Button
          text="Ir para a pagina inicial"
          onPress={() => navigate('Home')}
        />
      </ScreenContent>
    )
  }, [navigate, stillInDiet])

  return <Container>{screenContent}</Container>
}
