import {
  Container,
  Header,
  HeaderTitle,
  HederIcon,
  MainContent,
} from './styles'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Input } from '@/components'

export interface SnackFormProps {}

export function SnackForm() {
  const methods = useForm()
  const { navigate } = useNavigation()

  const onSubmit = methods.handleSubmit(() => {
    navigate('FormResume')
  })

  return (
    <Container>
      <Header>
        <HederIcon onPress={() => navigate('Home')}>
          <AntDesign name="arrowleft" size={20} color="black" />
        </HederIcon>
        <HeaderTitle>Nova refeição</HeaderTitle>
      </Header>
      <MainContent>
        <FormProvider {...methods}>
          <Input name="name" label="Nome:" />
          <Input name="description" label="Descrição:" />
          <Input name="date" label="Data:" />
          <Input name="time" label="Hora:" />
          <Button text="Cadastrar refeição" onPress={onSubmit} />
        </FormProvider>
      </MainContent>
    </Container>
  )
}
