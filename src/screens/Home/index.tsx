import { Image } from 'react-native'

import { ListItem } from './components/ListItem'
import {
  ButtonArea,
  Container,
  DayContent,
  Display,
  DisplayTitle,
  Header,
  StyledText,
} from './styles'

import { Button } from '@/components'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Header>
        <Image source={require('@/assets/logo.png')} alt="Logo" />
        <Image source={require('@/assets/avatar.png')} alt="Avatar" />
      </Header>
      <Display>
        <DisplayTitle>90,86%</DisplayTitle>
        <StyledText>das refeições dentro da dieta</StyledText>
      </Display>
      <ButtonArea>
        <StyledText>Refeições</StyledText>
        <Button
          text="Adicionar refeição"
          icon="plus"
          onPress={() => navigate('SnackForm')}
        />
      </ButtonArea>
      <DayContent>
        <StyledText title>12.08.22</StyledText>
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
      </DayContent>
      <DayContent>
        <StyledText title>11.08.22</StyledText>
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
        <ListItem time="20:00" description="Hamburger" />
      </DayContent>
    </Container>
  )
}
