import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Fnaf/Fnaf2.png'),
  require('../../../assets/images/Fnaf/Fnaf2-2.png'),
  require('../../../assets/images/Fnaf/Mangle2.png'),
  require('../../../assets/images/Fnaf/BB2.png'),
  require('../../../assets/images/Fnaf/Puppet2.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/qvm1wpib28rc963/Fnaf2.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/qvm1wpib28rc963/Fnaf2.zip/file"
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
          src="https://www.youtube.com/embed/3kyENDB-vA4"
          title="Minecraft Five Nights at Freddys Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/3kyENDB-vA4' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Five Nights at Freddys 2</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Since I made the first one, I decided to make the second game too, based on Five Nights at Freddys 2. I also
        decided to use the pumpkin head as a mask because it fit so well. This mod summons 6 characters from Fnaf 2 such
        as Toy Freddy, Toy Bonnie, Toy Chica, mangle, Balloon Boy, and Puppet. They are monsters that will attack only you
        and insta-kill you. Pumpkin mask is required!
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
        Toy Freddy, Toy Bonnie, and Toy Chica can only be stopped with the pumpkin head. They can open doors, so door will
        not stop them.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Fnaf2 folder, then go into builds and select Fnaf2.mcaddon. Remember
        you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world you want to put the
        mob in and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs and
        resource packs and activate the mob from there. You should have a spawn egg now.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Five Nights at Freddys 2 ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}> Toy Freddy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Toy Freddy has the longest stare time and is the slowest.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Toy Freddy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Toy Bonnie</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Toy Bonnie has shorter stare time.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Toy Bonnie.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}> Toy Chica</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Chica is the same as Bonnie but has a better chance to wander.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Toy Chica.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Mangle</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Mangle is different. She can be stopped with doors, but not with the pumpkin mask. She moves faster and makes
          radio noise.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Mangle.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>
      
      <Text style={styles.galleryTitle}>Balloon Boy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Balloon Boy is the same as Mangle, stopped with doors but not with mask. Balloon Boy is much faster and does
          not kill you if he gets you, but instead blinds you for a period of time.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/BB.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Marionette</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Puppet is like a music box. Watch her, and if she moves a little, wind her back.
        </Text>
      
        <Image
            source={require('../../../assets/images/Fnaf/Puppet.png')}
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