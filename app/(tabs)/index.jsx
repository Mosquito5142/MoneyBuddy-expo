import React, { useEffect } from 'react';
import { View,Button,Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import servicrs from '../../utils/servicrs';
import { client } from '../../utils/kindconfig';
import { supabase } from '../../utils/SupabaseConfig';
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
  const getCategoryList=async()=>{
    const user=await client.getUserDetails();
    const {data,error}=await supabase.from('Category')
    .select('*')
    .eq('created_by',user.email);
    console.log("Data",data)
  }

  return (
    <View>
      <Text onPress={getCategoryList} className="bg-purple text-white font-bold py-3 px-20 rounded-full" >แสดงข้อมูลใน console</Text>
      <Text onPress={handleLogout}>Logout</Text>
      
    </View>
  );
}
