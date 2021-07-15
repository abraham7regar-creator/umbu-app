import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import searchResults from '../../../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyCk0CSDsWiaGSrYwLLMkscNXT2S2QQJU4U',
            language: 'en',
          }}
        />
      </View>

      {/* Input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/*  List of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
