import { StyleSheet, Text, TextInput, View , Image , TouchableOpacity , Linking } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Login({ navigation }) {
  const handleNavigate1 = () => {
    navigation.navigate('History'); 
  }
    const handleNavigate2 = () => {
      Linking.openURL('https://www.google.com');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/asa1.png')}
        style={styles.login_logo}
      />
      <Text
      style={styles.Trading_group}>
        Asa Trading Group
      </Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        placeholderTextColor="#1124" 
      />
      <TextInput
        style={styles.input}
        placeholder="PassWord"
        placeholderTextColor="#1124" 
        secureTextEntry={true}
      />
      <Text
      
      style={styles.register_link} onPress={handleNavigate2}>
        Dont you have an account? Click to register...
      </Text>
      <TouchableOpacity onPress={handleNavigate1}>
        <View style={styles.send_btn}>
          <Entypo name="chevron-right" size={18} color='#112' />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#112',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 400,
    margin: 15,
    borderWidth: 2,
    padding: 15,
    color: '#112',
    borderColor:'#fb0',
    borderRadius: 20,
    backgroundColor:'#ea0',
    elevation: 10,
    
  },
  login_logo: {
    width: 300,
    height: 320,
    margin: 10,
  },
  send_btn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderWidth: 2,
    padding: 15,
    borderColor:'#fb0',
    borderRadius: 90,
    backgroundColor:'#ea0',
    elevation: 10,
  },
  Trading_group: {
    color: '#eee',
    marginBottom: 20,
    fontSize:14,
  },
  register_link: {
    color: '#ea0',
    marginBottom: 20,
    fontSize:12,
    textDecorationLine: 'underline',
  },
});
