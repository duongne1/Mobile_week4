
import { StyleSheet, Text, View, Image } from 'react-native';
import { Rate, Button, Input } from 'antd';
import { CameraFilled } from '@ant-design/icons';
export default function Page2() {
  return (
    <View style={styles.container}>
      <View style={styles.body1}>
        <Image style={{width: 70, height:70}} source={require('../assets/usb.png')}></Image>
        <Text style={styles.text1}>USB Bluetooth Music Receiver HJX-001
          - Biến loa thường thành loa bluetooth
        </Text>
      </View>
      <View style={styles.body2}>  
        <Text style={styles.text2}>Cực kỳ hài lòng</Text>
        <Rate style={{fontSize: 45, marginTop: 10}} defaultValue={5}/>
        <Button style={styles.btn1} icon={<CameraFilled style={{fontSize:40}}/>}>Thêm hình ảnh</Button>
        <Input.TextArea
        style={styles.textArea}
        rows={5} 
        placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm"
      />
        <Button style={styles.btn2}>Gửi</Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 844,
    padding: 20,
  },
  body1:{
    flexDirection: 'row',
  },
  body2:{
    height:500,
    alignItems:'center',
    justifyContent:'space-around',

  },
  text1:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  text2:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60,
  }, 
  btn1:{
    width: 330,
    height: 70,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 20,

  },
  textArea: {
    width: '100%',
    borderWidth: 1,
    fontSize:18,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 3,
  }, 
  btn2:{
    width: 330,
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 6,
    justifyContent:'center',
    alignItems:'center',
    color: 'white',
    backgroundColor: 'blue',
  }
  
});

