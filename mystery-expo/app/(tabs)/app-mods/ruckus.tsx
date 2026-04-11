import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

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

const openVideo = async () => {
  const url = 'https://www.youtube.com/watch?v=IywhXp7dHH8';

  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
};

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
        <Pressable onPress={openVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Showcase Video</Text>
        </Pressable>
      )}

      <Text style={styles.title}>Ruckus Rhino</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Ruckus Rhino, the first and only boss mod I have ever made so far. This giant beast didn't like the way you looked
        at him, and now he's gonna pummel you to the ground! If you manage to defeat him, he drops goodies like gold and
        diamonds. Ruckus has 5 different attacks and 2 phases. He has 200 health in full and his 2nd phase hit when he is
        at half health. In his 2nd phase, he turns red and angry and his attacks get faster and more challenging. Its best
        to bring a shield. 
      </Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Ruckus also comes with his dastardly minions, the Roombas. Roombas are Goombas that look like Ruckus and are
          instructed to kill you. Every now and then Ruckus will summon Roombas to help him on the battle field. The cool
          thing is you can spawn in Goombas that will fight them off for you.
        </Text>
      
        <Image
          source={require('../../../assets/images/Ruckus3.png')}
          style={styles.teamImage}
          contentFit="cover"/>
        </View>

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

      <Text style={styles.description}>
        Note: The Ruckus file and the Roomba file are separate files, but the download comes with both of them. You'll need
        to install them one at a time.
      </Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Ruckus Rhino ZIP</Text>
      </Pressable>

      <Text style={styles.sectionTitle2}>Cheat Sheet</Text>

      <Text style={styles.description}>
        Attack 1: Ruckus will charge at the player and melee attack him. Phase 2 makes him faster and deal more damage.
      </Text>

      <Text style={styles.description}>
        Attack 2: Ruckus will pull out a minigun and shoot endless bullets at the player. This is where a shield would
        come in handy. Phase 2 makes him rev the gun up faster.
      </Text>

      <Text style={styles.description}>
        Attack 3: Ruckus will throw bombs at the player, exploding on impact. The player can hit the bombs back at Ruckus
        like a Ghast fireball. Phase 2 makes the bombs have a bigger explosion.
      </Text>

      <Text style={styles.description}>
        Attack 4: Ruckus will summon 2 Roombas to come charge at the player. The advantage is Ruckus stays in a pointing
        stance for a short time, making it the perfect time to strike him. Phase 2 makes him summon 3 Roombas and his
        stance time is shorter.
      </Text>

      <Text style={styles.description}>
        Attack 5: Ruckus will perform a clap slam that does knockback damage to the area around him. He takes some time to
        rev it up before slamming, giving the player some time to run away before they get hit by it. Phase 2 gives his slam
        more damage, range, and power.
      </Text>

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

  sectionTitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 150,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 22,
  },

  teamImage: {
    width: '50%',
    height: 350,
  },
});