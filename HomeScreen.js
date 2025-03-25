import { View, Text, Image , TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image source={require('./assets/Logo.jpg')} style={styles.img}/>
    <TouchableOpacity delayPressIn={0} onPress={() => navigation.navigate('Instruments')}>
    <Text style={styles.arrow}>    >>></Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171815'
  },
  img: {
    marginLeft: -50,
    marginTop: -40,
    resizeMode: 'cover',
    position: 'absolute',
  },
  arrow:{
    borderRadius: 1000,
    borderColor: '#ffffff',
    borderWidth: 2 ,
    margin: 150,
    marginTop:600,
    color: '#ffffff',
    fontSize: 30,
  }
});

export default HomeScreen;