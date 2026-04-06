import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Danganronpa/Dangan.png'),
  require('../../../assets/images/Danganronpa/Dangan2.png'),
  require('../../../assets/images/Danganronpa/Dangan3.png'),
  require('../../../assets/images/Danganronpa/Dangan4.png'),
  require('../../../assets/images/Danganronpa/Dangan5.png'),
  require('../../../assets/images/Danganronpa/Dangan6.png'),
  require('../../../assets/images/Danganronpa/Dangan7.png'),
  require('../../../assets/images/Danganronpa/Dangan8.png'),
  require('../../../assets/images/Danganronpa/Dangan9.png'),
  require('../../../assets/images/Danganronpa/Dangan10.png'),
  require('../../../assets/images/Danganronpa/Dangan11.png'),
];

export default function Screen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      <Text style={styles.title}>Danganronpa 2</Text>

      <Image
              source={require('../../../assets/images/Danganronpa/Dangan.png')}
              style={styles.mainImage}
              contentFit="cover"/>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        This is going to be the sequel to the mod Danganronpa based on the original game Danganronpa 2: Goodbye Despair.
        17 characters will be added to this mod, each one having different interactions within the world.
      </Text>

      <Text style={styles.sectionTitle}>Characters</Text>

      <View style={styles.list}>
              <Text style={styles.listItem}>Hajime Hinata: Passive</Text>
              <Text style={styles.listItem}>Nagito Komaeda: Passive</Text>
              <Text style={styles.listItem}>Chiaki Nanami: Attacker</Text>
              <Text style={styles.listItem}>Fuyukiko Kuzuryu: Attacker</Text>
              <Text style={styles.listItem}>Imposter Byakuya: Passive</Text>
              <Text style={styles.listItem}>Kazuichi Soda: Special</Text>
              <Text style={styles.listItem}>Gundham Tanaka: Attacker</Text>
              <Text style={styles.listItem}>Mahiru Koizumi: Special</Text>
              <Text style={styles.listItem}>Ibuki Mioda: Passive</Text>
              <Text style={styles.listItem}>Nekomaru Nidai: Attacker</Text>
              <Text style={styles.listItem}>Akane Owari: Attacker</Text>
              <Text style={styles.listItem}>Sonia Nevermind: Passive</Text>
              <Text style={styles.listItem}>Hiyoko Saionji: Passive</Text>
              <Text style={styles.listItem}>Teruteru Hanamura: Special</Text>
              <Text style={styles.listItem}>Peko Pekoyama: Attacker</Text>
              <Text style={styles.listItem}>Mikan Tsumiki: Passive</Text>
              <Text style={styles.listItem}>Monomi: Attacker</Text>
            </View>


      <Text style={styles.galleryTitle}>Gallery</Text>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>
    </ScrollView>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1b1b1',
  },
  content: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
  },

  mainImage: {
    width: '100%',
    height: 500,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    alignSelf: 'flex-start',
  },

  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },

  downloadButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  downloadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  galleryTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    textAlign: 'center',
    width: '100%',
  },

  galleryContainer: {
    width: '100%',
    height: '10%',
    marginTop: 10,
  },

  list: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  listItem: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});