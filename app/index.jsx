import React, { useEffect } from 'react';
import { View, Text,Image } from 'react-native';
import {Link} from 'expo-router'


export default function App() {

  return (
    <View className="items-center">
        <Image className="w-25 h-25" source={require('../assets/splash Screen/Rectangle 9.png')}/>
      <Text className="text-3xl font-bold text-cente pt-10">Simple solution for your budget.</Text>
      <Text className="text-xl text-cente py-14">Counter and distribute the income correctly...</Text>
      <Link className="bg-black text-white py-3 px-10 rounded" href="./Home">Continue</Link>
    </View>
  );
}
