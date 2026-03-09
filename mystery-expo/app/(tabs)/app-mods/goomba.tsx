import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, Pressable, ScrollView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function GoombaScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.replace('/(tabs)/mods')} style={styles.backButton}>
        <Text style={styles.backText}>← Back to Mods</Text>
      </Pressable>

      {Platform.OS === 'web' ? (
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/JM_PBlQXg78"
          title="Minecraft Goomba Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/JM_PBlQXg78' }}
          style={styles.video}
        />
      )}

      <Text style={styles.title}>Goomba</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        The Goomba mod brings the classic enemy from the Super Mario series into Minecraft. 
        This mob is able to walk around, attack certain monsters and can open iron doors.
        If you attack them, they will attack you. There are also baby Goombas that can go
        through small gaps. This mod adds a nostalgic crossover experience for Minecraft
        players who enjoy the Mario universe. This is the first mod I have ever made and still is the crown jewel.
      </Text>

      <Text style={styles.description}>
        To access the file, extract the zip. Go into GoombaX, then go into builds and select GoombaX.mcaddon.
        Remember you need to have Minecraft installed for this to work. Open Minecraft, go to a world you want
        to put the mob in and click on the pencil button to the right of your world to enter it's settings.
        Go to behavior packs and resource packs and activate the mob from there. It should appear in your world
        now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>
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
});