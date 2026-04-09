import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import * as WebBrowser from 'expo-web-browser';

const sliderImages = [
  require('../../../assets/images/Goomba.png'),
  require('../../../assets/images/Goomba2.png'),
];

const openVideo = async () => {
  const url = 'https://www.youtube.com/watch?v=JM_PBlQXg78';

  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
};

const downloadMod = () => {
  if (Platform.OS === 'web') {
    window.open(
      'https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goomba',
      '_blank'
    );
  } else {
    Linking.openURL(
      'https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goomba'
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
          src="https://www.youtube.com/embed/JM_PBlQXg78"
          title="Minecraft Goomba Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <Pressable onPress={openVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Showcase Video</Text>
        </Pressable>
      )}

      <Text style={styles.title}>Goomba</Text>

      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        The Goomba mod brings the classic enemy from the Super Mario series into Minecraft.
        This mob is able to walk around, attack certain monsters and can open iron doors.
        If you attack them, they will attack you. There are also baby Goombas that can go
        through small gaps. This mod adds a nostalgic crossover experience for Minecraft
        players who enjoy the Mario universe. This is the first mod I have ever made and
        still is the crown jewel.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into GoombaX, then go into builds and select GoombaX.mcaddon.
        Remember you need to have Minecraft installed for this to work. Open Minecraft, go to a world you want
        to put the mob in and click on the pencil button to the right of your world to enter its settings.
        Go to behavior packs and resource packs and activate the mob from there. It should appear in your world
        now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable onPress={downloadMod} style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Goomba ZIP</Text>
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
    borderWidth: 0,
  },
  videoButton: {
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
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