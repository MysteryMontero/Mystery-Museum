import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function ModsScreen() {
  const router = useRouter();

  const mods = [
    {
      id: 'goomba',
      title: 'Goomba',
      desc: 'Classic Goomba from the Super Mario series.',
      image: require('../../assets/images/Goomba.png'),
    },
    {
      id: 'bob-omb',
      title: 'Bob-omb',
      desc: 'The exploding fiend from the Super Mario series.',
      image: require('../../assets/images/Bob-omb.png'),
    },
    {
      id: 'propellerboy',
      title: 'Propeller Boy',
      desc: 'A friendly little flying fellow.',
      image: require('../../assets/images/Propeller.png'),
    },
    {
      id: 'chefronaldo',
      title: 'Chef Ronaldo',
      desc: 'A professional chef...I think...',
      image: require('../../assets/images/Chef.png'),
    }
  ];

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.header}>All Mods</Text>

      <View style={styles.cardGrid}>
        {mods.map((mod) => (
          <Link key={mod.id} href={`/(tabs)/app-mods/${mod.id}`} asChild>
            <Pressable
              key={mod.id}
              style={styles.card}
              onPress={() => router.push(`/(tabs)/app-mods/${mod.id}` as any)}>
              <Image source={mod.image} style={styles.cardImage} contentFit="cover" />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{mod.title}</Text>
                <Text style={styles.cardDesc}>{mod.desc}</Text>
                <Text style={styles.cardHint}>Tap to view details →</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>
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
    marginBottom: 10,
  },

  backText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },

  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  card: {
    width: '30%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 18,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 180,
  },

  cardBody: {
    padding: 14,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  cardDesc: {
    marginTop: 6,
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },

  cardHint: {
    marginTop: 10,
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
  },
});