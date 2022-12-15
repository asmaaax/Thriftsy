import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MyButton from './MyButton';
import { useDispatch, useSelector } from 'react-redux';

export default function MyImagePicker() {
  const [image, setImage] = useState(null);
  const imageURI = useSelector(state => state.image_uri);

  
  const dispatch = useDispatch();

  const addImageURI = (image_) => {
    const action = {
        type: 'ADD_IMAGE',
        payload: image_
    };
    dispatch(action);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result)

    if (!result.canceled) {
      setImage({uri: result.assets[0].uri});
      addImageURI({uri: result.assets[0].uri})
    }
  };

  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    

    if (!result.canceled) {
        setImage({uri: result.assets[0].uri});
        addImageURI({uri: result.assets[0].uri})
        // console.log(result.assets[0].uri)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MyButton text="Upload image from camera" onPressFunction={takeImage}/>
      <MyButton text="Upload image from photo gallery" onPressFunction={pickImage}/>

      {image && <Image source={imageURI} style={{ width: 200, height: 200 }} />}
    </View>
  );
  }