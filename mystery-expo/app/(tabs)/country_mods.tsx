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
        contentFit="cover"
        />

      <Text style={styles.sectionTitle}>What is this?</Text>

      <Text style={styles.description}>
        Country Balls is a long-term project designed to implement country-like humanoids into Minecraft where they
        can trade, fight monsters, and even fight each other!
      </Text>

      <Text style={styles.description}>
        The plan is to have 20 countries in total. There are also 7 forms for each country ball:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>• Ball</Text>
        <Text style={styles.listItem}>• Human</Text>
        <Text style={styles.listItem}>• Leader</Text>
        <Text style={styles.listItem}>• Weapon 1</Text>
        <Text style={styles.listItem}>• Weapon 2</Text>
        <Text style={styles.listItem}>• Female</Text>
        <Text style={styles.listItem}>• Tank</Text>
      </View>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>

      <Text style={styles.description}>
        Here is the list of countries:
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
    height: '100%',
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