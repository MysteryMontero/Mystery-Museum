import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function PopModsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const mods = [
    {
      id: 'tf2',
      title: 'Team Fortress 2',
      desc: 'All your favorite mercenaries from the hit game Team Fortress 2',
      image: require('../../assets/images/TF2/TF2.png'),
      href: '/(tabs)/app-mods/goomba',
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

      <Text style={styles.header}>Popular Mods</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search mods..."
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
    backgroundColor: '#1ccf43',
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
    color: '#ffffff',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },

  searchBar: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },

  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    paddingLeft: 40,
  },

  card: {
    width: '30%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 18,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 300,
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

  noResults: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});