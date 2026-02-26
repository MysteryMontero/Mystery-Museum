import { StyleSheet, View, Text, Animated, Easing, ScrollView, Dimensions, Pressable } from 'react-native';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Minecraft: require('../../assets/fonts/Minecraftia-Regular.ttf'),
  });

  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 2000,
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
  require('../../assets/images/TF2 Kazotsky Kick.png'),
  require('../../assets/images/Danganronpa Trial.png'),
  require('../../assets/images/South Park.png'),
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
  }, 2500); // change speed here (ms)

  return () => clearInterval(timer);
}, [index, goToIndex, sliderImages.length]);


  return (
  <View style={styles.container}>
    <View style={styles.banner}>
      <Animated.Text
        style={[styles.title, { fontFamily: 'Minecraft', color: colorInterpolation }]}
      >
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

    <Text style={styles.subtitle}>
      Check Out Mystery's Minecraft Mods!
    </Text>

    <View style={styles.sliderWrap}>
  <Animated.View style={{ opacity: fadeAnim }}>
    <Image
      source={sliderImages[slideIndex]}
      style={styles.slideImage}
      contentFit="cover"
    />
  </Animated.View>

  <View style={styles.dots}>
    {sliderImages.map((_, i) => (
      <Pressable key={i} onPress={() => setSlideIndex(i)} hitSlop={10}>
        <View style={[styles.dot, i === slideIndex && styles.dotActive]} />
      </Pressable>
    ))}
  </View>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1cbacf',
  },
  scrollContent: {
    paddingBottom: 40,  // gives breathing room at bottom
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



  sliderWrap: {
    marginTop: 20,
    height: 240,
  },

  slidePage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
  },

  slideImage: {
    width: '100%',
    height: 260,
    borderRadius: 16,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },

  dotActive: {
    backgroundColor: '#ffffff',
  },
});