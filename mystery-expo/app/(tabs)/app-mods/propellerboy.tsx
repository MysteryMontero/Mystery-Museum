import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Propeller.png'),
  require('../../../assets/images/Propeller2.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Propeller",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Propeller"
    );
  }
};

export default function PropellerScreen() {
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
          src="https://www.youtube.com/embed/N4nnM9pwqPE"
          title="Minecraft Propeller Boy Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/N4nnM9pwqPE' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Propeller Boy</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        This was my first original mod idea. Say hello to Propeller Boy, a mod that is able to walk and fly
        around the world. They are friendly little guys that will fight monsters for you. Just be nice to them,
        otherwise they will get angry!
      </Text>

      <Text style={styles.description}>
        Propeller Boy changes colors depending on the damage he takes. He has three colors: blue, yellow, and red.
        He starts off as blue, meaning he won't attack you if you attack him. Doing enough damage will turn him yellow
        and he'll run away from you. Doing more damage will turn him red, making him finally snap and attack the player.
      </Text>
              
      <Text style={styles.description}>
        To access the file, extract the zip. Go into Propeller Boy, then go into builds and select Propeller Boy.mcaddon.
        Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want to
        put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior
        packs and resource packs and activate the mob from there. It should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Propeller Boy ZIP</Text>
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