import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Chef.png'),
  require('../../../assets/images/Chef2.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Chef",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Chef"
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
          src="https://www.youtube.com/embed/0qh1hewwdXI"
          title="Minecraft Chef Ronaldo Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/0qh1hewwdXI' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Chef Ronaldo</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Hello! I am Chef Ronaldo! I provide you with fresh food from the dump-I mean! 5 star restaurant!
        Hon Hon Hon! No refunds.
      </Text>

      <Text style={styles.description}>
        Chef Ronaldo was my first human mod and was able to help me figure out humanoid attributes for future projects.
        This mob summons a chef in Minecraft. They are able to trade food with you similar to how a villager trades.
        They are also able to fight monsters and hunt down animals using their axe and their ability to shoot fire
        (don't ask). They can also drop cake from time to time.
      </Text>

      <Text style={styles.description}>
        There are 4 different chef skins, but all act the same.
      </Text>
              
      <Text style={styles.description}>
        To access the file, extract the zip. Go into Chef Ronaldo, then go into builds and select Chef Ronaldo.mcaddon.
        Remember you need to have Minecraft installed for this to work. Open Minecraft, go to a world you want to put
        the mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs
        and resource packs and activate the mob from there. It should appear in villages now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Chef Ronaldo ZIP</Text>
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