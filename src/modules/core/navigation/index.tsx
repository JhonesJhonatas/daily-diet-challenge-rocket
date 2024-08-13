import { FormResume } from '@/screens/FormResume'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, SnackForm } from '@screens'

export type RootStackParamList = {
  Home: typeof Home
  SnackForm: undefined
  FormResume: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnackForm"
          component={SnackForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormResume"
          component={FormResume}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
