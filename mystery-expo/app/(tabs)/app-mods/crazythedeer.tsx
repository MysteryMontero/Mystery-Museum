import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Crazy/Crazy2.png'),
  require('../../../assets/images/Crazy/Crazy3.png'),
  require('../../../assets/images/Crazy/Crazy4.png'),
  require('../../../assets/images/Crazy/Crazy5.png'),
  require('../../../assets/images/Crazy/Crazy6.png'),
  require('../../../assets/images/Crazy/Crazy7.png'),
  require('../../../assets/images/Crazy/Crazy8.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Crazy",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Crazy"
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
          src="https://www.youtube.com/embed/t_uQ4QDsMLc"
          title="Minecraft Crazy the Deer Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/t_uQ4QDsMLc' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Crazy the Deer</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        He's fast! He's crazy! Ladies and gentlemen, I give you...Crazy the Deer! Let me break it down for you.
        He's a deer, and you are the hunter. Your goal? CATCH THAT CRAZY DEER!!! This deer could be carrying rare goods,
        such a iron, emeralds, and even diamonds! Don't let him keep it for himself!
      </Text>

      <Text style={styles.description}>
        This mod summons Crazy the Deer. They are harmless mobs that spawn in specific biomes such as forests and icelands.
        This mod comes in various skins depending on the biome, but all are the same. They will run away if you attack
        them or get near them. Killing them will result them dropping meat, iron, emeralds, or diamonds. Other mods will
        also try to kill him such as Chefs and Zombies. You can also feed him food like carrots by dropping it in front
        of him (Note: Mob grieving must be on). You can also feed him directly and heal him.
      </Text>

      <Text style={styles.description}>
        The Chef mod is not necessary for this mod but does interact with Crazy.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Crazy the Deer folder, then go into builds and select Crazy the
        Deer.mcaddon. Remember you need to have Minecraft installed for this to work. Open Minecraft, go to a world you
        want to put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to
        behavior packs and resource packs and activate the mob from there. It should appear in your world now and have
        a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Crazy the Deer ZIP</Text>
      </Pressable>

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
});