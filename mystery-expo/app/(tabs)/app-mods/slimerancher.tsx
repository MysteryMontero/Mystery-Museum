import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/Slime Rancher/Slime Rancher 2.png'),
  require('../../../assets/images/Slime Rancher/Pink Slime.png'),
  require('../../../assets/images/Slime Rancher/Blue Slime.png'),
  require('../../../assets/images/Slime Rancher/Green Slime.png'),
  require('../../../assets/images/Slime Rancher/Orange Slime.png'),
  require('../../../assets/images/Slime Rancher/Purple Slime.png'),
  require('../../../assets/images/Slime Rancher/Yellow Slime.png'),
  require('../../../assets/images/Slime Rancher/Red Slime.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Slime",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Slime"
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
          src="https://www.youtube.com/embed/bX-PuX2kFmQ"
          title="Minecraft Chef Ronaldo Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/bX-PuX2kFmQ' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Slime Rancher</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        I based these little guys off of Slime Rancher. They're cute little creatures who love to bounce around!
        Every creature in Minecraft loves them, which is why you should never ever hurt them! **EVER** You have been warned.
      </Text>

      <Text style={styles.description}>
        This mod has player mechanics, meaning that every monster will see this as a player and will attempt to attack it.
        Once this mod gets hurt, other entities nearby will come and attack the attacker. For example, if a zombie attacks
        a Slimey, other zombies or monsters will attack said zombie. It's really fun to play around with. If YOU attack a
        Slimey, the same will happen to you, so be careful.
      </Text>

      <Text style={styles.description}>
        Slimeys can carry apples on them or even golden apples. If you kill one, it may potentially drop one,
        a risky gamble though. You can tame Slimeys by feeding them slime balls. They will stop bouncing and
        follow you from now on. They don't do anything, but it's fun to make a slime army. There are 10 different
        types of Slimeys, 7 common ones and 3 rare ones. Try to find them all!
      </Text>
              
      <Text style={styles.description}>
        To access the file, extract the zip. Go into Slime Rancher, then go into builds and select Slime Rancher.mcaddon.
        Remember you need to have Minecraft installed for this to work. Open Minecraft, go to a world you want to put the
        mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs and
        resource packs and activate the mob from there. It should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Slime Rancher ZIP</Text>
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