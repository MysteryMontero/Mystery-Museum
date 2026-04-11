import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Danganronpa/Danganronpa.png'),
  require('../../../assets/images/Danganronpa/Danganronpa2.png'),
  require('../../../assets/images/Danganronpa/Monokuma.png'),
  require('../../../assets/images/Danganronpa/Danganronpa3.png'),
  require('../../../assets/images/Danganronpa/Danganronpa4.png'),
  require('../../../assets/images/Danganronpa/Danganronpa5.png'),
  require('../../../assets/images/Danganronpa/Danganronpa6.png'),
  require('../../../assets/images/Danganronpa/Danganronpa7.png'),
  require('../../../assets/images/Danganronpa/Danganronpa8.png'),
  require('../../../assets/images/Danganronpa/Danganronpa9.png'),
  require('../../../assets/images/Danganronpa/Danganronpa10.png'),
  require('../../../assets/images/Danganronpa/Danganronpa11.png'),
];

const openVideo = async () => {
  const url = 'https://www.youtube.com/watch?v=D1t7bC6GlhY';

  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
};

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/52n4iizjnm1q0te/Danganronpa.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/52n4iizjnm1q0te/Danganronpa.zip/file"
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
          src="https://www.youtube.com/embed/D1t7bC6GlhY"
          title="Minecraft Danganronpa Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <Pressable onPress={openVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Showcase Video</Text>
        </Pressable>
      )}

      <Text style={styles.title}>Danganronpa</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        WARNING: This mod contains massive spoilers to the actual game. If you haven't played Danganronpa, then I
        recommend you shouldn't download this mod. Also this mod contains foul language.
      </Text>

      <Text style={styles.description}>
        Thrills! Chills! KILLS!!! I present to you...Danganronpa! As a Danganronpa fan myself, I couldn't help but make ALL 17
        characters of the first game! Each one of them does different things and have their own easter eggs. Good luck
        keeping track of all of them.
      </Text>

      <Text style={styles.description}>
        To access the Danganronpa file, first extract the zip. Go into Danganronpa folder, then go into builds and select
        Danganronpa.mcaddon. Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to
        a world you want to put the mob in and click on the pencil button to the right of your world to enter it's settings.
        Go to behavior packs and resource packs and activate the mob from there. They should appear in your world and you
        should have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Characters</Text>

      <View style={styles.list}>
              <Text style={styles.listItem}>Makoto Naegi: Passive</Text>
              <Text style={styles.listItem}>Kyoko Kirigiri: Passive</Text>
              <Text style={styles.listItem}>Sayaka Maizono: Passive</Text>
              <Text style={styles.listItem}>Mondo Owada: Attacker</Text>
              <Text style={styles.listItem}>Toko Fukawa: Special (Has two forms)</Text>
              <Text style={styles.listItem}>Byakuya Togami: Passive</Text>
              <Text style={styles.listItem}>Chihiro Fujisaki: Passive</Text>
              <Text style={styles.listItem}>Sakura Ogami: Attacker</Text>
              <Text style={styles.listItem}>Junko Enoshima: Attacker (Gives weakness effect to nearby mobs)</Text>
              <Text style={styles.listItem}>Kiyotaka Ishimaru: Attacker</Text>
              <Text style={styles.listItem}>Celestia Ludenburg: Passive</Text>
              <Text style={styles.listItem}>Leon Kuwata: Attacker (Has both range and melee)</Text>
              <Text style={styles.listItem}>Yasuhiro Hagakure: Passive</Text>
              <Text style={styles.listItem}>Aoi Asahina: Passive</Text>
              <Text style={styles.listItem}>Hifumi Yamada: Passive</Text>
              <Text style={styles.listItem}>Mukuro Ikusaba: Attacker (Has both range and melee)</Text>
              <Text style={styles.listItem}>Monokuma: Attacker (Has 3 different forms after death)</Text>
            </View>


      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Danganronpa ZIP</Text>
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

  list: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  listItem: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});