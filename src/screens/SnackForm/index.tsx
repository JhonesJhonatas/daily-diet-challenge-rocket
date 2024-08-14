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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '@/components'

const formSchema = z.object({
  name: z.string({ message: 'Nome é obrigatório' }).min(1),
  description: z.string({ message: 'Descrição é obrigatória' }).min(1),
  date: z.string({ message: 'Data é obrigatória' }).min(1),
  time: z.string({ message: 'Hora é obrigatória' }).min(1),
})

export function SnackForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  })
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
          <Input name="description" label="Descrição:" height="lg" />
          <Input name="date" label="Data:" />
          <Input name="time" label="Hora:" />
          <Button text="Cadastrar refeição" onPress={onSubmit} />
        </FormProvider>
      </MainContent>
    </Container>
  )
}
