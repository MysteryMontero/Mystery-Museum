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

const sliderImages2 = [
  require('../../../assets/images/Super Mushroom.png'),
  require('../../../assets/images/Fire Flower.png'),
  require('../../../assets/images/Question Box.png'),
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

      <Text style={styles.description2}>
        Mario is able to attack monsters with 3 different attacks: Melee, Stomp, and Hammer:
      </Text>

      <Text style={styles.description2}>
        Melee: Mario fights with moves based off Mario 64. 
      </Text>

      <Text style={styles.description2}>
        Stomp: Mario jumps in the air and lands on an enemy's head, dealing massive damage.
      </Text>

      <Text style={styles.description2}>
        Hammer: Mario attacks with his iconic hammer from the Mario RPG series which attacks and launches enemies high
        in the sky.
      </Text>

      <Text style={styles.sectionTitle}>Items</Text>

      <Text style={styles.description}>
        There are three items to give Mario:
      </Text>

      <Text style={styles.description}>
        Super Mushroom: When Mario is small, giving a mushroom makes him big again. Eating a mushroom will make the
        player dizzy for a short time.
      </Text>

      <Text style={styles.description2}>
        Fire Flower: Giving Mario a fire flower turns him into Fire Mario. Mario is stronger and can shoot bouncing
        fireballs at enemies. Eating a fire flower will set the player on fire.
      </Text>

      <Text style={styles.description2}>
        Question Box: Giving Mario a question mark box gives him the Fludd pack. Mario can spray foes away with rapid
        water.
      </Text>

      <Text style={styles.sectionTitle}>Future</Text>

      <Text style={styles.description}>
        Besides Mario, more Mario characters will be added to Minecraft as well. Luigi, Peach, Daisy, Bowser, Wario,
        Waluigi, Yoshi, Toad, Donkey Kong, and more. All of them will have unique attacks and special forms.
      </Text>

      <Text style={styles.galleryTitle}>Gallery</Text>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>

      <Text style={styles.galleryTitle2}>Items</Text>

      <View style={styles.galleryContainer2}>
        <Slideshow images={sliderImages2} />
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

  galleryTitle2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 500,
    textAlign: 'center',
    width: '100%',
  },

  galleryContainer2: {
    width: '100%',
    height: '10%',
    marginTop: 10,
  },
});