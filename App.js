import { StyleSheet, Text, TextInput, View , Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Login from './components/Login';
import History from './components/History';
import Alarm from './components/Alarm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#112',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
