import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Vanoss/Vanoss Crew.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew2.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew3.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew4.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew5.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew6.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew7.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew8.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew9.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew10.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew11.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew12.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew13.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew14.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew15.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew16.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew17.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew18.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/ag3mvautwgj9rae/Vanoss_Crew.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/ag3mvautwgj9rae/Vanoss_Crew.zip/file"
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
          src="https://www.youtube.com/embed/K3tebyk3MDQ"
          title="Minecraft Five Nights at Freddys Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/K3tebyk3MDQ' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Vanoss Crew</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        WARNING: This mod contains foul language, racial, sexual, and offensive humor, and lots of dancing.
      </Text>

      <Text style={styles.description}>
        The Vanoss Crew Minecraft Mod is the biggest project I have ever made being almost half a year in development.
        Based from the original YouTube channel VanossGaming, Vanoss and his friends are here in Minecraft with all sorts
        of weapons, voice lines, references, and dance moves! This mod includes 8 characters: Vanoss, Delirous, Nogla,
        Moosnuckel, Wildcat, Basically, Terroriser, and Lui. All of them have different attacks, forms, and quirks.
      </Text>

      <Text style={styles.description}>
        Each character has a primary, a secondary, and a melee attack.
      </Text>

      <Text style={styles.description}>
        To access the file, first extract the zip. Go into any of the folders such as Vanoss, then go into builds and
        select Vanoss.mcaddon. You'll to repeat the same process for all folders. Remember you need to have Minecraft
        Bedrock installed for this to work. Open Minecraft, go to a world you want to put the mob in and click on the
        pencil button to the right of your world to enter it's settings. Go to behavior packs and resource packs and
        activate the mob from there. They should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Vanoss Crew ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}>Gallery</Text>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>

      <Text style={styles.teamTitle}>Vanoss</Text>

      <Text style={styles.teamTitle2}>The Bird With The Banana</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Vanoss Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          RPG: Vanoss shoots an RPG at enemies causing a huge explosion on impact and dealing massive damage. Takes time
          to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Banana Launcher: Vanoss shoots bananas at enemies that deal low damage. When the bananas land on the ground,
          they will turn into banana peels and act as land mines. Any enemy that steps on them will take a hit and move
          slower for a short period of time.
        </Text>

        <Text style={styles.teamDescription}>
          Brass Knuckles: Vanoss melee attacks with a brass knuckle on his hand.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Vanoss.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Vanoss Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Double Shield: During melee combat, Vanoss has a 30% chance of pulling out his double shield. not only does it
          block the incoming damage, but it grants Vanoss and nearby allies temporary protection effect.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Bat Owl
          </Text>

          <Text style={styles.teamTopDescription2}>
            Bat Owl Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Super AK: Vanoss fires a massive rapid spray of bullets at enemies. Takes time to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Dual Pistols: Vanoss contsantly shoots at enemies with dual pistols. Uses both pistols before ending the attack.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Combat: Vanoss fights enemies with his awesome fighting skills.
        </Text>
      </View>
    </View>





      <Text style={styles.teamTitle3}>Delirious</Text>

      <Text style={styles.teamTitle2}>The Masked Madman</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Delirious Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Assault Rifle: Delirious shoots a rapid fire rifle at the enemy.
        </Text>

        <Text style={styles.teamDescription}>
          Bubble Daryl Shotgun: Delirious shoots his bubble daryl shotgun at enemies which does great damage and pushes
          the enemy back when shot.
        </Text>

        <Text style={styles.teamDescription}>
          Chainsaw: Delirious revs up his chainsaw and goes crazy on the enemy, dealing big melee damage. Takes time to
          rev up the chainsaw.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Delirious.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Delirious Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Teddy Bear: Sometimes during combat, Delirious will pull out a teddy bear and place it on the ground. The teddy
          bear attacts all enemies into attacking it and explodes when it loses all health.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Bat Coon
          </Text>

          <Text style={styles.teamTopDescription2}>
            Bat Coon Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Trash Gun: Delirious fires a gun the shoots trash projectiles at enemies. Each projectile has a different effect.
          Occasionally, he will shoot out a shark eating a cheese burger that deals massive damage.
        </Text>

        <Text style={styles.teamDescription}>
          Teddy Bear Turret: Delirious will drop a teddy bear, but this one acts like a turret, shooting nearby enemies
          as well as having the same mechanics a regular teddy bear has.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Claws: Delirious fights with his Bat Coon claws.
        </Text>
      </View>
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

  teamTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 500,
    textAlign: 'center',
    width: '100%',
  },

  teamTitle2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    width: '100%',
  },

  teamTitle3: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 100,
    textAlign: 'center',
    width: '100%',
  },

  teamTopDescription: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
  },

  teamDescription: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
    marginTop: 20,
  },

  teamTopDescription2: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
    marginTop: 20,
  },

  teamImage: {
    width: '50%',
    height: 350,
  },

  textColumn: {
    flex: 1,
  },

  list: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  listItem: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
    width: '50%',
    lineHeight: 30,
  },
});