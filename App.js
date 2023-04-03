
import { Alert, Text, TextInput, View,Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'

import Screen from './App/components/Screen';
import Icon from './App/components/Icon';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './App/config/colors';
import { TouchableOpacity } from 'react-native';
import ImageInput from './App/components/ImageInput';
import ImageInputListing from './App/components/ImageInputListing';

export default function App() {
const [imageUris,setImageuris] =useState([]);

const handleAdd = uri =>{
  setImageuris([...imageUris,uri]);
}
const handleRemove = uri => {
  setImageuris(imageUris.filter(imageuri => imageuri !== uri));
}




  return (
<>
<Screen >
<ImageInputListing imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
</Screen>
</>

  );
}

