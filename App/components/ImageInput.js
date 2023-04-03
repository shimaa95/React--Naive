import React,{useState} from 'react';
import { View,StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons}from '@expo/vector-icons'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker'


function ImageInput({imageUri,onChangeImage}) {

   const handleTouch = () => {
      if(!imageUri)  SelectImage();
      else{
         Alert.alert("Delete","Are you sure you want to delete this image?",[
            {text:'Yes',onPress:()=> onChangeImage(null)},
            {text:'No'},

         ])
         
      }
      
   };
   const SelectImage = async()=> {
      try {    
       const result= await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality:.5,
        });
    if(!result.canceled){
      onChangeImage(result.assets[0].uri);

    }
   } catch (error) {
      console.log("Error image picker",error);
    }
  }
  
   return (
    <>
<TouchableWithoutFeedback onPress={handleTouch}>
    < View style={styles.container} > 
    {!imageUri && <MaterialCommunityIcons name='camera' size={50} color={colors.medium}/>}
    {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}

 </View>
 </TouchableWithoutFeedback>
 </>
  );
}

const styles = StyleSheet.create({
container:{ 
    backgroundColor:colors.Ligth,
    borderRadius:15,
    height:150,
    width:150,
justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'
 },
 image:{
    width:'100%',
    height:'100%',
 }
})
export default ImageInput;