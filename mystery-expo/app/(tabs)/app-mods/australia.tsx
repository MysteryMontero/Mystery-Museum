import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Country/Australia/Australia Ball.png'),
  require('../../../assets/images/Country/Australia/Australia Human.png'),
  require('../../../assets/images/Country/Australia/Australia Flag.png'),
  require('../../../assets/images/Country/Australia/Australia Gun.png'),
  require('../../../assets/images/Country/Australia/Australia Croc.png'),
  require('../../../assets/images/Country/Australia/Australia Female.png'),
  require('../../../assets/images/Country/Australia/Australia Tank.png'),
];

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      <Text style={styles.title}>Australia Ball</Text>

      <Image
        source={require('../../../assets/images/Country/Australia/Australia Ball.png')}
        style={styles.mainImage}
        contentFit="cover"/>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        The Australia Ball will be the next country ball to add within the project alongside Italy. Weapons included in
        this ball includes survival knifes, shotguns, crocodiles, and boomerangs. The Australia Tank will be a kangaroo
        with boxing gloves that will also be able to spawn baby roos to help fight with the tank. Check out the Country
        Balls Project page for more info.
      </Text>

      <Text style={styles.description2}>
        Biome Spawn: Jungle, Badlands, Swamp
      </Text>

      <Text style={styles.description3}>
        Allies: None
      </Text>

      <Text style={styles.description3}>
        Friendly: USA, Canada, UK
      </Text>

      <Text style={styles.description3}>
        Neutral: Mexico, France, Spain, Japan, Italy
      </Text>

      <Text style={styles.description3}>
        Enemies: None
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
});