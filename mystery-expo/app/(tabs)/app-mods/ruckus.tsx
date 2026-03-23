import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Ruckus.png'),
  require('../../../assets/images/Ruckus2.png'),
  require('../../../assets/images/Ruckus3.png'),
  require('../../../assets/images/Ruckus4.png'),
  require('../../../assets/images/Ruckus5.png'),
  require('../../../assets/images/Ruckus6.png'),
  require('../../../assets/images/Ruckus7.png'),
  require('../../../assets/images/Ruckus8.png'),
  require('../../../assets/images/Ruckus9.png'),
  require('../../../assets/images/Ruckus10.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/rur9lwq419jdfoi/Ruckus_Boss.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/rur9lwq419jdfoi/Ruckus_Boss.zip/file"
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
          src="https://www.youtube.com/embed/IywhXp7dHH8"
          title="Minecraft Ruckus Rhino Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/IywhXp7dHH8' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Ruckus Rhino</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Ruckus Rhino, the first and only boss mod I have ever made so far. This giant beast didn't like the way you looked
        at him, and now he's gonna pummel you to the ground!
      </Text>

      <Text style={styles.description}>
        To access Ruckus file, extract the zip. Go into RuckusX folder, then go into builds and select RuckusX.mcaddon.
        Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want to
        put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior
        packs and resource packs and activate the mob from there. He should appear in the snowy biomes and you should have
        a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Ruckus Rhino ZIP</Text>
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