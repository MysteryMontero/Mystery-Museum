import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Crazy/Moose.png'),
  require('../../../assets/images/Crazy/Moose2.png'),
  require('../../../assets/images/Crazy/Moose3.png'),
  require('../../../assets/images/Crazy/Moose4.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Moose",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Moose"
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
          src="https://www.youtube.com/embed/U8rhxe50waM"
          title="Minecraft Moose Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/U8rhxe50waM' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Moose</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Moose, Crazy's best friend that probably weighs over 400 pounds. This giant muscle of a moose will not take crud
        from nobody. If you know any better, don't mess with him, and especially don't mess with his best friend Crazy
        the Deer while he's around!
      </Text>

      <Text style={styles.description}>
        This mod summons a Moose. They will not attack you unless you attack them or a Crazy. Like Crazy, you can feed
        him carrots and potatoes (Note: Mob grieving must be on). You can also ride on his back. You can't control him
        but he's a nice safeguard from monsters. There are also baby Moose who are just as tough. Do not let their
        cuteness fool you!
      </Text>

      <Text style={styles.description}>
        The Crazy the Deer mod is not necessary for this mod but this mod does interact with Crazy.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into MooseX folder, then go into builds and select MooseX.mcaddon.
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
        <Text style={styles.downloadText}>Download Moose ZIP</Text>
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