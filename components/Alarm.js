import { StyleSheet, Text, TextInput, View , Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Alarm() {
  return (
    <View style={styles.container}>
      <Text
          style={styles.alarm_text}>
        The place of notification message here!...
      </Text>
      <View style={styles.snooze_btn}>
        <MaterialIcons name="alarm-on" size={80} color='#112' />
        <Text
          style={styles.Time_text}>
        Snooze
      </Text>
      </View>
      <Image
        source={require('../assets/asa2.png')}
        style={styles.app_logo}
      />
      <Text
          style={styles.Trading_group}>
        Powered By Asa Trading Group
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#112',
    alignItems: 'center',
    justifyContent: 'top',
  },
  container2: {
    flex: 1,
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
  app_logo: {
    width: 62,
    height: 60,
    marginTop: 300,
  },
  snooze_btn: {
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    borderWidth: 2,
    padding: 10,
    borderColor:'#fb0',
    borderRadius: 360,
    backgroundColor:'#ea0',
    elevation: 10,
  },
  Trading_group: {
    color: '#eee',
    marginTop: 10,
    fontSize:14,
  },
  Time_text: {
    color: '#112',
    marginTop: 10,
    fontSize:14,
  },
  alarm_text:{
    width:400,
    color: '#ea0',
    marginTop: 100,
    fontSize:20,
  },
  register_link: {
    color: '#ea0',
    marginBottom: 20,
    fontSize:12,
    textDecorationLine: 'underline',
  },
});