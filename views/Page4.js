import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PlusSquareFilled, MinusSquareFilled} from '@ant-design/icons';
import { Button } from 'antd';
import { TextInput } from 'react-native-paper';


export default function Page4() {
    const priceBook = 141800;
    const discount_Code ='duong30%'
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(141800);
    const [sumPrice, setSumPrice] = useState(141800);
    const [code, setCode] = useState('');


    const plus = (count) => {
        count += 1;
        setCount(count);
        setPrice(count * priceBook);
        setSumPrice(count * priceBook);
    }
    const minus = (count) => {
        if (count === 0) {
            count = 0;
            setCount(count);
            setPrice(count * priceBook);
            setSumPrice(count * priceBook);
        } else {
            count -= 1;
            setCount(count);
            setPrice(count * priceBook);
            setSumPrice(count * priceBook);
        }
    }
    const apDiscount = (code) => {
        if(code === discount_Code){
            setSumPrice(price*0.9);
        }else{
            setSumPrice(price);
            alert('discount code is not valid');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerDetail}>
                    <View style={styles.headerItem}>
                        <View style={{ width: '100%', height: 150, flexDirection: 'row' }}>
                            <View style={{ width: '35%' }}>
                                <Image style={styles.book} source={require('../assets/book.png')}></Image>
                            </View>
                            <View style={{ width: '65%' }}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }}>Nguyên hàm tích phân và ứng dụng</Text>
                                <Text style={{ fontSize: 12, fontWeight: 700 }}>Cung cấp bởi Tiki Trading</Text>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: 'red' }}>{priceBook} đ</Text>
                                <Text style={{ fontSize: 12, fontWeight: 700, color: '#808080', textDecorationLine: 'line-through' }}>299.000 đ</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                        <TouchableOpacity onPress={() => {
                                            minus(count);
                                        }}>
                                            <MinusSquareFilled />
                                        </TouchableOpacity>
                                        <Text style={{ paddingRight: 10, paddingLeft: 10, fontSize: 20, fontWeight: 700, marginTop: -7 }}>{count}</Text>
                                        <TouchableOpacity onPress={() => {
                                            plus(count);
                                        }}>
                                            <PlusSquareFilled />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 15, fontWeight: 700, color: '#134FEC', marginTop: 7 }}>Mua sau</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 700, paddingRight: 30 }}>Mã giảm giá đã lưu</Text>
                            <TouchableOpacity style={{ marginTop: 2 }}>
                                <Text style={{ fontWeight: 700, color: "#134FEC" }}>Xem tại đây</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                            <TextInput
                            onChangeText={setCode}
                            left={<TextInput.Icon icon="tag" size={30} color={'yellow'} />}
                            outlineColor="yellow"
                            label={"Mã giảm giá"}
                                style={{ width: 230, height: 50, borderRadius: 0,backgroundColor:'#fff',borderWidth:1,borderColor:'yellow' ,borderBottomColor:'yellow'}} placeholder="Nhập mã giảm giá"
                            />
                            <Button
                            onClick={()=>{
                                apDiscount(code);
                            }}
                            style={{ textAlign: 'center', borderRadius: 5, width: 100, height: 50, color: '#fff', backgroundColor: '#0A5EB7', fontSize: 18, fontWeight: 700 }} >Áp dụng</Button>
                        </View>
                    </View>
                    <View style={{ height: 15, backgroundColor: '#C4C4C4', width: '109%', marginLeft: -15 }}></View>
                    <View style={{ flexDirection: 'row', height: 55, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                        <Text style={{ color: '#134FEC', fontSize: 13, fontWeight: 700 }}>Nhận tại đây?</Text>
                    </View>
                    <View style={{ height: 15, backgroundColor: '#C4C4C4', width: '109%', marginLeft: -15 }}></View>
                    <View style={{ height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Tạm tính</Text>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: 'red' }}>{price} đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 700 }}>Thành tiền</Text>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: 'red' }}>{sumPrice} đ</Text>
                </View>
                <Button style={{ borderRadius: 0, width: "100%", height: 55, color: '#fff', backgroundColor: '#E53935', fontSize: 20, fontWeight: 700 }} >TIẾN HÀNH ĐẶT HÀNG</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundImage: "linear-gradient(to bottom , #3B3B98, #C4C4C4)",
        width: 390,
        height: 844,
    },
    header: {
        width: "100%",
        height: "60%",
        backgroundColor: '#fff',
        padding: 15,
    },
    headerDetail: {
        width: "100%",
        height: "100%",
    },
    headerItem: {
        backgroundColor: '#fff',
        height: 300,
    },
    book: {
        width: 105,
        height: 127,
    },
    footer: {
        width: "100%",
        height: "20%",
        backgroundColor: '#fff',
        padding: 15,
    }

}
);