import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import Drumpad from './Drumpad'
import Instruments from './Instruments'
import Xylophone from './Xylophone'

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="HarmoniX"  component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Instruments"  component={Instruments} options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Drumpad" component={Drumpad} options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="Xylophone" component={Xylophone} options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>    
  );
}

// For piano 
// https://images.unsplash.com/photo-1538402074774-8e624f3f7e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8MXwwfHx8MA%3D%3D

export default App;