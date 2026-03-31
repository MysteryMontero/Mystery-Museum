import { StyleSheet, View, Text, Animated, Easing, ScrollView, Dimensions, Pressable } from 'react-native';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import Slideshow from '@/components/Slideshow';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Minecraft: require('../../assets/fonts/Minecraftia-Regular.ttf'),
  });

  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
  });

  if (!fontsLoaded) return null;


const sliderImages = [
  require('../../assets/images/TF2/TF2 Kazotsky Kick.png'),
  require('../../assets/images/Danganronpa/Danganronpa.png'),
  require('../../assets/images/South Park/South Park.png'),
  require('../../assets/images/Country Balls.png'),
  require('../../assets/images/Vanoss Crew.png'),
];

const [slideIndex, setSlideIndex] = useState(0);
const fadeAnim = useRef(new Animated.Value(1)).current;
useEffect(() => {
  const interval = setInterval(() => {
    // fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // change image when fully faded out
      setSlideIndex((prev) => (prev + 1) % sliderImages.length);

      // fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  }, 2500); // how long each slide stays (ms)

  return () => clearInterval(interval);
}, [fadeAnim, sliderImages.length]);

const scrollRef = useRef<any>(null);
const [index, setIndex] = useState(0);

const { width } = Dimensions.get('window');
const SLIDE_WIDTH = Math.min(width * 0.9, 420);
const SLIDE_HEIGHT = 220;

const goToIndex = useCallback((i: number) => {
  scrollRef.current?.scrollTo({ x: i * SLIDE_WIDTH, animated: true });
  setIndex(i);
}, [SLIDE_WIDTH]);

useEffect(() => {
  const timer = setInterval(() => {
    const next = (index + 1) % sliderImages.length;
    goToIndex(next);
  }, 2500); // change speed here

  return () => clearInterval(timer);
}, [index, goToIndex, sliderImages.length]);


  return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator>

    <View style={styles.banner}>
      <Animated.Text style={[styles.title, { fontFamily: 'Minecraft', color: colorInterpolation }]}>
        Mystery Museum
      </Animated.Text>
    </View>

    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/images/Banner.png')}
        style={styles.mainImage}
        contentFit="contain"
      />
    </View>

    <Text style={styles.subtitle}>Check Out Mystery's Minecraft Mods!</Text>

    <Slideshow images={sliderImages} />

    <Link href="/(tabs)/mods" asChild>
      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>View All Mods</Text>
        <Text style={styles.cardSub}>Browse everything I’ve released</Text>

    <View style={styles.previewRow}>
      <Image
        source={require('../../assets/images/Goomba.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Vanoss Crew 2.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Fnaf.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
    </View>
  </Pressable>
</Link>

<Link href="/(tabs)/pop_mods" asChild>
  <Pressable style={styles.card}>
    <Text style={styles.cardTitle}>The Big Ones</Text>
    <Text style={styles.cardSub}>View the most successful mods I have created</Text>

    <View style={styles.previewRow}>
      <Image
        source={require('../../assets/images/TF2/TF2.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images//South Park/South Park10.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Slender Man.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
    </View>
  </Pressable>
</Link>

<Link href="/(tabs)/country_mods" asChild>
  <Pressable style={styles.card}>
    <Text style={styles.cardTitle}>Country Balls Project</Text>
    <Text style={styles.cardSub}>Check out my long term project: Country Balls</Text>

    <View style={styles.previewRow}>
      <Image
        source={require('../../assets/images/Country/Country.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Country/Country2.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Country/Country3.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
    </View>
  </Pressable>
</Link>

<Link href="/(tabs)/mods" asChild>
  <Pressable style={styles.card}>
    <Text style={styles.cardTitle}>Future Projects</Text>
    <Text style={styles.cardSub}>Have a sneak peak at some mods that are still in development
      or are just planned ideas in the future
    </Text>

    <View style={styles.previewRow}>
      <Image
        source={require('../../assets/images/Italy Tank.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Mario Jump.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
      <Image
        source={require('../../assets/images/Johnny Bravo.png')}
        style={styles.previewImage}
        contentFit="cover"
      />
    </View>
  </Pressable>
</Link>

      <View style={{ height: 600 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Title
  container: {
    flex: 1,
    backgroundColor: '#1cbacf',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textShadowColor: '#8a2be2',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },

  subtitle: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  banner: {
    width: '100%',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#00ffea',
    alignItems: 'center',
  },
  
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  mainImage: {
    width: '100%',
    height: 500,
  },


  // Slides
  sliderWrap: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },

  slideFrame: {
    width: '90%',
    height: 260,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  slideImage: {
    width: '100%',
    height: '100%',
  },


  // Next Page
  card: {
    marginTop: 24,
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  cardSub: {
    marginTop: 6,
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },

  previewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  previewImage: {
    width: '32%',
    height: 300,
    borderRadius: 10,
  },
});