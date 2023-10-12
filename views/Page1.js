import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image,TouchableOpacity, Alert } from 'react-native';

const users = [
  { username: 'duong', password: '123' },
  { username: 'duy', password: '123' },
];

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    const user = users.find((user) => user.username == username);
    if (user && user.password == password) {
      alert('Xin chào ' + user.username);
    } else {
      alert('Đăng nhập không thành công');
    }
  };
   return (
    <View style={styles.container}>
    <Text style={styles.text}>LOGIN</Text>
      <View>
        <TextInput placeholder='Name' style={styles.textinput1}  onChangeText={(text) => setUsername(text)}/>
        <Image style={styles.img} source={require('../assets/user.png')} />
      </View>

      <View>
        <TextInput placeholder='Password' style={styles.textinput2} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        <Image style={styles.img1} source={require('../assets/pass.png')} />
        <Image style={styles.img2} source={require('../assets/eye1.png')} />
      </View>

      <TouchableOpacity style={styles.TouchableOpacity1} onPress={handleLogin}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>LOGIN</Text>
      </TouchableOpacity>
  
      <Text style={styles.text1} >Forgot your password?</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC33",
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  text:{
    fontSize: 30, 
    fontWeight: '700',
    marginTop: -100,
    marginRight: 280,
    paddingBottom: 120,

  },

  text1:{
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 40,


  },
  textinput1: {
    backgroundColor: '#debe3c', 
    width: 330, 
    height: 54,
    borderWidth: 1.5,
    borderColor: 'white',
    fontSize: 20,
    paddingLeft: 60, 
    marginBottom: 50, 
  },
  textinput2: {
    backgroundColor: '#debe3c', 
    width: 330, 
    height: 54,
    borderWidth: 1.5,
    borderColor: 'white',
    fontSize: 20,
    paddingLeft: 60, 
    marginBottom: 50, 
    marginTop: -20,
  },
  img:{
    width: 38, 
    height: 36,
    position: 'absolute',
    top: 10,
    left: 5, 
  },
  img1:{
    width: 38, 
    height: 36,
    position: 'absolute',
    top: -9,
    left: 5, 
  }
  ,
  img2:{
    width: 38, 
    height: 36,
    position: 'absolute',
    top: -9,
    right: 10, 
  },
  TouchableOpacity1: {
    width: 330,
    height: 45,
    backgroundColor: '#000',
    marginTop: 20, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
