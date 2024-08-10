export type RootStackParamList = {
  Home: typeof Home
  SnackForm: undefined
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
