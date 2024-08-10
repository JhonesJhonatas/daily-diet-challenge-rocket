import styled from 'styled-components/native'

import { css } from 'styled-components'

import MaskInput from 'react-native-mask-input'
import Feather from '@expo/vector-icons/Feather'

interface LabelProps {
  type: 'error' | 'label'
}

interface StyledInputProps {
  haveIcon: boolean
}

export const Container = styled.View`
  width: 100%;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.Text<LabelProps>`
  font-size: 14px;
  font-weight: bold;

  ${({ type }) =>
    type === 'error'
      ? css`
          color: ${({ theme }) => theme.colors.error};
        `
      : css`
          color: ${({ theme }) => theme.colors['text-primary']};
        `}
`

export const InputArea = styled.View`
  width: 100%;
  position: relative;
`

export const InputIcon = styled(Feather)`
  position: absolute;
  left: 10px;
  top: 37%;
`

export const PasswordIcon = styled(Feather)`
  position: absolute;
  right: 10px;
  top: 37%;
`

export const StyledInput = styled(MaskInput)<StyledInputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;

  ${({ haveIcon }) =>
    haveIcon
      ? css`
          padding: 12px;
          padding-left: 40px;
        `
      : css`
          padding: 12px;
          padding-left: 10px;
        `}
`
