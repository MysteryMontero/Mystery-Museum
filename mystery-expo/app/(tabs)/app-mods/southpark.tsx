import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/South Park/South Park.png'),
  require('../../../assets/images/South Park/South Park2.png'),
  require('../../../assets/images/South Park/South Park3.png'),
  require('../../../assets/images/South Park/South Park4.png'),
  require('../../../assets/images/South Park/South Park5.png'),
  require('../../../assets/images/South Park/South Park6.png'),
  require('../../../assets/images/South Park/South Park7.png'),
  require('../../../assets/images/South Park/South Park8.png'),
  require('../../../assets/images/South Park/South Park9.png'),
  require('../../../assets/images/South Park/South Park10.png'),
  require('../../../assets/images/South Park/South Park11.png'),
  require('../../../assets/images/South Park/South Park12.png'),
  require('../../../assets/images/South Park/South Park13.png'),
  require('../../../assets/images/South Park/South Park14.png'),
];

const openVideo = async () => {
  const url = 'https://www.youtube.com/watch?v=QHrwAlPKhpg';

  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
};

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/vvqn1mf0z02d2ys/South_Park_Mod.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/vvqn1mf0z02d2ys/South_Park_Mod.zip/file"
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
          src="https://www.youtube.com/embed/QHrwAlPKhpg"
          title="Minecraft South Park Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <Pressable onPress={openVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Showcase Video</Text>
        </Pressable>
      )}

      <Text style={styles.title}>South Park</Text>


      <Text style={styles.sectionTitle}>Description</Text>
      
      <Text style={styles.description}>
        WARNING: This mod contains swearing, indecent language, and is NOT made for kids!!!
      </Text>

      <Text style={styles.description}>
        South Park, one of the most iconic and offensive television shows in America. Now they're in Minecraft. Cartman,
        Kyle, Stan, Kenny, Butters, Jimmy, Token, Wendy, Clyde, and Craig are all here ready to age restrict your video.
        They come with their iconic voicelines and even their hero forms from the game South Park: Stick of Truth. You
        WILL respect mah auhtoritah!
      </Text>

      <Text style={styles.description}>
        You can tame them by giving them apples so they'll follow you around. In their normal forms, they will run away
        from mobs. Only zombies will attack them with the exception of one character. Give them an emerald to turn them
        into their Stick of Truth hero forms. In their hero forms, they will attack mobs, each of them possessing different
        abilities and attacks.
      </Text>

      <Text style={styles.description}>
        This mod is split into multiple eggs; one for the main characters, one for the side characters, and one for
        Professor Chaos. To access the South Park file, first extract the zip. Go into South Park folder, then go into
        builds and select South Park.mcaddon. Remember you need to have Minecraft Bedrock installed for this to work.
        Open Minecraft, go to a world you want to put the mob in and click on the pencil button to the right of your
        world to enter it's settings. Go to behavior packs and resource packs and activate the mob from there. They
        should appear in your world and you should have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download South Park ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}>Cartman</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Because he's fa-I mean big-boned, he moves slightly slower than the rest. In his hero form, he turns into a wizard.
          Wizard Cartman shoots bolts of lightning at enemies which causes lightning to strike down of them. he also grants
          fire resistance to nearby allies because his lightning can set them on fire too.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Cartman.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Kyle</Text>
        
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Kyle's hero form is the elf king. The elf king is a range fighter that shoots 3 arrows at once in rapid succession.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Kyle.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Stan</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Stan turns into a knight. Knight Stan is a melee fighter equipped with more health and heavy damage.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Stan.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Kenny</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Unlike the rest of the crew who only gets attacked by zombies, Kenny gets attacked by all monsters and mobs that
          would target a player. Kenny's hero form is Princess Kenny. Princess Kenny grants speed effect to nearby allies and
          shoots arrows that slow enemies down. He can also summon rats after a short period of time that will help in attacking
          monsters.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Kenny.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Butters</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Butters' hero form is unique. He turns into the Merciful. Butters the Merciful is he weakest hero being melee
          and only dealing 4 damage, but upon death, there is a 50/50 chance of him to turn into Professor Chaos.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Butters.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Professor Chaos</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Professor Chaos is a much more powerful version of Butters with high melee damage that causes lightning strikes
          everytime he attacks. The only downside is he's very slow and will perish after 30 seconds. Professor Chaos has
          his own spawn egg which does not make him perish after 30 seconds.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Professor Chaos.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Jimmy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Jimmy moves a little slower compared to the rest. His hero form is the Bard. Bard Jimmy shoots arrows at mobs.
          They are not as fast or as effective. The real strength of Bard is he grants a damage boost to nearby allies.
          Just like Kenny, he can also summon rats, but only 2 of them. These rats can also be granted with attack boost,
          making them more powerful.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Jimmy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Wendy</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Wendy does not have an original Stick of Truth form, so hers was created. She turns into Amazon Wendy, a tank
          class who moves slow but has a lot of health. She's a melee with a lot of range thanks to her spear weapon
          and she can grant protection to nearby allies.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Wendy.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Token</Text>
      
      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Token turns into a healer. He is melee and grants healing to nearby allies. He's not much as an attacker but
          he is the only healer in the crew.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Token.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Clyde</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Clyde was the antagonist in the Stick of Truth, so he turns into the Lord of Darkness. In this form, Clyde can
          shoot exploding fireballs from his hands. He also give weakness effect to nearby enemies, making their attacks
          deal less damage.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Clyde.png')}
            style={styles.teamImage}
            contentFit="cover"/>
        </View>

      <Text style={styles.galleryTitle}>Craig</Text>

      <View style={styles.teamRow}>
        <Text style={styles.teamDescription}>
          Craig flips you off when you interact with him. In his hero form, he turns into a thief. In thief form, Craig
          is much faster. He is a melee fighter who can create two shadow clones of himself that help him fight mobs.
          These shadow clones dies over time but he can spawn new ones in after some time.
        </Text>
      
        <Image
            source={require('../../../assets/images/South Park/Craig.png')}
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