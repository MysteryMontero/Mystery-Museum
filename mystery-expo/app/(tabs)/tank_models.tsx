import { StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function Screen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
  <Pressable onPress={() => router.back()} style={styles.backButton}>
    <Text style={styles.backText}>← Back</Text>
  </Pressable>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.title}>USA Tank</Text>
      <Image
        source={require('../../assets/images/Country/USA/USA Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Canada Tank</Text>
      <Image
        source={require('../../assets/images/Country/Canada/Canada Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.title}>Mexico Tank</Text>
      <Image
        source={require('../../assets/images/Country/Mexico/Mexico Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>UK Tank</Text>
      <Image
        source={require('../../assets/images/Country/UK/UK Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.title}>France Tank</Text>
      <Image
        source={require('../../assets/images/Country/France/France Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Spain Tank</Text>
      <Image
        source={require('../../assets/images/Country/Spain/Spain Tank2.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.title}>Japan Tank</Text>
      <Image
        source={require('../../assets/images/Country/Japan/Japan Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>

    <View style={styles.card}>
      <Text style={styles.title}>Australia Tank</Text>
      <Image
        source={require('../../assets/images/Country/Australia/Australia Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.title}>Italy Tank</Text>
      <Image
        source={require('../../assets/images/Country/Italy/Italy Tank.png')}
        style={styles.gridImage}
        contentFit="cover"
      />
    </View>
  </View>
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    },

  card: {
    width: '48%',
    alignItems: 'center',
  },

  gridImage: {
    width: '100%',
    height: 320,
    marginTop: 10,
  },
});