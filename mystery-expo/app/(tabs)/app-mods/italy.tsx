import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Country/Italy/Italy Ball.png'),
  require('../../../assets/images/Country/Italy/Italy Human.png'),
  require('../../../assets/images/Country/Italy/Italy Flag.png'),
  require('../../../assets/images/Country/Italy/Italy Tommy.png'),
  require('../../../assets/images/Country/Italy/Italy Chef.png'),
  require('../../../assets/images/Country/Italy/Italy Female.png'),
  require('../../../assets/images/Country/Italy/Italy Tank.png'),
];

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      <Text style={styles.title}>Italy Ball</Text>

      <Image
        source={require('../../../assets/images/Country/Italy/Italy Ball.png')}
        style={styles.mainImage}
        contentFit="cover"/>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        The Italy Ball will be the next country ball to add within the project alongside Australia. Weapons included in
        this ball includes revolvers, tommy guns, and chefs. The Italy Tank will be the fabled Da Vinci Tank and have the
        ability to shoot multiple cannon balls at once that spread all around. Check out the Country Balls Project page
        for more info.
      </Text>

      <Text style={styles.description2}>
        Biome Spawn: Mountains, Rivers, Hills
      </Text>

      <Text style={styles.description3}>
        Allies: None
      </Text>

      <Text style={styles.description3}>
        Friendly: France, Spain
      </Text>

      <Text style={styles.description3}>
        Neutral: Mexico, USA, Canada, Mexico, UK, Japan, Australia
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