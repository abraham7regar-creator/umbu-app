import {Auth} from 'aws-amplify';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

function ProfileScreen() {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#223843',
      }}>
      <Pressable
        onPress={logout}
        style={{
          width: 100,
          height: 40,
          backgroundColor: 'white',
          color: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
}

export default ProfileScreen;
