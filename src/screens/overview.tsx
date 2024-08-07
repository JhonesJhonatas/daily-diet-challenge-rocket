import { ScreenContent } from '@components';
import { RootStackParamList } from '@core/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <ScreenContent path="screens/overview.tsx" title="Overview" />
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            name: 'Dan',
          })
        }
        title="Show Details"
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
