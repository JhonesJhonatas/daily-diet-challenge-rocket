import { useMemo, useState } from 'react'

import { TextInputProps } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { Masks } from 'react-native-mask-input'

import AntDesign from '@expo/vector-icons/Feather'

import {
  Container,
  Header,
  StyledInput,
  InputArea,
  PasswordIcon,
  Label,
  InputIcon,
} from './styles'

export interface InputProps extends TextInputProps {
  name: string
  type?: 'text' | 'password' | 'number'
  maskType?: keyof typeof Masks
  label?: string
  error?: string
  icon?: keyof typeof AntDesign.glyphMap
  height?: 'md' | 'lg'
}

export function Input({
  label,
  error,
  name,
  maskType,
  type,
  icon,
  height,
  ...rest
}: InputProps) {
  const { control } = useFormContext()

  const [showPassword, setShowPassword] = useState(false)

  const inputIcon = useMemo(() => {
    if (showPassword) {
      return 'eye-off'
    }

    return 'eye'
  }, [showPassword])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState: { errors } }) => {
        return (
          <Container>
            {label || error ? (
              <Header>
                <Label type="label">{label}</Label>
                <Label type="error">{errors[name]?.message as string}</Label>
              </Header>
            ) : null}
            <InputArea>
              <StyledInput
                onChangeText={onChange}
                value={value}
                mask={maskType ? Masks[maskType] : undefined}
                secureTextEntry={type === 'password' && !showPassword}
                haveIcon={!!icon}
                height={height}
                {...rest}
              />
              {icon ? <InputIcon name={icon} size={18} color="black" /> : null}
              {type === 'password' ? (
                <PasswordIcon
                  name={inputIcon}
                  size={18}
                  color="black"
                  onPress={() => setShowPassword((oldState) => !oldState)}
                />
              ) : null}
            </InputArea>
          </Container>
        )
      }}
    />
  )
}
