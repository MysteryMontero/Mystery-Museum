import { StyleSheet, View, Text, Pressable, ScrollView, Platform, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Slideshow from '@/components/Slideshow';
import { Image } from 'expo-image';

const sliderImages = [
  require('../../../assets/images/Vanoss/Vanoss Crew.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew2.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew3.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew4.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew5.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew6.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew7.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew8.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew9.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew10.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew11.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew12.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew13.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew14.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew15.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew16.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew17.png'),
  require('../../../assets/images/Vanoss/Vanoss Crew18.png'),
];

const openVideo = async () => {
  const url = 'https://www.youtube.com/watch?v=K3tebyk3MDQ';

  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    await WebBrowser.openBrowserAsync(url);
  }
};

const downloadMod = () => {
  if (Platform.OS === "web") {
    window.open(
      "https://www.mediafire.com/file/ag3mvautwgj9rae/Vanoss_Crew.zip/file",
      "_blank"
    );
  } else {
    Linking.openURL(
      "https://www.mediafire.com/file/ag3mvautwgj9rae/Vanoss_Crew.zip/file"
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
          src="https://www.youtube.com/embed/K3tebyk3MDQ"
          title="Minecraft Vanoss Crew Mod Showcase"
          allowFullScreen
          style={styles.video}
        />
      ) : (
        <Pressable onPress={openVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Watch Showcase Video</Text>
        </Pressable>
      )}

      <Text style={styles.title}>Vanoss Crew</Text>


      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        WARNING: This mod contains foul language, racial, sexual, and offensive humor, and lots of dancing.
      </Text>

      <Text style={styles.description}>
        The Vanoss Crew Minecraft Mod is the biggest project I have ever made being almost half a year in development.
        Based from the original YouTube channel VanossGaming, Vanoss and his friends are here in Minecraft with all sorts
        of weapons, voice lines, references, and dance moves! This mod includes 8 characters: Vanoss, Delirous, Nogla,
        Moosnuckel, Wildcat, Basically, Terroriser, and Lui. All of them have different attacks, forms, and quirks.
      </Text>

      <Text style={styles.description}>
        Each character has a primary, a secondary, and a melee attack.
      </Text>

      <Text style={styles.description}>
        To access the file, first extract the zip. Go into any of the folders such as Vanoss, then go into builds and
        select Vanoss.mcaddon. You'll to repeat the same process for all folders. Remember you need to have Minecraft
        Bedrock installed for this to work. Open Minecraft, go to a world you want to put the mob in and click on the
        pencil button to the right of your world to enter it's settings. Go to behavior packs and resource packs and
        activate the mob from there. They should appear in your world now and have a spawn egg.
      </Text>

      <Text style={styles.description}>
        Note: This mod is made for Bedrock Edition
      </Text>

      <Text style={styles.sectionTitle}>Download</Text>

      <Pressable
        onPress={downloadMod}
        style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Vanoss Crew ZIP</Text>
      </Pressable>

      <Text style={styles.galleryTitle}>Gallery</Text>

      <View style={styles.galleryContainer}>
        <Slideshow images={sliderImages} />
      </View>

    <Text style={styles.teamTitle}>Vanoss</Text>

    <Text style={styles.teamTitle2}>The Bird With The Banana</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Vanoss Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          RPG: Shoots an RPG at enemies causing a huge explosion on impact and dealing massive damage. Takes time
          to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Banana Launcher: Shoots bananas at enemies that deal low damage. When the bananas land on the ground,
          they will turn into banana peels and act as land mines. Any enemy that steps on them will take a hit and move
          slower for a short period of time.
        </Text>

        <Text style={styles.teamDescription}>
          Brass Knuckles: Melee attacks with a brass knuckle on his hand.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Vanoss.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Vanoss Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Double Shield: During melee combat, Vanoss has a 30% chance of pulling out his double shield. not only does it
          block the incoming damage, but it grants Vanoss and nearby allies temporary protection effect.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Bat Owl
          </Text>

          <Text style={styles.teamTopDescription2}>
            Bat Owl Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Super AK: Fires a massive rapid spray of bullets at enemies. Takes time to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Dual Pistols: Contsantly shoots at enemies with dual pistols. Uses both pistols before ending the attack.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Combat: Vanoss fights enemies with his awesome fighting skills.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Delirious</Text>

    <Text style={styles.teamTitle2}>The Masked Madman</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Delirious Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Assault Rifle: Shoots a rapid fire rifle at the enemy.
        </Text>

        <Text style={styles.teamDescription}>
          Bubble Daryl Shotgun: Delirious shoots his bubble daryl shotgun at enemies which does great damage and pushes
          the enemy back when shot.
        </Text>

        <Text style={styles.teamDescription}>
          Chainsaw: Delirious revs up his chainsaw and goes crazy on the enemy, dealing big melee damage. Takes time to
          rev up the chainsaw.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Delirious.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Delirious Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Teddy Bear: Sometimes during combat, Delirious will pull out a teddy bear and place it on the ground. The teddy
          bear attacts all enemies into attacking it and explodes when it loses all health.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Bat Coon
          </Text>

          <Text style={styles.teamTopDescription2}>
            Bat Coon Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Trash Gun: Fires a gun the shoots trash projectiles at enemies. Each projectile has a different effect.
          Occasionally, he will shoot out a shark eating a cheese burger that deals massive damage.
        </Text>

        <Text style={styles.teamDescription}>
          Teddy Bear Turret: Drops a teddy bear, but this one acts like a turret, shooting nearby enemies
          as well as having the same mechanics a regular teddy bear has.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Claws: Fights with his Bat Coon claws.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Nogla</Text>

    <Text style={styles.teamTitle2}>The "Mhm" Guy</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Nogla Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Sniper Rifle: Shoots enemies from a far away distance with a sniper.
        </Text>

        <Text style={styles.teamDescription}>
          Jerry Can: Throws a jerry can that acts like a grenade, blowing up on impact and causing fire to spread on
          enemies.
        </Text>

        <Text style={styles.teamDescription}>
          Crowbar: Classic Gmod crowbar used to melee attack foes.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Nogla.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Nogla Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Balloon Travel: Sometimes during combat, Nogla will equip a balloon helmet that makes him fly, being able to
          attack enemies from a high vantage with his original attacks. Nogla has another small quirk where he can see
          enemies further away than the rest of the crew.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Doctor Nogla (He can heal nearby allies)
          </Text>

          <Text style={styles.teamTopDescription2}>
            Doctor Nogla Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Monster Plant: Nogla sets down a potted plant which will grow over time and become a giant monster plant that
          attacks nearby enemies with a powerful chomp. Takes a lot of time to grow. Nogla can heal the plants when he is
          nearby.
        </Text>

        <Text style={styles.teamDescription}>
          Head Crab Launcher: Launches green headcrabs that attack enemies. Takes time to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Cocktus: Nogla uses a physics gun to carry a cocktus and swings it at enemies dealing melee damage. Low damage
          but high range.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Moosnuckel</Text>

    <Text style={styles.teamTitle2}>The King of Dad Jokes</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Moo Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Crossbow: Shoots arrows that can go through multiple enemies.
        </Text>

        <Text style={styles.teamDescription}>
          Ray Gun: Shoots a bullet that not only deals damage but also gives weakness to the enemy and sets them on fire.
        </Text>

        <Text style={styles.teamDescription}>
          Boxing Gloves: Punches enemies up close and giving enemies weakness when hit.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Moosnuckel.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Moo Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Prop Hunt: When on low health, Moo has a chance of turning into a prop and fleeing from the enemy, healing
          over time in prop form. After some time, Moo will turn back to normal, healed up and ready to fight once more.
          There are six props Moo can turn into; Toilet, Cocktus, Tiki Girl, Barrel, Vending Machine, and T-Pose. All
          props are the same.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Early Bird (Can fly in the sky)
          </Text>

          <Text style={styles.teamTopDescription2}>
            Early Bird Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Pulse Rifle: Fires a slow but powerful big bullet that does massive damage and goes through multiple enemies.
          Takes time to shoot.
        </Text>

        <Text style={styles.teamDescription}>
          Submachine Gun: Fires a ton of rapid spread bullets at enemies. Can shoot while flying too.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Combat: Fights in close-quarter combat. Can melee fight while flying too.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Wildcat</Text>

    <Text style={styles.teamTitle2}>The Gangsta Pig</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Wildcat Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Shotgun: Shoots a spreadshot of bullets at the enemy.
        </Text>

        <Text style={styles.teamDescription}>
          Bubble Gun: Shoots bubbles that move slow and float in the air. They deal very little damage but can knock
          enemies back.
        </Text>

        <Text style={styles.teamDescription}>
          Baseball Bat: Smashes enemies with a baseball bat, also causing weakness effect on hit.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Wildcat.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Wildcat Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Baby Wildcat: Sometimes during combat, Wildcat will spawn a mini version of himself that will help fight alongside
          him. They have all the same attacks as Wildcat does, but are weaker. They also have less health.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Wild Boar
          </Text>

          <Text style={styles.teamTopDescription2}>
            Wild Boar Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Machine Launcher: Part machine gun, part rocket launcher. Shoots a barrage of bullets end ending it off with
          a rocket to the face at the enemy.
        </Text>

        <Text style={styles.teamDescription}>
          Claymore: Sets down a claymore to act as a land mine. Causes a huge explosion when enemies step on it.
          Occasionally, it slightly inches towards a nearby enemy ever so quietly.
        </Text>

        <Text style={styles.teamDescription}>
          Wild Blades: Goes berserk and melee attacks with two sharp blades.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Basically</Text>

    <Text style={styles.teamTitle2}>The Fortnite Guy</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Basically Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Laser Gun: Shoots laser at the enemy. There are 3 types of lasers the gun can shoot, each one doing a different
          effect.
        </Text>

        <Text style={styles.teamDescription}>
          Revolver: Shoots a revolver. Has a 1-in-6 chance of shooting a super bullet which does massive damage.
        </Text>

        <Text style={styles.teamDescription}>
          Fortnite Picaxe: Uses the picaxe from Fortnite as a melee weapon.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Basically.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Basically Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Bush Disguise: During combat, Basically has a chance to hide in a bush, completely unseen by enemies. He then
          slowly creeps up on them and does a high damaging sneak attack from behind.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Dinosaur Basically
          </Text>

          <Text style={styles.teamDescription}>
            Dinosaur Basically is huge and has high health and damage, so he only has two attacks. You can also ride on
            him. Can hold up to 3 people.
          </Text>

          <Text style={styles.teamTopDescription2}>
            Dinosaur Basically Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Chomp: Runs towards enemies and chomps them up close, dealing massive damage.
        </Text>

        <Text style={styles.teamDescription}>
          Cigar Flames: Basically shoots a barrage of fireballs from a cigar in his mouth and damages and burns enemies.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Terroriser</Text>

    <Text style={styles.teamTitle2}>Do The Voice!</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Terroriser Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Minigun: Fires an endless barrage of bullets from a minigun. Takes time to rev up.
        </Text>

        <Text style={styles.teamDescription}>
          C4: Throws a C4 at the enemy which explodes after a while.
        </Text>

        <Text style={styles.teamDescription}>
          Dirty Knife: Attacks with a knife with increased speed.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Terroriser.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Terroriser Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Terminator: On death, Terroriser has a 50/50 chance of turning into a robot terminator. In this form, he moves
          slow but does high melee damage and cannot be knockbacked. Also is immune to fire and lava. Will die after a
          short period of time.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Choppa (Flies in the air)
          </Text>

          <Text style={styles.teamDescription}>
            Because the Choppa flies, it only has two attacks. It can also hold up to 9 people.
          </Text>

          <Text style={styles.teamTopDescription2}>
            Choppa Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Gattling Gun: Fires a massive barrage of bullets from a gattling gun.
        </Text>

        <Text style={styles.teamDescription}>
          Missile Launcher: Shoots missiles at enemies that explode on impact.
        </Text>
      </View>
    </View>





    <Text style={styles.teamTitle3}>Lui</Text>

    <Text style={styles.teamTitle2}>The Mini Monkey</Text>
      
    <View style={styles.teamRow}>
       <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription}>
            Lui Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Lui is a little different from the rest of the crew. He has less health, but in exchange he has 5 different
          attacks.
        </Text>
        
        <Text style={styles.teamDescription}>
          Bayblade: Shoots a bayblade that bounces on the ground, attacking enemies that bump into it.
        </Text>

        <Text style={styles.teamDescription}>
          Snowball: Throws snowballs that do small damage but pushes back enemies.
        </Text>

        <Text style={styles.teamDescription}>
          Toy Plane: Sends out a small toy plane that fires mini bullets at enemies and then kamikazis into them.
        </Text>

        <Text style={styles.teamDescription}>
          Toy Robot: Sends out a toy robot that melee attacks enemies. Blows up after a period of time.
        </Text>

        <Text style={styles.teamDescription}>
          Paddle Ball: Melee attack enemies with a paddle ball. Less damage for more range.
        </Text>
      </View>
      
      <Image
        source={require('../../../assets/images/Vanoss/Lui.png')}
        style={styles.teamImage}
        contentFit="cover"/>
      </View>


      <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Lui Special Quirk:
          </Text>

        <Text style={styles.teamDescription}>
          Curcunut: If lucky, Lui will attack by throwing a coconut at the enemy, dealing massive damage and slowing them
          down by a lot.
        </Text>
      </View>
    </View>

    <View style={styles.teamRow}>
        <View style={styles.textColumn}>
          <Text style={styles.teamTopDescription2}>
            Super Form: Mega Monkey (Can ride him)
          </Text>

          <Text style={styles.teamTopDescription2}>
            Mega Monkey Attacks:
          </Text>

        <Text style={styles.teamDescription}>
          Curcunut Slingshot: Fires coconuts from a slingshot. Hard to aim but on contact they deal great damage and slow
          enemies down greatly.
        </Text>

        <Text style={styles.teamDescription}>
          Super Banana Launcher: Shoots 3 bananas at once. When the bananas land on the ground, they will turn into banana
          peels and act as land mines. Any enemy that steps on them will take a hit and move slower for a short period of
          time.
        </Text>

        <Text style={styles.teamDescription}>
          Melee Combat: Lui smashes enemies up close with his massive monkey muscles.
        </Text>
      </View>
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
    height: 300,
    marginTop: 10,
    marginBottom: 40,
  },

  teamRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
  },

  teamTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 500,
    textAlign: 'center',
    width: '100%',
  },

  teamTitle2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    width: '100%',
  },

  teamTitle3: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 100,
    textAlign: 'center',
    width: '100%',
  },

  teamTopDescription: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
  },

  teamDescription: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
    marginTop: 20,
  },

  teamTopDescription2: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 30,
    marginTop: 20,
  },

  teamImage: {
    width: '50%',
    height: 350,
  },

  textColumn: {
    flex: 1,
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
    width: '50%',
    lineHeight: 30,
  },
});