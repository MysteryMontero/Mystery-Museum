import { View, StyleSheet, Animated, Pressable, Text, Platform } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Image } from 'expo-image';

interface SlideshowProps {
  images: any[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const isMobile = Platform.OS !== 'web';

  const changeSlide = (newIndex: number) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIndex((newIndex + images.length) % images.length);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.container}>
      <View style={[styles.frame, isMobile && styles.frameMobile]}>
        <Animated.View style={{ opacity: fadeAnim, width: '100%', height: '100%' }}>
          <Image
            source={images[index]}
            style={styles.image}
            contentFit="cover"
          />
        </Animated.View>

        <Pressable
          style={[styles.arrow, styles.left, isMobile && styles.arrowMobile]}
          onPress={() => changeSlide(index - 1)}
        >
          <Text style={[styles.arrowText, isMobile && styles.arrowTextMobile]}>‹</Text>
        </Pressable>

        <Pressable
          style={[styles.arrow, styles.right, isMobile && styles.arrowMobile]}
          onPress={() => changeSlide(index + 1)}
        >
          <Text style={[styles.arrowText, isMobile && styles.arrowTextMobile]}>›</Text>
        </Pressable>
      </View>

      <View style={styles.dots}>
        {images.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },

  frame: {
    width: '65%',
    height: 750,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frameMobile: {
    width: '92%',
    height: 260,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  arrow: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -30 }],
    paddingHorizontal: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 18,
  },

  arrowMobile: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  left: {
    left: 10,
  },

  right: {
    right: 10,
  },

  arrowText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },

  arrowTextMobile: {
    fontSize: 34,
  },

  dots: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  activeDot: {
    backgroundColor: '#ffffff',
  },
});