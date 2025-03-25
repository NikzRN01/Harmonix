import { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const sounds = [
  require('./assets/notesweep.wav'),
  require('./assets/noteA.wav'),
  require('./assets/noteB.wav'),
  require('./assets/noteC.wav'),
  require('./assets/noteC2.wav'),
  require('./assets/noteD.wav'),
  require('./assets/noteE.wav'),
  require('./assets/noteF.wav'),
  require('./assets/noteG.wav'),
];

const colors = [
  '#363461','#ff710e', '#e21208', '#09c4fe', '#59d173', '#f67f54', '#f9b815', '#df47a9', '#a585f9'

];

const playSound = async (url) => {
  try {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
    await playbackObject.playAsync();
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};

export default class App extends Component {
  
  render() {
    return (
     <View style={styles.container}>
      {sounds.map((url, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.button, { backgroundColor: colors[index], height: 50 + (8-index) * 5 }]}
          onPress={() => playSound(url)}
        />
      ))}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
  },
});