import { ScreenContent } from '@components';
import { RootStackParamList } from '@core/navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export function Details() {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <View style={styles.container}>
      <ScreenContent
        path="screens/details.tsx"
        title={`Showing details for user ${router.params.name}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
