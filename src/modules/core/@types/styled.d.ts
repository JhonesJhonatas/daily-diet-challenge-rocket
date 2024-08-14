import 'styled-components/native'

import lightTheme from '../styles/themes/lightTheme'

declare module 'styled-components/native' {
  type ThemeType = typeof lightTheme

  export interface DefaultTheme extends ThemeType {}
}
