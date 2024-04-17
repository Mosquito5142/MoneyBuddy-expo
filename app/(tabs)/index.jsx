import React, { useEffect } from 'react';
import { View,Button,Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import servicrs from '../../utils/servicrs';
import { client } from '../../utils/kindconfig';
export default function Page() {

  const router=useRouter();
  useEffect(()=>{
    checkUserAuth();
  },[])
    const checkUserAuth=async()=>{
      const result=await servicrs.getData('login');
     if (result!=='true'){
      router.replace('./login')
     }
    }
    const handleLogout = async () => {
      const loggedOut = await client.logout();
      if (loggedOut) {
          await servicrs.storeData('login','false');
          router.replace('./login')
      }
  };

  return (
    <View>
      <Text onPress={handleLogout}>Logout</Text>
    </View>
  );
}
