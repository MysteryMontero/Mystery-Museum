import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Slender Man.png'),
  require('../../../assets/images/Slender Man2.png'),
  require('../../../assets/images/Slender Man3.png'),
  require('../../../assets/images/Slender Man4.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Slender",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Slender"
    );
  }
};

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      {Platform.OS === 'web' ? (
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/CUYYdpO7_vE"
          title="Minecraft Slender Man Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/CUYYdpO7_vE' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Slender Man</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        The classic horror figure; Slender Man. Despite this being a small mod, it was very popular to the public audience.
        Turns out he is a lot scarier than I initially thought just based on my friend's reactions. Slender Man is a mod
        you want to avoid at all costs. He mainly roams in the forest at night. You will know he is near when you hear his
        theme music play. He acts very similar to an Endermen. Look him in the eye and he will chase after you with tremendous
        speed and blind your vision too. He will insta-kill you if he catches you. He can also teleport like an Endermen.
      </Text>

      <Text style={styles.description}>
        There are baby versions of him as well, which are way worse. They are faster and because they are so small, they
        meet your eye level, making them very dangerous. Slender Man has another secret skin too.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Slender Man folder, then go into builds and select Slender Man.mcaddon.
        Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want to
        put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs
        and resource packs and activate the mob from there. They should appear in the forest at night and you should have a
        spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Slender Man ZIP</Text>
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