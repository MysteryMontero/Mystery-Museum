import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Mario.png'),
  require('../../../assets/images/Mario Jump.png'),
  require('../../../assets/images/Mario Swim.png'),
  require('../../../assets/images/Mario Small.png'),
  require('../../../assets/images/Mario Hammer.png'),
  require('../../../assets/images/Mario Fire.png'),
  require('../../../assets/images/Mario Fludd.png'),
];

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      <Text style={styles.title}>Super Mario</Text>

      <Image
        source={require('../../../assets/images/Mario.png')}
        style={styles.mainImage}
        contentFit="cover"/>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Currently this is made to be a capstone project, but eventually it will be finalized and made for the public.
        The Super Mario mod is meant to spawn the character Mario as an entity into Minecraft where he is able to move
        around and interact with the world. Mario is able to jump, swim, attack enemies, and much more. The mod also
        comes with power-ups which transform Mario into different forms.
      </Text>

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
    backgroundColor: '#ffffff',
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
});