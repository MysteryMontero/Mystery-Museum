import { StyleSheet, Text, View, Pressable, Animated, ScrollView, Easing } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

const mods = [
  {
    name: 'Goomba',
    image: require('../../assets/images/Goomba.png'),
    route: '/(tabs)/app-mods/goomba',
  },
  {
    name: 'Bob-omb',
    image: require('../../assets/images/Bob-omb.png'),
    route: '/(tabs)/app-mods/bob-omb',
  },
  {
    name: 'Propeller Boy',
    image: require('../../assets/images/Propeller.png'),
    route: '/(tabs)/app-mods/propellerboy',
  },
  {
    name: 'Chef Ronaldo',
    image: require('../../assets/images/Chef.png'),
    route: '/(tabs)/app-mods/chefronaldo',
  },
  {
    name: 'Slime Rancher',
    image: require('../../assets/images/Slime Rancher/Slime Rancher.png'),
    route: '/(tabs)/app-mods/slimerancher',
  },
  {
    name: 'Crazy the Deer',
    image: require('../../assets/images/Crazy/Crazy.png'),
    route: '/(tabs)/app-mods/crazythedeer',
  },
  {
    name: 'Moose',
    image: require('../../assets/images/Crazy/Moose.png'),
    route: '/(tabs)/app-mods/moose',
  },
  {
    name: 'Goatee',
    image: require('../../assets/images/Crazy/Goatee.png'),
    route: '/(tabs)/app-mods/goatee',
  },
  {
    name: 'Team Fortress 2',
    image: require('../../assets/images/TF2/TF2.png'),
    route: '/(tabs)/app-mods/tf2',
  },
  {
    name: 'Five Nights at Freddys',
    image: require('../../assets/images/Fnaf/Fnaf.png'),
    route: '/(tabs)/app-mods/fnaf',
  },
  {
    name: 'Five Nights at Freddys 2',
    image: require('../../assets/images/Fnaf/Fnaf2.png'),
    route: '/(tabs)/app-mods/fnaf2',
  },
  {
    name: 'Sexy Moo Moo',
    image: require('../../assets/images/MooMoo2.png'),
    route: '/(tabs)/app-mods/moomoo',
  },
  {
    name: 'Slender Man',
    image: require('../../assets/images/Slender Man.png'),
    route: '/(tabs)/app-mods/slender',
  },
  {
    name: 'Ruckus Rhino',
    image: require('../../assets/images/Ruckus10.png'),
    route: '/(tabs)/app-mods/ruckus',
  },
  {
    name: 'South Park',
    image: require('../../assets/images/South Park/South Park.png'),
    route: '/(tabs)/app-mods/southpark',
  },
  {
    name: 'Danganronpa',
    image: require('../../assets/images/Danganronpa/Danganronpa.png'),
    route: '/(tabs)/app-mods/danganronpa',
  },
  {
    name: 'Country Balls',
    image: require('../../assets/images/Country Balls.png'),
    route: '/(tabs)/country_mods',
  },
  {
    name: 'Headcrab',
    image: require('../../assets/images/Headcrab.png'),
    route: '/(tabs)/app-mods/headcrab',
  },
  {
    name: 'Vanoss Crew',
    image: require('../../assets/images/Vanoss/Vanoss Crew.png'),
    route: '/(tabs)/app-mods/vanoss',
  },
];

export default function ModRouletteScreen() {
  const router = useRouter();
  const [selectedMod, setSelectedMod] = useState(mods[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const [fontsLoaded] = useFonts({
    Minecraft: require('../../assets/fonts/Minecraftia-Regular.ttf'),
  });

  const colorAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    colorAnim.setValue(0);

    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [colorAnim]);

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
  });

  if (!fontsLoaded) return null;

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const finalIndex = Math.floor(Math.random() * mods.length);
    let currentStep = 0;
    const totalSteps = 18 + Math.floor(Math.random() * 8);

    const runStep = () => {
      const randomIndex =
        currentStep < totalSteps - 1
          ? Math.floor(Math.random() * mods.length)
          : finalIndex;

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0.35,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 90,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setSelectedMod(mods[randomIndex]);

        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 90,
            useNativeDriver: true,
          }),
        ]).start(() => {
          currentStep++;

          if (currentStep < totalSteps) {
            const delay = 60 + currentStep * 18;
            setTimeout(runStep, delay);
          } else {
            setIsSpinning(false);
          }
        });
      });
    };

    runStep();
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.banner}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Animated.Text
          style={[
            styles.bannerTitle,
            { fontFamily: 'Minecraft', color: colorInterpolation },
          ]}
        >
          Mod Roulette
        </Animated.Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Spin To Get A Random Mod!</Text>

        <Pressable
          onPress={() => {
            if (!isSpinning) {
              router.push(selectedMod.route as any);
            }
          }}
          disabled={isSpinning}
          style={({ pressed }) => [
            styles.cardPressable,
            pressed && !isSpinning && styles.cardPressed,
          ]}
        >
          <Animated.View
            style={[
              styles.card,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <Image
              source={selectedMod.image}
              style={styles.modImage}
              contentFit="cover"
            />
            <Text style={styles.modName}>{selectedMod.name}</Text>
            <Text style={styles.cardHint}>
              {isSpinning ? '' : 'Tap card to open this mod'}
            </Text>
          </Animated.View>
        </Pressable>

        <Pressable
          style={[styles.spinButton, isSpinning && styles.disabledButton]}
          onPress={spin}
          disabled={isSpinning}
        >
          <Text style={styles.spinButtonText}>
            {isSpinning ? 'Spinning...' : 'Spin'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf1cc6',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 40,
    zIndex: 2,
  },
  backText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 140,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#ff00d4',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textShadowColor: '#8a2be2',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    textAlign: 'center',
    marginTop: -20,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
  },
  cardPressable: {
    width: '100%',
    maxWidth: 420,
  },
  cardPressed: {
    opacity: 0.9,
  },
  card: {
    width: '100%',
    backgroundColor: '#ff00d4',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
  },
  modImage: {
    width: '100%',
    height: 260,
    borderRadius: 12,
  },
  modName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 16,
    textAlign: 'center',
  },
  cardHint: {
    fontSize: 15,
    color: '#ffffff',
    marginTop: 10,
    textAlign: 'center',
  },
  spinButton: {
    marginTop: 30,
    backgroundColor: '#000000',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },
  spinButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.6,
  },
});