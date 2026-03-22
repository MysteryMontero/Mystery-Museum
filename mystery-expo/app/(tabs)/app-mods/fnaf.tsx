import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Fnaf/Fnaf.png'),
  require('../../../assets/images/Fnaf/Fnaf1-2.png'),
  require('../../../assets/images/Fnaf/Foxy2.png'),
  require('../../../assets/images/Fnaf/Foxy3.png'),
  require('../../../assets/images/Fnaf/Golden.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/9wrjqjrv9dij261/Fnaf.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/9wrjqjrv9dij261/Fnaf.zip/file"
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
          src="https://www.youtube.com/embed/IxE_V0tfk_c"
          title="Minecraft Five Nights at Freddys Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/IxE_V0tfk_c' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Five Nights at Freddys</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Har har har! Get ready because Freddy Fazbear and his friends are going to scare your socks off with their new
        attraction: Freddy Fazbear's Pizza! Fazbear Entertainment is not responsible for the damage or death of locals
        or staff. This mod summons characters from the popular series Five Nights at Freddys. Freddy, Bonnie, Chica, and
        Foxy are all here. They are monsters that will attack only you and insta-kill you.
      </Text>

      <Text style={styles.description}>
        They don't just charge at you. Instead, they have 3 modes: Stare mode, Attack mode, and Wander mode. Stare mode
        is when they don't move but stare at you. Touching them will kill you. After some time, Stare mode will switch to
        either Attack mode or Wander mode. Attack mode and Wander mode are random.
      </Text>

      <Text style={styles.description}>
        Attack mode is when they move towards you and try to kill you. After a while, Attack mode will switch to Wander
        mode. Wander mode is when they wander around with no specific destination. Going near them in Wander mode is not
        a good idea. After some time, Wander mode will switch to Stare mode, and the cycle repeats.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Fnaf folder, then go into builds and select Fnaf.mcaddon. Remember
        you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want to put the
        mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs and
        resource packs and activate the mob from there. They should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Five Nights at Freddys ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}>Freddy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Freddy has the longest stare time but he moves faster. He gives a darkness effect when he's nearby.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Freddy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Bonnie</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Bonnie has a much shorter stare time but moves slower.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Bonnie.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Chica</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Chica is the same as Bonnie but has a better chance to wander.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Chica.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Foxy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Foxy has 3 phases before he runs and charges at you. You can see his phases when he changes his pose.
          He won't run forever, his attack mode will run out and switch to wander mode, but will also run away from you.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Foxy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

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

  teamRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
  },

  teamDescription: {
    width: '50%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
  },

  teamImage: {
    width: '50%',
    height: 350,
  },
});