import React, { useEffect } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import {Link,useRouter} from 'expo-router'
import { client } from '../../utils/kindconfig';
import servicrs from '../../utils/servicrs';


export default function App() {
  const router=useRouter();
  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      await servicrs.storeData('login','true');
      router.replace('./Home')
    }
  };
  return (
    <View className="items-center">
        <Image className="w-25 h-25" source={require('../../assets/splash Screen/Rectangle 9.png')}/>
      <Text className="text-3xl font-bold text-cente pt-10">Hello</Text>
      <Text className="text-xl text-cente py-2">กรุณาเข้าสู่ระบบเพื่อใช้งานแอป</Text>
      <TouchableOpacity className="py-2" onPress={handleSignIn}>
        <Text className="bg-purple text-white font-bold py-3 px-20 rounded-full">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>console.log("Sign Up")}>
        <Text className="bg-transparent text-purple py-3 px-20 border border-purple rounded">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
