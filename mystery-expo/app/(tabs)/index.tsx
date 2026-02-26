import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Minecraft: require('../../assets/fonts/Minecraftia-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Minecraft' }]}>
        Mystery Museum
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1cbacf',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textShadowColor: '#8a2be2',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
});