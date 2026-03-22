import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/TF2/TF2.png'),
  require('../../../assets/images/TF2/Featured.png'),
  require('../../../assets/images/TF2/Featured2.png'),
  require('../../../assets/images/TF2/Featured3.png'),
  require('../../../assets/images/TF2/Featured4.png'),
  require('../../../assets/images/TF2/Featured5.png'),
  require('../../../assets/images/TF2/Featured6.png'),
  require('../../../assets/images/TF2/Featured7.png'),
  require('../../../assets/images/TF2/TF2 Kazotsky Kick.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/dq3fvykkknilfyo/Team_Fortress_2.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/dq3fvykkknilfyo/Team_Fortress_2.zip/file"
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
          src="https://www.youtube.com/embed/YV4_e_6YKYM"
          title="Minecraft Goomba Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/YV4_e_6YKYM' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Team Fortress 2</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        One of the biggest projects I have ever done in Minecraft and is still the most popular mod I have created. Here
        is the entire cast of mercenaries from the hit game Team Fortress 2. Scout, Soldier, Pyro, Demoman, Heavy, Engineer,
        Medic, Sniper, and Spy are all here with their iconic weapons, traits, and voice lines. There is also a secret
        character. You'll see it eventually, but it's basically a slightly more powerful version of a character.
      </Text>

      <Text style={styles.description}>
        There are two teams just like from the original game: Red and Blue. The red team is on your side and will help you
        fight off monsters and enemies. The blue team is your enemy and will attack you on sight, so watch out for them.
        Killing a blue mercenary will drop gun powder. These two teams will fight each other, so make sure you don't get
        in the crossfire.
      </Text>

      <Text style={styles.description}>
        Here are some tips and uniqie features. If you give any red mercenary a diamond, they will do their iconic kazotsky
        kick dance just like in the original game. Some mercenaries can be lured with specific items. All mercenaries will
        follow the player if they are carrying a horn. Carrying a plain book acts like intelligence and will make the blue
        team spot you from a far away distance, making them chase after you.
      </Text>

      <Text style={styles.description}>
        To access the files, extract the zip. Go into each folder you downloaded, then go into builds and select [​Name]
        Mod.mcaddon. For example, Scout.mcaddon. It should have a Minecraft symbol as the file. Remember you need to have
        Minecraft Bedrock installed for this to work. Open Minecraft Bedrock, go to a world you want to put the mobs in
        and click on the pencil button to the right of your world to enter it's settings. Go to behavior packs and resource
        packs and activate the mobs from there. If you did it right for each one, you should have all the spawn eggs and
        they should appear in your world now.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Team Fortress 2 ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}>Meet The Team</Text>

      <Text style={styles.galleryTitle}>Scout</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            The fastest member on the team with a movement speed of 0.42 and a look range of 30. Can jump really high
            and can't take fall damage. Has 25 health. Range weapon is the scatter gun which fires 6 bullets that spread
            out a lot. Shoot range is 20. Melee weapon is the metal bat which deals 4 damage and cause weakness effect.
            Can be lured with cooked chicken.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Scout.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Soldier</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            The secondary tank with a movement speed of 0.24 and a look range of 20. Has 40 health. Range weapon is the
            rocket launcher which fires an explosive rocket at the target. The rocket has an explosive power of 1. Shoot
            range is 20. Melee weapon is the shovel which deals 40 damage. Can be lured with a bucket.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Soldier.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Pyro</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            Most dangerous member to their own team since fire can effect both sides. Has a movement speed of 0.28 and a
            look range of 20. Immune to fire, lava, and is able to breathe underwater. Has 35 health. Range weapon is the
            flamethrower which spread shoots 5 bullets of fire that sets enemies on fire. Shoot range is 16. Melee weapon
            is the axe which does 4 damage and gives Pyro a speed boost. Can be lured with flint and steel. Has fire
            resistance effect for his own team since he can accidently set his friends on fire.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Pyro.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Demoman</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            The sentry and dispenser destroyer. has a movement speed of 0.24 and a look range of 20. Has 35 health. Range
            weapon is the grenade launcher which launches pipe bombs that do 1 damage on impact and stick to the walls or
            the ground. Explodes after 3 seconds and has an explosive power of 2.2. Shoot range is 20. Melee weapon is the
            sword which deals 4 damage. At the start of the melee, Demoman will charge in. The sword will become red and
            will deal twice the damage, but this only lasts for 1.5 seconds. Can be lured with honey bottle. You can give
            Demoman a honey bottle for drunk dialogue.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Demoman.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Heavy</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            Biggest and slowest member of the team with a movement speed of 0.2 and a look range of 20. Has knockback
            resistance of 0.3. Has 50 health. Range weapon is the mini-gun which takes 2 seconds to charge before firing.
            When fired, a barrage of bullets will be shot at the target until target is dead or goes in for melee combat.
            Bullets deal 2-3 damage. Shoot range is 18. Melee weapon is his fists which deal 4 damage.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Heavy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Engineer</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            Guy with the machines. Has a movement of 0.28 and a look range of 20. Has 25 health. Can place either a sentry
            or a dispenser one time. Will heal sentries and dispensers with regeneration effect if he is nearby them. Range
            weapon is the shotgun which fires a burst shot of 5 bullets at a time. Shoot range is 20. Melee weapon is the
            wrench which deals 3 damage.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Engineer.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Medic</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            Our healer of the group with a movement speed of 0.32 and a look range of 20. When not in combat, he will
            heal nearby allies with regeneration effect. When in combat, his healing effect will be much smaller. Has 30
            health. Range weapon is the syringe gun which shoots syringes that deal only 1-2 damage, but give slowness
            effect on the target. Shoot range is 20. Melee weapon is a big syringe that does 2 damage but also gives poison
            effect to the target.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Medic.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Sniper</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            The range shooter with a movement speed of 0.28 and a look range of 40. Has 25 health. Range weapon is the
            sniper rifle that shoots a very damaging bullet from a far distance. He also has a secondary range weapon
            which is the Jarate. The Jarate deals damage on hit and causes weakness effect around the area. Shoot range
            is 30. Melee weapon is the machete which deals 4 damage.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Sniper.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Spy</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
            The sneaky snake of the team with a movement speed of 0.32 and a look range of 30. Has 25 health. Can pull out
            a disguise kit and disguise himself as the enemy team. The enemy team will not identify him in his disguise and
            if he manages to stab an enemy in disguise, it will deal 18 damage to them and give them weakness effect. If spy
            is hit by anything in his disguise, his disguise will disappear and he will be vulnerable. Range weapon is the
            revolver which shoots a bullet that does a good amount of damage. When not in disguise, his melee is the
            butterfly knife which does 3 damage and no weakness effect.
        </Text>

        <Image
            source={require('../../../assets/images/TF2/A Spy.png')}
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
    width: '80%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
  },

  teamImage: {
    width: '12%',
    height: 350,
  },
});