import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function FutureModsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('')
  const mods = [
    {
      id: 'australia',
      title: 'Australia Ball',
      desc: 'Part of the Country Balls project',
      image: require('../../assets/images/Country/Australia/Australia Flag.png'),
      href: '/(tabs)/app-mods/australia',
    },
    {
      id: 'italy',
      title: 'Italy Ball',
      desc: 'Part of the Country Balls project',
      image: require('../../assets/images/Country/Italy/Italy Flag.png'),
      href: '/(tabs)/app-mods/italy',
    },
    {
      id: 'mario',
      title: 'Super Mario',
      desc: 'Mario from the Mario series along with other characters',
      image: require('../../assets/images/Mario.png'),
      href: '/(tabs)/app-mods/mario',
    },
    {
      id: 'danganronpa2',
      title: 'Danganronpa 2',
      desc: 'The sequel to Danganronpa',
      image: require('../../assets/images/Danganronpa/Monomi.png'),
      href: '/(tabs)/app-mods/danganronpa2',
    },
    {
      id: 'cartoon',
      title: 'Cartoon Network',
      desc: 'Iconic characters from the Cartoon Network TV broadcast station',
      image: require('../../assets/images/Johnny Bravo.png'),
      href: '/(tabs)/app-mods/cartoon',
    },
  ];

  const filteredMods = mods.filter((mod) =>
    mod.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.replace('/(tabs)' as any)} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.header}>Future Projects</Text>

      <Text style={styles.description}>
          These are Minecraft projects that are currently still in development or haven't been made yet.
      </Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search projects..."
        placeholderTextColor="rgba(255,255,255,0.7)"
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.cardGrid}>
        {filteredMods.map((mod) => (
          <Pressable
            key={mod.id}
            style={styles.card}
            onPress={() => router.push(mod.href as any)}
          >
            <Image source={mod.image} style={styles.cardImage} contentFit="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{mod.title}</Text>
              <Text style={styles.cardDesc}>{mod.desc}</Text>
              <Text style={styles.cardHint}>Tap to view details →</Text>
            </View>
          </Pressable>
        ))}
      </View>

      {filteredMods.length === 0 && (
        <Text style={styles.noResults}>Just what exactly are you typing?</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1b1b1',
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  content: {
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  backText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 0,
    textAlign: 'center',
    width: '100%',
  },

  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    lineHeight: 40,
    textAlign: 'center',
  },

  searchBar: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    color: '#000000',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },

  cardGrid: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },

  card: {
    width: '92%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 18,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 500,
  },

  cardBody: {
    padding: 14,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },

  cardDesc: {
    marginTop: 6,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.9)',
  },

  cardHint: {
    marginTop: 10,
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.75)',
  },

  noResults: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});