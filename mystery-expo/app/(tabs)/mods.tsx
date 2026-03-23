import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function ModsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const mods = [
    {
      id: 'goomba',
      title: 'Goomba',
      desc: 'Classic Goomba from the Super Mario series',
      image: require('../../assets/images/Goomba.png'),
      href: '/(tabs)/app-mods/goomba',
    },
    {
      id: 'bob-omb',
      title: 'Bob-omb',
      desc: 'The exploding fiend from the Super Mario series',
      image: require('../../assets/images/Bob-omb.png'),
      href: '/(tabs)/app-mods/bob-omb',
    },
    {
      id: 'propellerboy',
      title: 'Propeller Boy',
      desc: 'A friendly little flying fellow',
      image: require('../../assets/images/Propeller.png'),
      href: '/(tabs)/app-mods/propellerboy',
    },
    {
      id: 'chefronaldo',
      title: 'Chef Ronaldo',
      desc: 'A professional chef...I think...',
      image: require('../../assets/images/Chef.png'),
      href: '/(tabs)/app-mods/chefronaldo',
    },
    {
      id: 'slimerancher',
      title: 'Slime Rancher',
      desc: 'Cute little slimeys that love to bounce around',
      image: require('../../assets/images/Slime Rancher/Slime Rancher.png'),
      href: '/(tabs)/app-mods/slimerancher',
    },
    {
      id: 'crazythedeer',
      title: 'Crazy the Deer',
      desc: 'One crazy bloody deer who is probably on super steroids',
      image: require('../../assets/images/Crazy/Crazy.png'),
      href: '/(tabs)/app-mods/crazythedeer',
    },
    {
      id: 'moose',
      title: 'Moose',
      desc: 'A big buff moose who does not take sh*t from no one',
      image: require('../../assets/images/Crazy/Moose.png'),
      href: '/(tabs)/app-mods/moose',
    },
    {
      id: 'goatee',
      title: 'Goatee',
      desc: 'A goat guy that eats anything and knows how to ram! (Includes Demon Goat Mod)',
      image: require('../../assets/images/Crazy/Goatee.png'),
      href: '/(tabs)/app-mods/goatee',
    },
    {
      id: 'tf2',
      title: 'Team Fortress 2',
      desc: 'All your favorite mercenaries from the hit game Team Fortress 2',
      image: require('../../assets/images/TF2/TF2.png'),
      href: '/(tabs)/app-mods/tf2',
    },
    {
      id: 'fnaf',
      title: 'Five Nights at Freddys',
      desc: 'The spooky teddy bear and his not at all dangerous robot buddies',
      image: require('../../assets/images/Fnaf/Fnaf.png'),
      href: '/(tabs)/app-mods/fnaf',
    },
    {
      id: 'fnaf2',
      title: 'Five Nights at Freddys 2',
      desc: 'The second spooky teddy bear and his robot buddies made of plastic',
      image: require('../../assets/images/Fnaf/Fnaf2.png'),
      href: '/(tabs)/app-mods/fnaf2',
    },
    {
      id: 'moomoo',
      title: 'Sexy Moo Moo',
      desc: 'Trust me its not what you think',
      image: require('../../assets/images/MooMoo2.png'),
      href: '/(tabs)/app-mods/moomoo',
    },
    {
      id: 'slender',
      title: 'Slender Man',
      desc: 'Creepy figure who roams in the forest at night',
      image: require('../../assets/images/Slender Man.png'),
      href: '/(tabs)/app-mods/slender',
    },
    {
      id: 'ruckus',
      title: 'Ruckus Rhino',
      desc: 'The first boss I have ever made',
      image: require('../../assets/images/Ruckus10.png'),
      href: '/(tabs)/app-mods/ruckus',
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

      <Text style={styles.header}>All Mods</Text>

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
            onPress={() => router.push(mod.href as any)}>
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
    backgroundColor: '#1cbacf',
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
    gap: 50,
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