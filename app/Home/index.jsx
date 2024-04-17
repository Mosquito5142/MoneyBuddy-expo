import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import servicrs from '../../utils/servicrs';
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

  return (
    <View>
      <Link href="./">Home</Link>
    </View>
  );
}
