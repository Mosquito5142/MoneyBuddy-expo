import React, { useEffect } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router'


export default function App() {

  return (
    <View className="items-center">
        
      <Text className="text-3xl font-bold text-cente pt-10">Hello</Text>
      <Text className="text-xl text-cente py-2">กรุณาเข้าสู่ระบบเพื่อใช้งานแอป</Text>
      <TouchableOpacity onPress={()=>console.log("Login btn")}>
        <Text className="bg-black text-white py-3 px-10 rounded"> Login</Text>
      </TouchableOpacity>
    </View>
  );
}
