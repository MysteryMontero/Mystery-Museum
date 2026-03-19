import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../assets/images/Country/USA/USA Ball.png'),
  require('../../assets/images/Country/USA/USA Human.png'),
  require('../../assets/images/Country/USA/USA Flag.png'),
  require('../../assets/images/Country/USA/USA Gun.png'),
  require('../../assets/images/Country/USA/USA Female.png'),
  require('../../assets/images/Country/USA/USA Tank.png'),
];

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goomba",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://github.com/MysteryMontero/Mystery-Museum/releases/tag/Goomba"
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

      <Text style={styles.title}>Country Balls Project</Text>

      <Image
        source={require('../../assets/images/Country Balls.png')}
        style={styles.mainImage}
        contentFit="cover"/>

      <Text style={styles.sectionTitle}>What is this?</Text>

      <Text style={styles.description}>
        Country Balls is a long-term project designed to implement country-like humanoids into Minecraft where they
        can trade, fight monsters, and even fight each other! The idea is make each country unique and reside to their
        culture as much as possible. Each one will have their own unique weapons, designs, outfits, and biomes to spawn
        in. They will even have relationships towards each other based on their historical or modern relationships.
      </Text>

      <Text style={styles.description}>
        There are 7 different forms for each country ball:
      </Text>

      <Text style={styles.description}>
        Ball Form: The first and most common form. Country Balls do not attack, flee, or do anything except wander.
        They are useless in ball form until they grow up into a new form either through time or by feeding them copper.
        Ball forms are like children that need to be protected to grow. Attack one of them, and the same country will
        attack you.
      </Text>

      <Image
        source={require('../../assets/images/Country/Canada/Canada Ball.png')}
        style={styles.minorImage}
        contentFit="cover"/>

      <Text style={styles.description}>
        Human Form: The most basic form after ball form. Human form is when the country turns humanoid. Some country
        humans are able to have weapons and attack while other ones flee, depending on the type of country. A player
        can also trade with country humans similar to villagers. Each country has different wares.
      </Text>

      <Image
        source={require('../../assets/images/Country/France/France Human.png')}
        style={styles.minorImage}
        contentFit="cover"/>

      <Text style={styles.description}>
        Leader/Flag Holder Form: The ones that carry flags high and mighty. Leaders are dressed differently compared to
        the other forms and are the symbol of their country. All of them will melee attack monsters with their flags.
        Attacking a leader will trigger those of the same country to attack the attacker, similar to the ball form. The
        best feature to note is the anthem. When a player gives a leader a diamond, they will strike a pose and play their
        national anthem all the way through. Truly inspiring.
      </Text>

      <Image
        source={require('../../assets/images/Country/UK/UK Flag.png')}
        style={styles.minorImage}
        contentFit="cover"/>

      <Text style={styles.description}>
        Anthem Showcase:
      </Text>

        {Platform.OS === 'web' ? (
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/gTNMgj5Hdy0"
            title="Minecraft Demon Goat Mod Showcase"
            allowFullScreen
            style={styles.video}
          />
        ) : (
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/gTNMgj5Hdy0' }}
            style={styles.video}
          />
        )}

      <Text style={styles.description}>
        Weapon Forms:
      </Text>

      <Image
        source={require('../../assets/images/Country/Mexico/Mexico Gun.png')}
        style={styles.minorImage}
        contentFit="cover"/>

      <Text style={styles.description}>
        The plan is to have 20 countries in total. Here is the list of countries:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>• USA</Text>
        <Text style={styles.listItem}>• Canada</Text>
        <Text style={styles.listItem}>• Mexico</Text>
        <Text style={styles.listItem}>• UK</Text>
        <Text style={styles.listItem}>• France</Text>
        <Text style={styles.listItem}>• Spain</Text>
        <Text style={styles.listItem}>• Japan</Text>
        <Text style={styles.listItem}>• Australia</Text>
        <Text style={styles.listItem}>• Italy</Text>
        <Text style={styles.listItem}>• Russia</Text>
        <Text style={styles.listItem}>• Brazil</Text>
        <Text style={styles.listItem}>• China</Text>
        <Text style={styles.listItem}>• South Korea</Text>
        <Text style={styles.listItem}>• Germany</Text>
        <Text style={styles.listItem}>• Sweden</Text>
        <Text style={styles.listItem}>• Nigeria</Text>
        <Text style={styles.listItem}>• Egypt</Text>
        <Text style={styles.listItem}>• Saudi Arabia</Text>
        <Text style={styles.listItem}>• India</Text>
        <Text style={styles.listItem}>• Greece</Text>
      </View>

      <Text style={styles.description}>
        Only 7 countries have been made so far: USA, Canada, Mexico, UK, France, Spain, and Japan.
        They are constantly being updated as well. Australia and Italy are currently in development.
        I'm not even half-way done, which is why it's a long-term project. You can try out the demo
        of this project. It only includes the first 5 countries.
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>
      
      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Country Balls Demo ZIP</Text>
      </Pressable>
    </ScrollView>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccf1c',
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
  mainImage: {
    width: '100%',
    height: 500,
    marginTop: 20,
  },
  minorImage: {
    width: '50%',
    height: 300,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30,
    alignSelf: 'flex-start',
  },

  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    lineHeight: 40,
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
    marginBottom: 600,
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
  },
});