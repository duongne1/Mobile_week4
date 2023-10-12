import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, Button, Input } from 'antd';
import { TextInput } from 'react-native-paper';
export default function Page2() {
  const [password,setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const checkbox1 = () => {
    setChecked1(!isChecked1); 
  }
  const checkbox2 = () => {
    setChecked2(!isChecked2); 
  }
  const checkbox3 = () => {
    setChecked3(!isChecked3); 
  }
  const checkbox4 = () => {
    setChecked4(!isChecked4); 
  }
  const GeneratePassword = (length, useLowercase, useUppercase, useNumbers, useSpecialChars) => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_+=<>?/{}';

    let availableChars = '';
    if (useLowercase) availableChars += lowercaseChars;
    if (useUppercase) availableChars += uppercaseChars;
    if (useNumbers) availableChars += numberChars;
    if (useSpecialChars) availableChars += symbolChars;

    if (availableChars.length === 0) {
        alert('Cần phải nhập độ dài chuỗi lớn hơn 0');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomIndex);
    }

    setPassword(password);
    return password;
};


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.body1}>
          <Text style={{fontSize: 24, color: 'white', fontWeight: 700}}>PASSWORD</Text>
          <Text style={{fontSize: 24, color: 'white', fontWeight: 700}}>GENERATOR</Text>
        </View>
        <TextInput 
           style={{ color:'#fff', width: 300, height: 55, backgroundColor: '#151537', borderRadius: 0, fontSize: 20, fontWeight: 'bold' }}
           value={password}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between', width: '100%'}}>
          <Text style={{fontSize:20, color: 'white', paddingRight: 30}}>Password length</Text>
          <TextInput   
          onChangeText={setLength}
          style={{width: 120, borderRadius: 0, fontSize: 20, height:30}}
          ></TextInput>
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize:20, color: 'white', paddingRight: 30}}>Include lower case letters</Text>
          <Checkbox style={{height:40, width: 40, color: 'black'}} 
          value={isChecked1} onChange={checkbox1}
          />
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize:20, color: 'white', paddingRight: 30}}>Include upcase letters</Text>
          <Checkbox style={{height:40, width: 40, color: 'black'}}
          value={isChecked2} onChange={checkbox2}
          />
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize:20, color: 'white', paddingRight: 30}}>Include number</Text>
          <Checkbox style={{height:40, width: 40, color: 'black'}}
          value={isChecked3} onChange={checkbox3}
          />
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize:20, color: 'white', paddingRight: 30}}>Include special symbol</Text>
          <Checkbox style={{height:40, width: 40, color: 'black'}}
          value={isChecked4} onChange={checkbox4}
          />
        </View>
        <Button 
         onClick={() => {
          GeneratePassword(length, isChecked1, isChecked2, isChecked3, isChecked4);
         }} 
        style={{width: 250, height: 50,color: '#fff', backgroundColor: '#3B3B98', fontSize: 18, fontWeight: 700, borderRadius: 0}}>GENERATE PASSWORD</Button>



      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: "linear-gradient(to bottom , #3B3B98, #C4C4C4)",
    height: 844,
    padding: 20,
  },
  body: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundImage: "linear-gradient(to bottom , #23235B, #23235B)",
    borderWidth: 1,
}, 
  body1:{
    color: 'White'
  },


});
