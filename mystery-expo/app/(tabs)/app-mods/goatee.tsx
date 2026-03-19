import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Crazy/Goatee.png'),
  require('../../../assets/images/Crazy/Goatee2.png'),
  require('../../../assets/images/Crazy/Goatee3.png'),
];

const sliderImages2 = [
  require('../../../assets/images/Crazy/Demon.png'),
  require('../../../assets/images/Crazy/Demon2.png'),
  require('../../../assets/images/Crazy/Demon3.png'),
  require('../../../assets/images/Crazy/Demon4.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goatee",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goatee"
    );
  }
};

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.replace('/(tabs)/mods')} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      {Platform.OS === 'web' ? (
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/i4BfNF4Iots"
          title="Minecraft Goatee Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/i4BfNF4Iots' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Goatee</Text>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Goatee, the little buddy of Crazy. He will eat anything that is edible! He also attacks monsters in his way by
        launching them up high in the sky! Careful, like Moose, he doesn't like you picking on Crazy. He especially
        doesn't like it when you carry a goat horn, but to be honest, it's more fun to actually get rammed.
      </Text>

      <Text style={styles.description}>
        This mod summons a Goatee. They will not attack you unless you attack a Crazy or carry a goat horn in your hand.
        They attack any monster nearby by ramming into them and launching them high in the sky. They will grab any item
        on the ground near them and eat anything food-related. They will also occasionally drop food out of their trash
        can backpack. This food can be either carrots, beetroots, potatoes, or poisonous potatoes. There is also baby
        versions of him who act the same way.
      </Text>

      <Text style={styles.description}>
        The Crazy the Deer mod is not necessary for this mod but this mod does interact with Crazy.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Goatee folder, then go into builds and select Goatee.mcaddon.
        Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want
        to put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior
         packs and resource packs and activate the mob from there. It should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Goatee ZIP</Text>
      </Pressable>

      <Text style={styles.description}>
        (Scroll down for more features)
      </Text>

      <Text style={styles.galleryTitle}>Gallery</Text>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>

      <Text style={styles.title2}>Also Check Out...</Text>

      {Platform.OS === 'web' ? (
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/T74moU3Grh4"
          title="Minecraft Demon Goat Mod Showcase"
          allowFullScreen
          style={styles.video2}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/T74moU3Grh4' }}
          style={styles.video2}
        />
      )}

      <Text style={styles.title}>Demon Goat</Text>

      <Text style={styles.description}>
        Goatee's evil counterpart. This is the Demon Goat. Careful, they are NOT friendly! If you thought getting rammed
        by a Goatee led you far, the Demon Goat launches you even farther! They also drop unique items out of their
        volcano backpack, if you can get close enough that is.
      </Text>

      <Text style={styles.description}>
        These are monsters that only spawn in the Nether. They will attack you on sight by ramming into you. They will
        also attack Goatee mobs. They will occasionally drops items such as spider eyes, charcoal, nether warts, fire
        charges, and even fire that can be picked up.
      </Text>

      <Text style={styles.description}>
        The Goatee mod is not necessary for this mod but it does interact with Goatee.
      </Text>

      <Text style={styles.description}>
        The mod download is located in the same location as the Goatee mod. All requirements are the same as the Goatee mod.
      </Text>
      
      <Text style={styles.galleryTitle}>Gallery</Text>
      
      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages2} />
      </View>
    </ScrollView>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1cbacf',
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
    color: '#ffffff',
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

  title2: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 500,
  },

  video2: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
});