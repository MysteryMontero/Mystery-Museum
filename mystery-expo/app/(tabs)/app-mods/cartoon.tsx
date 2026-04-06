import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Johnny Bravo.png'),
  require('../../../assets/images/Johnny Bravo2.png'),
  require('../../../assets/images/Grim.png'),
  require('../../../assets/images/Grim2.png'),
];

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      <Text style={styles.title}>Cartoon Network</Text>

      <Image
        source={require('../../../assets/images/Johnny Bravo.png')}
        style={styles.mainImage}
        contentFit="cover"/>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        This idea involves all the iconic characters from the Cartoon Network series. The project is still way early in
        development so nothing is set and stone, but the characters are written down. More characters may be added in the
        future.
      </Text>

      <Text style={styles.sectionTitle}>Characters</Text>
      
            <View style={styles.list}>
                <Text style={styles.listItem}>Johnny Bravo</Text>
                <Text style={styles.listItem}>Grim</Text>
                <Text style={styles.listItem}>Billy</Text>
                <Text style={styles.listItem}>Mandy</Text>
                <Text style={styles.listItem}>Courage</Text>
                <Text style={styles.listItem}>Ed</Text>
                <Text style={styles.listItem}>Edd</Text>
                <Text style={styles.listItem}>Eddy</Text>
                <Text style={styles.listItem}>Dexter</Text>
                <Text style={styles.listItem}>Blossom</Text>
                <Text style={styles.listItem}>Bubbles</Text>
                <Text style={styles.listItem}>Buttercup</Text>
                <Text style={styles.listItem}>Samurai Jack</Text>
                <Text style={styles.listItem}>Mack</Text>
                <Text style={styles.listItem}>Bloo</Text>
                <Text style={styles.listItem}>Chowder</Text>
                <Text style={styles.listItem}>Numbuh One</Text>
                <Text style={styles.listItem}>Tom</Text>
                <Text style={styles.listItem}>Jerry</Text>
                <Text style={styles.listItem}>Finn</Text>
                <Text style={styles.listItem}>Jake</Text>
                <Text style={styles.listItem}>Mordecai</Text>
                <Text style={styles.listItem}>Rigby</Text>
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
    marginBottom: 20,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },

  description2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 0,
    marginBottom: 20,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },

  description3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 0,
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