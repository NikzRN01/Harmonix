import { Component } from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  playAudio1 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/69[kb]dha-noslide.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio2 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/65[kb]dhi.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio3 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/78[kb]dhin-noslide.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio4 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/87[kb]dha-slide.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio5 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/70[kb]dhin-slide.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio6 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/29[kb]tabla1.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio7 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/16[kb]tay.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio8 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/143[kb]tabla2.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio9 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/142[kb]tabla3.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio10 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/101[kb]tabla5.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio11 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/93[kb]tun.wav.mp3' },
      { shouldPlay: true }
    );
  };
  playAudio12 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/81[kb]tabla6.wav.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://w0.peakpx.com/wallpaper/796/995/HD-wallpaper-rocking-drums-background-drum-drum-background-drum-drumming-rock-rock-drums-thumbnail.jpg' }}
          style={styles.background}
        >
          <View style={styles.top}>
            <View style={styles.row}>
              <TouchableOpacity delayPressIn={0} style={styles.btnexp} onPress={this.playAudio1}></TouchableOpacity>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#7d13de', backgroundColor: '#551b8a' }]}
                onPress={this.playAudio2}
              ></TouchableOpacity>
              <TouchableOpacity style={styles.btnexp} onPress={this.playAudio3}></TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#f7f6f6', backgroundColor: '#b6c9cb' }]}
                onPress={this.playAudio4}
              ></TouchableOpacity>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#f7f6f6', backgroundColor: '#b6c9cb' }]}
                onPress={this.playAudio5}
              ></TouchableOpacity>
            </View>
          </View>

          <View style={styles.center}>
            <TouchableOpacity delayPressIn={0}
              style={[styles.btnexp, { borderColor: '#000000', backgroundColor: '#bbbbbb' }]}
              onPress={this.playAudio11}
            ></TouchableOpacity>
            <TouchableOpacity delayPressIn={0}
              style={[styles.btnexp, { borderColor: '#000000', backgroundColor: '#ffffff' }]}
              onPress={this.playAudio12}
            ></TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <View style={styles.row}>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#f7f6f6', backgroundColor: '#b6c9cb' }]}
                onPress={this.playAudio6}
              ></TouchableOpacity>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#f7f6f6', backgroundColor: '#b6c9cb' }]}
                onPress={this.playAudio7}
              ></TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.btnexp} onPress={this.playAudio8}></TouchableOpacity>
              <TouchableOpacity delayPressIn={0}
                style={[styles.btnexp, { borderColor: '#7d13de', backgroundColor: '#551b8a' }]}
                onPress={this.playAudio9}
              ></TouchableOpacity>
              <TouchableOpacity delayPressIn={0}
               style={styles.btnexp} onPress={this.playAudio10}  ></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
     },
  center: {
    alignSelf: 'flex-end', // Aligns the center row to the right
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20, // Adjust margin as needed
  },
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: -35,
  },
  btnexp: {
    borderRadius: 80,
    borderWidth: 25,
    borderColor: '#fe5501',
    backgroundColor: '#b60c0c',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 110,
    width: 110,
    opacity:0.8
  },
});
