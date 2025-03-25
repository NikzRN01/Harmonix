import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';

const pages = [
  { name: 'Drum', screen: 'Drumpad' },
  { name: 'Xylophone', screen: 'Xylophone' },
];

const Instruments = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity delayPressIn={0} style={styles.button} onPress={() => navigation.navigate(item.screen)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1509622460822-e6f328c33ac4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.background}
        >
      <View style={styles.overlay}>
        <FlatList
          data={pages}
          renderItem={renderItem}
          keyExtractor={(item) => item.screen}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 200,
  },
  button: {
    marginVertical: 50,
    padding: 10,
    backgroundColor: '#1c2c24',
    borderRadius: 25,
    borderWidth: 5,
    borderColor:'#fefffd',
    width: 300,
    alignItems: 'center',
    opacity: .6
  },
  buttonText: {
    color: '#fefffd',
    fontSize: 30,
  },
});

export default Instruments;
