import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';

const sliderImages = [
  require('../../../assets/images/MooMoo.png'),
  require('../../../assets/images/MooMoo2.png'),
  require('../../../assets/images/MooMoo3.png'),
  require('../../../assets/images/MooMoo4.png'),
  require('../../../assets/images/MooMoo5.png'),
  require('../../../assets/images/MooMoo6.png'),
  require('../../../assets/images/MooMoo7.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/84cbsk9az9u7ez5/Sexy_Moo_Moo.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/84cbsk9az9u7ez5/Sexy_Moo_Moo.zip/file"
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
          src="https://www.youtube.com/embed/zAhpqKpHjCw"
          title="Minecraft Sexy Moo Moo Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/zAhpqKpHjCw' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Sexy Moo Moo</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        Behold, the funniest mod I have ever made! The Sexy Moo Moo! Before you ask, no it does not include 18+ content.
        Sexy Moo Moos are humanoid muscular-looking cows that can do all sorts of quirky things. Players can ride them
        like a horse. Some of them will be able to jump really short or ridiculously high when riding them. Players can
        also milk them with a bucket, just make sure your parents aren't around when you do. They can also attack monsters,
        have babies, and even ride each other, creating stacks and forming towers of Sexy Moo Moos! I promise you will have
        a lot of fun with these guys!
      </Text>

      <Text style={styles.description}>
        In order to tame a Moo Moo, you just need to ride it a few times until it warms up to you, similar to a horse.
        Once you tame one, that same one will not be able to ride other Moo Moos. They also are madly in love with wheat
        and will come rushing at you if you have some in your hand. You can gather an army of Moo Moos just by holding
        wheat. The wheat is used for both healing and mating.
      </Text>

      <Text style={styles.description}>
        There are 5 types of Sexy Moo Moos: Standard, White, Male, Mooshroom, and Brownshroom:
      </Text>

      <Text style={styles.description}>
        Standard ones look like regular Minecraft cows and are the basic Moo Moos.
      </Text>

      <Text style={styles.description}>
        White Moo Moos have less health but move faster.
      </Text>

      <Text style={styles.description}>
        Male Moo Moos have more health but move slower. You also cannot milk Male Moo Moos with a bucket. You have to use
        an empty bottle instead, though their milk will be a bit...different. It might taste funky too.
      </Text>

      <Text style={styles.description}>
        Mooshroom Moo Moos are like Standard Moo Moos, but you can get mushroom stew and shear off mushrooms from them.
        If you feed a Standard Moo Moo a red mushroom, they will turn into a Mooshroom Moo Moo.
      </Text>

      <Text style={styles.description}>
        Brownshroom Moo Moos are the same as Mooshroom Moo Moos, but they give brown mushrooms. They are the rarest Moo
        Moo. If you feed a Standard Moo Moo a brown mushroom, they will turn into a Mooshroom Moo Moo.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into Sexy Moo Moo folder, then go into builds and select Sexy Moo
        Moo.mcaddon. Remember you need to have Minecraft Bedrock installed for this to work. Open Minecraft, go to a world
        you want to put the mob in and click on the pencil button to the right of your world to enter it's settings. Go to
        behavior packs and resource packs and activate the mob from there. They should appear in your world now and you
        should have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Sexy Moo Moo ZIP</Text>
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