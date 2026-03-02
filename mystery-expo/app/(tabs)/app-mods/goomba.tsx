import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function ModDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.replace('/(tabs)/mods')} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>Mod: {id}</Text>
      <Text style={styles.sub}>
        This page will show details, images, and downloads.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1cbacf',
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  backButton: {
    marginBottom: 12,
  },

  backText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  sub: {
    marginTop: 12,
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
});