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

import { Button, Input, ToggleButton } from '@components'
import { useSnack } from '@/modules/snack'

const formSchema = z.object({
  name: z.string({ message: 'Nome é obrigatório' }).min(1),
  description: z.string({ message: 'Descrição é obrigatória' }).min(1),
  date: z.string({ message: 'Data é obrigatória' }).min(1),
  time: z.string({ message: 'Hora é obrigatória' }).min(1),
  isDiet: z.boolean(),
})

type FormSchema = z.infer<typeof formSchema>

export function SnackForm() {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })
  const {
    handlers: { handleCreateSnack },
  } = useSnack()
  const { navigate } = useNavigation()

  const onSubmit = methods.handleSubmit((data) => {
    handleCreateSnack(data)
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
          <Input
            name="description"
            label="Descrição:"
            multiline
            numberOfLines={8}
          />
          <Input name="date" label="Data:" />
          <Input name="time" label="Hora:" />
          <ToggleButton />
          <Button text="Cadastrar refeição" onPress={onSubmit} />
        </FormProvider>
      </MainContent>
    </Container>
  )
}
