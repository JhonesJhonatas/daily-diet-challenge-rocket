import 'react-native-gesture-handler'

import { ThemeProvider } from 'styled-components'

import RootStack from '@/modules/core/navigation'
import lightTheme from '@/modules/core/styles/themes/lightTheme'

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <RootStack />
    </ThemeProvider>
  )
}
